import { writable, type Writable } from 'svelte/store';
import type { PiggyGeneratorData } from '$lib/types/generator/piggyGeneratorData.interface';

export const piggyGeneratorData: Writable<PiggyGeneratorData> = writable({
	id: '',
	name: '',
	description: '',
	image: [],
	goal: 0
});
