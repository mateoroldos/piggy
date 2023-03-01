<script lang="ts">
	import { user } from '$lib/stores/session/userStore';
	import { Container, PiggyCard, MyPiggyList } from '$lib/components/atoms';
	import type { PageData } from './+layout';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
    
  export let data: PageData; 
</script>

<section>
  <Container width="500px">
      <slot/>
  </Container>
  <Container width="300px">
    <h2 class="headline-small">All donators will get the following NFT.</h2>
    <PiggyNft name={data.piggy.name} description={data.piggy.description} image={`https://${data.piggy.image}.ipfs.nftstorage.link/general`}/>
    <span>Donator to put de coin that reaches the goal gets a special NFT and 10% of the money inside the Piggy</span>
  </Container>
</section>

<style lang="scss">
  .headline-small, span {
		margin-bottom: 14px;
		text-align: center;
		color: var(--md-sys-color-on-primary-container);
	}

  span {
      margin-top: 1rem;
  }
</style>