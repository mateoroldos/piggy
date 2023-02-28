<script lang="ts">
	import { user } from '$lib/stores/session/userStore';
	import { piggyGeneratorActiveStep, piggyGeneratorSteps } from "$lib/stores/generator/piggyGeneratorSteps";
	import LoginButton from '$lib/components/atoms/Login/LoginButton.svelte';

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
    {#if $piggyGeneratorActiveStep === $piggyGeneratorSteps.length - 1 && !$user}
      <LoginButton connectText="Login to launch" />
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