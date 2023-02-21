<script>
	import { DropZone } from "$lib/components/atoms";
	import { piggyGeneratorData } from "$lib/stores/generator/piggyGeneratorData";
</script>

<div>
  <DropZone name="image" accept="img/jpg" maxAmountOfFiles={1} bind:bindValue={$piggyGeneratorData.image}/>
</div>