export const Polkadot = {
    chainType: 'Polkadot',
};
export const Substrate = {
    chainType: 'Substrate',
};
export const Kusama = {
    chainType: 'Kusama',
};

export const SocialNetwork = {
    chainType: 'SocialNetwork',
};

export const LibraChain = {
    chainType: 'Libra'
}

export const Alexander = {
    chain: Polkadot,
    name: 'PolkadotAlexander',
    rpcServer: 'wss://poc3-rpc.polkadot.io/',
    txExplorer: 'https://polkascan.io/pre/alexander/system/extrinsic/'
};
export const SubstrateTest = {
    chain: Substrate,
    name: 'SubstrateTest',
    rpcServer: 'wss://substrate-rpc.parity.io/',
    txExplorer: 'https://polkadot.js.org/apps/#/explorer'
};

export const KusamaByParity = {
    chain: Kusama,
    name: 'KusamaParity',
    rpcServer: 'wss://kusama-rpc.polkadot.io/',
    txExplorer: 'https://polkadot.js.org/apps/#/explorer'
};

export const KusamaByWeb3 = {
    chain: Kusama,
    name: 'KusamaWeb3',
    rpcServer: 'wss://canary-5.kusama.network/',
    txExplorer: 'https://polkadot.js.org/apps/#/explorer'
}


export const ChiTestnet = {
    chain: SocialNetwork,
    name: 'ChiTestnet',
    rpcServer: 'wss://testnet.social.network',
    txExplorer: 'https://polkadot.js.org/apps/#/explorer',
    currencyFactor: 1e14,
    currencyDecimal: 14,
    treasuryAddress: 'F3opxRbN5ZbjJNU511Kj2TLuzFcDq9BGduA9TgiECafpg29'
}

export const Libra = {
    chain: LibraChain,
    name: 'Libra',
    rpcServer: null,
    txExplorer: 'https://libexplorer.com/'
}


export const chains = {
    [Polkadot.chainType]: [Alexander],
    [Substrate.chainType]: [SubstrateTest],
    [Kusama.chainType]: [KusamaByParity, KusamaByWeb3],
    [ChiTestnet.chainType]: [ChiTestnet]
};

export const networks = {
    [Alexander.name]: Alexander,
    [KusamaByParity.name]: KusamaByParity,
    [KusamaByWeb3.name]: KusamaByWeb3,
    [SubstrateTest.name]: SubstrateTest,
    [ChiTestnet.name]: ChiTestnet,
    [Libra.name]: Libra
}
