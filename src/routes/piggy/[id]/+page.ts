import type { PageLoad } from './$types';
import type { PiggyData } from '$lib/types/piggys/piggy.interface';
import { mockPiggys } from './mockData';

export const load = (async () => {
	return mockPiggys;
}) satisfies PageLoad;

export interface PageData {
	piggy: PiggyData;
}
