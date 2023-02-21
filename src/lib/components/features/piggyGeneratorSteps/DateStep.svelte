<script lang="ts">
	import { piggyGeneratorData } from '$lib/stores/generator/piggyGeneratorData';
</script>

<div>
  <input type="date" bind:value={$piggyGeneratorData.startDate}>
</div>