import { donationData } from '$lib/stores/donation/donationStore';
import { accessToken } from '$lib/stores/session/tokenStore';
import { get } from 'svelte/store';

export const postUser = async () => {
	const donation = get(donationData);

	const res = await fetch('https://piggy-api-4fsvtl2whq-uc.a.run.app/users', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${get(accessToken)}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			piggy_id: donation?.piggyId,
			amount: donation?.amount
		})
	});

	const data = await res.json();

	return data;
};
