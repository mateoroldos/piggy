import { writable } from 'svelte/store';

export const donationData = writable({
	amount: 0,
	currency: 'USD',
	piggyId: ''
});
