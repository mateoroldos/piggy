<script lang="ts">
	import { fade } from 'svelte/transition';

  export let width = "400px"
</script>

<div class="container">
  <div class="sub-container" in:fade={{ duration: 500 }} style={`width: ${width}`}>
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