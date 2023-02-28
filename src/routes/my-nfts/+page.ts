import type { PageLoad } from './$types';
import { mockPiggys } from './mockData';
import type { PiggyNftData } from '$lib/types/piggys/nft.interface';

export const load = (async () => {
	return mockPiggys;
}) satisfies PageLoad;

export interface PageData {
	myNfts: PiggyNftData[];
}
