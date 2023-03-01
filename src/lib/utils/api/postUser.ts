import { accessToken } from '$lib/stores/session/tokenStore';
import { get } from 'svelte/store';
import { user } from '$lib/stores/session/userStore';

export const postUser = async () => {
	const userData = get(user);

	const res = await fetch('https://piggy-api-4fsvtl2whq-uc.a.run.app/users', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${get(accessToken)}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			display_name: userData?.displayName,
			email: userData?.email
		})
	});

	const data = await res.json();

	return data;
};
