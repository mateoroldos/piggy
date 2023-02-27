<script lang="ts">
	import type { PiggyData } from "$lib/types/piggys/piggy.interface";

  export let piggyData: PiggyData;

  let state: 'active' | 'broken' | 'finished';

  $: if (piggyData.isBroken) {
    state = 'broken';
  } else if (piggyData.endDate < new Date()) {
    state = 'active';
  } else {
    state = 'finished';
  }
</script>

<span class={`label-medium ${state}`}>
  {state}
</span>

<style lang="scss">
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 0.1rem 0.8rem;
    border-radius: 999px; 

    &.active {
      color: var(--md-sys-color-on-tertiary);
      background-color: var(--md-sys-color-tertiary);
    }

    &.broken {
      color: var(--md-sys-color-on-secondary);
      background-color: var(--md-sys-color-secondary);
    }

    &.finished {
      color: var(--md-sys-color-error);
      border: 1px solid var(--md-sys-color-error);
    }
  }
</style>