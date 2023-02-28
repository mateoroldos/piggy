import { accessToken } from '$lib/stores/session/tokenStore';
import { get } from 'svelte/store';
import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';

export const postPiggy = async () => {
	const piggyData = get(piggyGeneratorData);

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
			image: 'data.image',
			start_date: piggyData.startDate.toISOString(),
			end_date: new Date(piggyData.endDate).toISOString()
		})
	});

	const data = await res.json();

	return data;
};
