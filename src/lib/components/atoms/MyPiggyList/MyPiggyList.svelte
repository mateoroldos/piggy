<script lang="ts">
	import type { PiggyData } from "$lib/types/piggys/piggy.interface";
	import StateLabel from "../StateLabel/StateLabel.svelte";

  export let piggyData: PiggyData;
</script>

<a 
  href={`/piggy/${piggyData.id}`} 
>
  <div>
    <img src={piggyData.image} alt="Project featured">
    <span >
      {`Help me to ${piggyData.description}`}
    </span>
  </div>
  <StateLabel {piggyData} />
</a>

<style lang="scss">
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-block: 0.8rem;
    color: var(--md-sys-color-on-background);
    text-decoration: none;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }

    img {
      width: 60px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 0.3rem;
    }

  }
</style>