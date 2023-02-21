<script lang="ts">
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
</script>

<div>
  <div>
    <span>My name is</span>
    <input type="text" name="name" id="name" placeholder="Mateo" bind:value={$piggyGeneratorData.name}>
  </div>
  <div>
    <span>and I need</span>
    <input type="number" name="goal" id="goal" placeholder="500" min="0" bind:value={$piggyGeneratorData.goal}>
    <span>to</span>
  </div>
  <textarea name="description" id="description" cols="30" rows="10" bind:value={$piggyGeneratorData.description} placeholder="Buy a new camera"/>
</div>