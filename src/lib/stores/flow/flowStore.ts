import { writable } from 'svelte/store';
import { network } from '../../../flow/config';
import type { FlowUser } from '$lib/types/flow/user.interface';
import type { FlowNetwork } from '$lib/types/flow/flowNetwork.type';
import type { DisconnectedUser } from '$lib/types/flow/user.interface';

const contractData = {
	NonFungibleToken: {
		emulator: '0xf8d6e0586b0a20c7',
		testnet: '0x631e88ae7f1d7c20',
		mainnet: '0x1d7e57aa55817448'
	},
	FungibleTokenMetadataViews: {
		emulator: '0xf8d6e0586b0a20c7',
		testnet: '0x631e88ae7f1d7c20',
		mainnet: '0x1d7e57aa55817448'
	},
	MetadataViews: {
		emulator: '0xf8d6e0586b0a20c7',
		testnet: '0x631e88ae7f1d7c20',
		mainnet: '0x1d7e57aa55817448'
	},
	FungibleToken: {
		emulator: '0xee82856bf20e2aa6',
		testnet: '0x9a0766d93b6608b7',
		mainnet: '0xf233dcee88fe0abe'
	},
	FlowToken: {
		emulator: '0x0ae53cb6e3f42a79',
		testnet: '0x7e60df042a9c0868',
		mainnet: '0x1654653399040a61'
	},
	FUSD: {
		emulator: '0xf8d6e0586b0a20c7',
		testnet: '0xe223d8a629e49c68',
		mainnet: '0x3c5959b568896393'
	},
	ECTreasury: {
		testnet: '0x6c0d53c676256e8c',
		mainnet: '0x5643fd47a29770e7'
	},
	FLOAT: {
		testnet: '0x0afe396ebc8eee65',
		mainnet: '0x2d4c3caffbeab845'
	},
	FIND: {
		testnet: '0xa16ab1d0abde3625',
		mainnet: '0x097bafa4e0b48eef'
	},
	FN: {
		testnet: '0xb05b2abb42335e88',
		mainnet: '0x233eb012d34b0070'
	}
};

export const flowUser = writable<FlowUser | DisconnectedUser>({ loggedIn: false });

export const addresses = {
	NonFungibleToken: contractData.NonFungibleToken[network as FlowNetwork],
	MetadataViews: contractData.MetadataViews[network as FlowNetwork],
	FungibleTokenMetadataViews: contractData.FungibleTokenMetadataViews[network as FlowNetwork],
	FungibleToken: contractData.FungibleToken[network as FlowNetwork],
	FlowToken: contractData.FlowToken[network as FlowNetwork],
	FUSD: contractData.FUSD[network as FlowNetwork],
	ECTreasury: contractData.ECTreasury[network as FlowNetwork],
	FLOAT: contractData.FLOAT[network as FlowNetwork],
	FIND: contractData.FIND[network as FlowNetwork],
	FN: contractData.FN[network as FlowNetwork]
};
