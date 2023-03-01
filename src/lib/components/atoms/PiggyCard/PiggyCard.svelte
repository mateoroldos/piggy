<script lang="ts">
	import type { PiggyData } from "$lib/types/piggys/piggy.interface";

  export let piggyData: PiggyData;
  export let hasBorder = false;
  export let size: 'small' | 'medium' | 'large' | 'xlarge'= 'medium';

  let onHover = false;
</script>

<a 
  href={`/piggy/${piggyData.ID}`} 
  class:border={hasBorder}
  class:shadow-2={onHover}
  class:move-up={onHover}
  class={size}
  on:mouseenter={() => onHover = true}
  on:mouseleave={() => onHover = false}
>
  <img src="/placeholder.jpg" alt="Project featured">
  <span 
    class:body-small={size === 'small'}
    class:body-medium={size === 'medium'}
    class:body-large={size === 'large'}
    class:title-large={size === 'xlarge'}
  >
    {`Help Jordan to buy a new camera`}
  </span>
</a>

<style lang="scss">
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--md-sys-color-on-surface-variant);
    gap: 0.8rem;
    background-color: var(--md-sys-color-surface-variant);
    transition: 0.4s;

    &.move-up {
      transform: translateY(-0.1rem);
    }

    &.small {
      padding: 0.8rem;
      border-radius: 18px;
    }

    &.medium {
      padding: 1rem;
      border-radius: 20px;
    }

    &.large {
      padding: 1.2rem;
      border-radius: 26px;
    }

    &.xlarge {
      padding: 2rem;
      border-radius: 30px;
    }

    &.border {
      border: 1px solid var(--md-sys-color-on-primary-container);
      color: var(--md-sys-color-on-primary-container);
      background-color: transparent;
    }

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 1rem;
    }
  }
</style>