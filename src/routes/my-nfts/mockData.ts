import type { PiggyData } from '$lib/types/piggys/piggy.interface';
import type { PageData } from './+page';

const piggyData: PiggyData = {
	id: '123',
	name: 'Mateo',
	description: 'to buy a new camera',
	image: '/placeholder.jpg', // url de ipfs o donde este la imagen
	goal: 342234,
	startDate: new Date(),
	endDate: new Date(),
	userAddress: '0x123',
	isBroken: false
};

export const mockPiggys: PageData = {
	myNfts: [
		{
			id: '123',
			golden: false,
			piggy: piggyData
		},
		{
			id: '123',
			golden: false,
			piggy: piggyData
		},
		{
			id: '123',
			golden: false,
			piggy: piggyData
		},
		{
			id: '123',
			golden: false,
			piggy: piggyData
		}
	]
};
