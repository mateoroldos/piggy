<script lang="ts">
	import { Container, PiggyCard, MyPiggyList } from '$lib/components/atoms';
	import type { PageData } from './+page';
    
    export let data: PageData; 
</script>

<section>
    <Container width="600px">
        <h2 class="title-medium">🐷 My Piggys</h2>
        <div class="piggys-wrapper">
            {#each data.myPiggys as piggyData}
                <MyPiggyList {piggyData} />
            {/each}
        </div>
    </Container>
    <Container width="300px">
        <div class="last-piggy-wrapper">
            <h2 class="display-small">Last Piggy created</h2>
            <PiggyCard piggyData={data.myPiggys[0]} hasBorder size="xlarge"/>
        </div>
    </Container>
</section>

<style lang="scss">
     h2 {
        margin-bottom: 1rem;
        color: var(--md-sys-color-on-primary-container);
    }
    .last-piggy-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            margin-bottom: 1rem;
            color: var(--md-sys-color-on-primary-container);
        }
    }
</style>