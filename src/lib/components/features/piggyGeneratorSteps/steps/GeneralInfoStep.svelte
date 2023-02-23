<script lang="ts">
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
	import StepButtons from "../atoms/StepButtons.svelte";
	import Container from "../atoms/Container.svelte";
	import PiggyNft from "$lib/components/atoms/PiggyNft/PiggyNft.svelte";
</script>

<Container>
  <span>My name is</span>
  <input type="text" name="name" id="name" placeholder="Mateo" bind:value={$piggyGeneratorData.name}>
  <span>and I need</span>
  <input type="number" name="goal" id="goal" placeholder="500" min="0" bind:value={$piggyGeneratorData.goal}>
  <span>to</span>
  <textarea name="description" id="description" cols="30" rows="10" bind:value={$piggyGeneratorData.description} placeholder="Buy a new camera"/>
  <StepButtons nextText="Create Piggy"/>
</Container>
<Container>
  <div class="nft-wrapper">
    <PiggyNft width="200px"/>
  </div>
  <div class="nft-wrapper">
    <PiggyNft  width="250px"/>
  </div>
  <div class="nft-wrapper">
    <PiggyNft width="210px"/>
  </div>
</Container>

<style lang="scss">
  .nft-wrapper {
    position: absolute;

    &:first-child {
      top: -200px;
      right: 360px;
    }

    &:nth-child(2) {
      top: -40px;
      left: 20px;
    }
    
    &:last-child {
      top: -320px;
      right: -20px;
    }
  }
</style>
