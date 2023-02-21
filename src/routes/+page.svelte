<script lang="ts">
  import { piggyGeneratorActiveStep, piggyGeneratorSteps } from '$lib/stores/generator/piggyGeneratorSteps';
</script>

<svelte:component this={$piggyGeneratorSteps[$piggyGeneratorActiveStep].component} />
<button on:click={piggyGeneratorActiveStep.decrement}>Back</button>
<button on:click={piggyGeneratorActiveStep.increment}>Next</button>