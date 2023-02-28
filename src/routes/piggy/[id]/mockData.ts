import type { PageData } from './+page';

export const mockPiggys: PageData = {
	piggy: {
		id: '123',
		name: 'Mateo',
		description: 'to buy a new camera',
		image: '/placeholder.jpg', // url de ipfs o donde este la imagen
		goal: 342234,
		startDate: new Date(),
		endDate: new Date(),
		userAddress: '0x123',
		isBroken: false
	}
};
