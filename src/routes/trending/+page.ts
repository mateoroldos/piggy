import type { PageLoad } from './$types';
import type { PiggyData } from '$lib/types/piggys/piggy.interface';
import { get } from 'svelte/store';
import { accessToken } from '$lib/stores/session/tokenStore';

export const ssr = false;

export const load = (async () => {
	const res = await fetch('https://piggy-api-4fsvtl2whq-uc.a.run.app/piggy', {
		headers: {
			Authorization: `Bearer ${get(accessToken)}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});

	const data = await res.json();

	console.log(data);
	return {
		hot: [data[0], data[1], data[2]],
		toFinish: [data[3], data[4], data[5]],
		weekFeatured: data[6]
	};
}) satisfies PageLoad<PageData>;

export interface PageData {
	hot: PiggyData[];
	toFinish: PiggyData[];
	weekFeatured: PiggyData;
}
