<script>
	import { fade } from 'svelte/transition';
	import StepButtons from './../atoms/StepButtons.svelte';
	import { DropZone } from "$lib/components/atoms";
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
	import Container from '../atoms/Container.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
</script>

<Container>
  <DropZone name="image" accept="image/png, image/jpg, image/jpeg" maxAmountOfFiles={1} bind:bindValue={$piggyGeneratorData.image}/>
	<StepButtons />
</Container>
<Container width="300px">
	<h2 class="headline-small">All donators will get the following NFT</h2>
	<PiggyNft name={$piggyGeneratorData.name} description={$piggyGeneratorData.description} file={$piggyGeneratorData.image[0]}/>
</Container>

<style lang="scss">
	h2 {
		margin-bottom: 14px;
	}
</style>