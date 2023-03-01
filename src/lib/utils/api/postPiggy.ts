import { accessToken } from '$lib/stores/session/tokenStore';
import { get } from 'svelte/store';
import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';
import { uploadToIPFS } from '../uploadToIpfs';
import { resultCID } from '$lib/stores/generator/IPFSStore';
import { nftImages } from '$lib/stores/generator/nftsImagesStore';
import { launchingPiggy } from '$lib/stores/generator/generatorState';

export const postPiggy = async () => {
	launchingPiggy.set(true);

	const piggyData = get(piggyGeneratorData);

	const generalImageFile = new File([piggyData.image[0]], 'general', {
		type: piggyData.image[0].type
	});
	const nftImagesFiles = get(nftImages);

	// Upload image to IPFS
	await uploadToIPFS(
		[generalImageFile, nftImagesFiles.goldenNft as File, nftImagesFiles.normalNft as File],
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFFQmQzOWQ1ODg4YzM3RmY0NzU0YWU3Qzk3REU2RjgxQmQ0RkFkM0IiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1OTM2MDM4NTg4MCwibmFtZSI6InRlc3QifQ.-lq3ECLKGW47rW9YxpWP8Pz7U1BJJ2GBG0UkcieR8vM'
	);

	// POST request to piggy endpoint with all the data in the Piggy store
	const res = await fetch('https://piggy-api-4fsvtl2whq-uc.a.run.app/piggy', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${get(accessToken)}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: piggyData.name,
			description: piggyData.description,
			image: get(resultCID),
			start_date: piggyData.startDate.toISOString(),
			end_date: new Date(piggyData.endDate).toISOString()
		})
	});

	const data = await res.json();

	setTimeout(() => {
		launchingPiggy.set(false);
	}, 2000);

	return data;
};
