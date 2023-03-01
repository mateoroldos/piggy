<script lang="ts">
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
    <h2 class="headline-small">You got the following NFT!</h2>
    <PiggyNft name={data.piggy.name} description={data.piggy.description} image={`https://${data.piggy.image}.ipfs.nftstorage.link/general`}/>
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