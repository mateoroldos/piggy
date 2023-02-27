export interface PiggyData {
	id: string; // uuid? La genera front-end o backend?
	name: string;
	description: string;
	image: string; // url de ipfs o donde este la imagen
	goal: number;
	startDate: Date;
	endDate: Date;
	userAddress: string;
	isBroken: boolean;
}
