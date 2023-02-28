<script lang="ts">
	import { user } from '$lib/stores/session/userStore';
	import { Container, PiggyCard, MyPiggyList } from '$lib/components/atoms';
	import type { PageData } from './+page';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
    
    export let data: PageData; 
</script>

<section>
    <Container width="500px">
        <div class="main-wrapper">
            <h2 class="display-small"><strong>{`${data.piggy.name}`}</strong> needs {`$FLOW ${data.piggy.goal.toLocaleString()}`} <strong>{`${data.piggy.description}`}</strong></h2>
            <button>Donate</button>
        </div>
    </Container>
    <Container width="300px">
        <h2 class="headline-small">All donators will get the following NFT.</h2>
	    <PiggyNft name={data.piggy.name} description={data.piggy.description} image={data.piggy.image}/>
        <span>Donator to put de coin that reaches the goal gets a special NFT and 10% of the money inside the Piggy</span>
    </Container>
</section>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        button {
            font-size: 1.2rem;
            width: 180px;
        }
    }

    .headline-small, span {
		margin-bottom: 14px;
		text-align: center;
		color: var(--md-sys-color-on-primary-container);
	}

    span {
        margin-top: 1rem;
    }
</style>