import type { LayoutLoad } from './$types';
import type { PiggyData } from '$lib/types/piggys/piggy.interface';
import { get } from 'svelte/store';
import { accessToken } from '$lib/stores/session/tokenStore';

export const ssr = false;

export const load = (async ({ params }) => {
	const res = await fetch(`https://piggy-api-4fsvtl2whq-uc.a.run.app/piggy/${params.id}`, {
		headers: {
			Authorization: `Bearer ${get(accessToken)}`,
			'Content-Type': 'application/json'
		},
		method: 'GET'
	});

	const data = await res.json();

	console.log(data);
	return {
		piggy: data
	};
}) satisfies LayoutLoad<PageData>;

export interface PageData {
	piggy: PiggyData;
}
