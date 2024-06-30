import React from 'react';
import { useWallet, useConnex } from '@vechain/dapp-kit-react';
import { clauseBuilder, unitsUtils } from '@vechain/sdk-core';
import Error from './error';

export const BuyButton = ({ recipient, price, token, foodItem }: { recipient: string; price: string; token: 'B3TR' | 'VET'; foodItem: string }) => {
    const { account } = useWallet();
    const connex = useConnex();
    const [txId, setTxId] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');

    const handleBuy = async () => {
        if (!account || !recipient) return;

        try {
            setError('');

            const value = token === 'B3TR'
        ? unitsUtils.parseUnits(price, 18).toString()
        : unitsUtils.parseVET(price).toString();

      const clauses = [
        {
          to: recipient,
          value: value,
          data: '0x',
          comment: `Buy ${foodItem} for ${price} ${token}`,
        },
      ];

      const tx = connex.vendor.sign('tx', clauses).signer(account);
      const { txid } = await tx.request();
      setTxId(txid);
    } catch (err) {
      setError(String(err));
    }
  };

    if (!account) return <div>Please connect your wallet to continue.</div>;

    return (
        <div className='space-y-4 max-w-lg'>
            <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleBuy}
            >
                Buy {foodItem} for {price} {token}
            </button>
            {Boolean(error) && <Error>{error}</Error>}
        </div>
    );
};