import { writable, type Writable } from 'svelte/store';

export const nftImages: Writable<{
	normalNft: File | undefined;
	goldenNft: File | undefined;
}> = writable({
	normalNft: undefined,
	goldenNft: undefined
});
