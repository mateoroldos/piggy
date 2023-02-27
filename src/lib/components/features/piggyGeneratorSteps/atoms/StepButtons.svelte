<script lang="ts">
	import FlowConnect from "$lib/components/atoms/FlowConnect/FlowConnect.svelte";
import { user } from "$lib/stores/flow/flowStore";
	import { piggyGeneratorActiveStep, piggyGeneratorSteps } from "$lib/stores/generator/piggyGeneratorSteps";

  export let nextText = "Next"
  export let backText = "Back"
</script>

<div>
  <div>
    {#if $piggyGeneratorActiveStep > 0}
      <button class="transparent" on:click={piggyGeneratorActiveStep.decrement}>{backText}</button>
    {/if}
  </div>
  <div>
    {#if $piggyGeneratorActiveStep === $piggyGeneratorSteps.length - 1 && !$user?.addr}
      <FlowConnect connectText="Connect to launch" />
    {:else}
      <button on:click={piggyGeneratorActiveStep.increment}>{nextText}</button>
    {/if}
  </div>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 14px;
  }
</style>