<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepButtons from './../atoms/StepButtons.svelte';
	import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';
	import Container from '../atoms/Container.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
</script>

<Container>
  <input type="date" bind:value={$piggyGeneratorData.startDate}>
  <StepButtons />
</Container>
<Container width="300px">
	<h2 class="headline-small">Donator to put the coin that reaches the Piggy goal will get the following NFT</h2>
	<PiggyNft name={$piggyGeneratorData.name} description={$piggyGeneratorData.description} type="golden"/>
</Container>

<style lang="scss">
	h2 {
		margin-bottom: 14px;
	}
</style>