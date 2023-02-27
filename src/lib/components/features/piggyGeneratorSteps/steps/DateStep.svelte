<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepButtons from './../atoms/StepButtons.svelte';
	import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';
	import Container from '../atoms/Container.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
</script>

<Container>
	<label class="label-large" for="date">End date</label>
  <input type="date" bind:value={$piggyGeneratorData.endDate}>
  <StepButtons nextText="Launch Piggy"/>
</Container>
<Container width="300px">
	<h2 class="headline-small">Donator to put the coin that reaches the Piggy goal will get the following NFT</h2>
	<PiggyNft name={$piggyGeneratorData.name} description={$piggyGeneratorData.description} type="golden" file={$piggyGeneratorData.image[0]}/>
</Container>

<style lang="scss">
	h2 {
		margin-bottom: 14px;
		text-align: center;
		color: var(--md-sys-color-on-primary-container);
	}
</style>