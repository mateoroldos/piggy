<script lang="ts">
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
    <button on:click={piggyGeneratorActiveStep.increment}>{nextText}</button>
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