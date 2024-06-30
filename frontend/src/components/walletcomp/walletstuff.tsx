// walletstuff.tsx
import React, { useEffect } from 'react';
import {
  WalletButton,
  DAppKitProvider,
  useWallet,
  useWalletModal,
  useConnex,
} from '@vechain/dapp-kit-react';
import type { WalletConnectOptions } from '@vechain/dapp-kit';
import '@vechain/dapp-kit-ui';

const walletConnectOptions: WalletConnectOptions = {
  projectId: 'ddcee7fbf1408efd73778d25e9c3384e',
  metadata: {
    name: 'BasketApp',
    description: 'New Generation Food Sharing for Sustainability',
    url: window.location.origin,
  },
};

import Cookies from 'universal-cookie';

export const MyComponent1 = (): JSX.Element => {
  const { account, source } = useWallet();
  const cookies = new Cookies(null, {path: "/"})

  useEffect(() => {
    cookies.set('currentUser', {...cookies.get('currentUser'), ...{"key":account} } )
  }, [account, source]);

  return <WalletButton />;
};

export const MyComponent2: React.FC = () => {
  const {
    account,
    source,
    connectionCertificate,
    setSource,
    connect,
    availableWallets,
    disconnect,
  } = useWallet();

  return <div>...</div>;
};

export const MyComponent3: React.FC = () => {
  const { thor, vendor } = useConnex();

  return <div>...</div>;
};

export const MyComponent4 = () => {
  const { open } = useWalletModal();
  const { account } = useWallet();

  useEffect(() => {
    if (account) {
      console.log(`Account connected: ${account}`);
    }
  }, [account]);

  return <button onClick={open}>Open Modal</button>;
};

export const WalletProvider = ({ children }: { children: React.ReactNode }) => (
  <DAppKitProvider
    nodeUrl={'https://testnet.vechain.org/'}
    genesis={'test'}
    usePersistence
    walletConnectOptions={walletConnectOptions}
  >
    {children}
  </DAppKitProvider>
);
