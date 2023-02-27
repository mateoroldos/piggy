<script lang="ts">
	import { fade, fly } from 'svelte/transition';

  export let width = "400px"
</script>

<div class="container">
  <div class="sub-container" in:fly={{ duration: 700, y: 10 }} style={`width: ${width}`}>
    <slot/>
  </div>
</div>

<style type="scss">
  .sub-container {
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>