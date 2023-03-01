import { NFTStorage } from 'nft.storage';
import { packToBlob } from 'ipfs-car/pack/blob';
import { MemoryBlockStore } from 'ipfs-car/blockstore/memory';
import { TreewalkCarSplitter } from 'carbites/treewalk';
import { resultCID } from '$lib/stores/generator/IPFSStore';
import type { ICarReader } from 'carbites/treewalk/splitter';

export async function uploadToIPFS(imageFiles: File[], IPFSToken: string) {
	const car_files: {
		path: string;
		content: File;
	}[] = [];

	//---- build .car file
	imageFiles.forEach((imageFile) => {
		car_files.push({ path: imageFile.name, content: imageFile });
	});

	const { root, car } = await packToBlob({
		input: car_files,
		blockstore: new MemoryBlockStore()
	});

	//---- upload to IPFS
	const result_cid = await uploadCar(car, IPFSToken);
	if (result_cid === root.toString()) {
		console.log('Resulting IPFS CID', result_cid);
		resultCID.set(result_cid);
		return true;
	} else {
		return {
			error: 'ERROR: precomputed CID does not match CID from IPFS'
		};
	}
}

async function uploadCar(car: Blob, IPFSToken: string) {
	const NFTStorageClient = new NFTStorage({ token: IPFSToken });
	const MaxCarSize1MB = 100000000;
	const cars = [];
	let result_cid = null;

	if (car.size <= MaxCarSize1MB) {
		cars.push(car);
	} else {
		// when size exceeds MaxCarSize1MB, split it into an AsyncIterable<Uint8Array>
		const splitter = new TreewalkCarSplitter(car as ICarReader, MaxCarSize1MB);
		for await (const smallCar of splitter.cars()) {
			for await (const chunk of smallCar) {
				cars.push(chunk);
			}
		}
	}

	for await (const c of cars) {
		result_cid = await NFTStorageClient.storeCar(c);
	}
	return result_cid;
}
