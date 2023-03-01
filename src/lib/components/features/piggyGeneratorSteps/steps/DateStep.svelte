<script lang="ts">
	import StepButtons from './../atoms/StepButtons.svelte';
	import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
	import { onMount } from 'svelte';
	import { nftImages } from '$lib/stores/generator/nftsImagesStore';
	import { htmlToPngFile } from '$lib/utils/htmlToPngFile';

	const saveNftImage = async () => {
   	const goldenNftFile = await htmlToPngFile(document.getElementById('capture-golden') as HTMLElement, 'goldenNft');
   	const normalNftFile = await htmlToPngFile(document.getElementById('capture-normal') as HTMLElement, 'normalNft');

		// add display none to normal tge elemenbt with the capture-normal id
		(document.getElementById('capture-normal') as HTMLElement).style.display = 'none';

    $nftImages = {
			normalNft: normalNftFile,
			goldenNft: goldenNftFile
		}
  }

	// OnMount, save the NFT as a PNG
	onMount(() => {
		setTimeout(() => {
			saveNftImage();
		}, 2000);
	});
</script>

<Container>
	<label class="label-large" for="date">End date</label>
  <input type="date" bind:value={$piggyGeneratorData.endDate}>
  <StepButtons nextText="Launch Piggy"/>
</Container>
<Container width="300px">
	<div class="secondary-wrapper">
		<h2 class="headline-small">Donator to put the coin that reaches the Piggy goal will get the following NFT</h2>
		<div id="capture-golden">
			<PiggyNft name={$piggyGeneratorData.name} description={$piggyGeneratorData.description} type="golden" file={$piggyGeneratorData.image[0]}/>
		</div>
		<div id="capture-normal">
			<PiggyNft name={$piggyGeneratorData.name} description={$piggyGeneratorData.description} file={$piggyGeneratorData.image[0]}/>
		</div>
	</div>
</Container>

<style lang="scss">
	h2 {
		margin-bottom: 14px;
		text-align: center;
		color: var(--md-sys-color-on-primary-container);
	}

	.secondary-wrapper {
		overflow: hidden;
		position: relative;
	}

	#capture-normal {
		position: absolute;
		right: -10000px;
	}
</style>