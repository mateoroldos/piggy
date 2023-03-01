<script lang="ts">
	import { user } from '$lib/stores/session/userStore';
	import { piggyGeneratorActiveStep, piggyGeneratorSteps } from "$lib/stores/generator/piggyGeneratorSteps";
	import LoginButton from '$lib/components/atoms/Login/LoginButton.svelte';
	import { launchingPiggy } from '$lib/stores/generator/generatorState';
	import Icon from '@iconify/svelte';

  export let nextText = "Next"
  export let backText = "Back"
</script>

<div>
  <div>
    {#if $piggyGeneratorActiveStep > 0}
      <button class="transparent" on:click={piggyGeneratorActiveStep.decrement} disabled={$launchingPiggy}>{backText}</button>
    {/if}
  </div>
  <div>
    {#if !$launchingPiggy}
      {#if $piggyGeneratorActiveStep === $piggyGeneratorSteps.length - 1 && !$user}
        <LoginButton connectText="Login to launch" />
      {:else}
        <button on:click={piggyGeneratorActiveStep.increment}>{nextText}</button>
      {/if}
    {:else}
      <button disabled={$launchingPiggy}>
        <Icon icon="svg-spinners:gooey-balls-2" />
        Creating Piggy
      </button>
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

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }
</style>