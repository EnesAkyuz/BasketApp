import React from 'react';
import { useWallet, useConnex } from '@vechain/dapp-kit-react';
import { clauseBuilder, unitsUtils } from '@vechain/sdk-core';
import Error from './error';

export const ClaimRewardButton = ({ rewardAddress, amount, token }: { rewardAddress: string; amount: string; token: 'B3TR' | 'VET' }) => {
    const { account } = useWallet();
    const connex = useConnex();
    const [txId, setTxId] = React.useState<string>('');
    const [error, setError] = React.useState<string>('');

    const handleClaim = async () => {
        if (!account || !rewardAddress) return;

        try {
            setError('');

            const clauses = [
                {
                    ...(token === 'B3TR'
                        ? clauseBuilder.transferToken('B3TR_CONTRACT_ADDRESS', account, unitsUtils.parseUnits(amount, 18))
                        : clauseBuilder.transferVET(account, unitsUtils.parseVET(amount))),
                    comment: `Claim ${amount} ${token} reward`,
                },
            ];

            const tx = connex.vendor.sign('tx', clauses).signer(rewardAddress);
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
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={handleClaim}
            >
                Claim {amount} {token} Reward
            </button>
            {Boolean(error) && <Error>{error}</Error>}
        </div>
    );
};
