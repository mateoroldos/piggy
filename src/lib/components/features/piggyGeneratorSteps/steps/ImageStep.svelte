<script>
	import StepButtons from './../atoms/StepButtons.svelte';
	import { DropZone } from "$lib/components/atoms";
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
</script>

<Container>
	<label class="label-large" for="image">NFT image</label>
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
		text-align: center;
		color: var(--md-sys-color-on-primary-container);
	}
</style>