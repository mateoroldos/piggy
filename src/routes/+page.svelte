<script lang="ts">
  import { piggyGeneratorActiveStep, piggyGeneratorSteps } from '$lib/stores/generator/piggyGeneratorSteps';
</script>

<section>
  <svelte:component this={$piggyGeneratorSteps[$piggyGeneratorActiveStep].component} />
</section>