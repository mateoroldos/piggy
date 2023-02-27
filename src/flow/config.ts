import { config } from '@onflow/fcl';
import dappInfo from '$lib/config/config';
import { env } from '$env/dynamic/public';

const resolver = async () => {
	const nonce = '7f190deedcd3b0538b7cd0ebc1994ed40d9db16cc1a6fcc3e7a994240c14d86d';
	return {
		appIdentifier: 'Piggy',
		nonce
	};
};

export const network = env.PUBLIC_FLOW_NETWORK;

// EMULATOR
// const accessNode = 'http://127.0.0.1:8888';
// const discoveryWallet = 'http://localhost:8701/fcl/authn';

// TESTNET
// const accessNode = 'https://rest-testnet.onflow.org';
// const discoveryWallet = 'https://fcl-discovery.onflow.org/testnet/authn';

// MAINNET
// const accessNode = 'https://rest-mainnet.onflow.org';
// const discoveryWallet = 'https://fcl-discovery.onflow.org/authn';

config()
	.put('app.detail.title', dappInfo.title)
	.put('app.detail.icon', dappInfo.icon)
	.put('fcl.accountProof.resolver', resolver)
	.put('flow.network', network)
	.put('accessNode.api', env.PUBLIC_FLOW_ACCESS_NODE)
	.put('discovery.wallet', env.PUBLIC_FLOW_DISCOVERY);
