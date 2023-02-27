<script lang="ts">
	import { Container, PiggyCard } from '$lib/components/atoms';
	import type { PageData } from './+page';
    
    export let data: PageData; 
</script>

<section>
    <Container width="600px">
        <article>
            <h2 class="title-medium">🔥 Hot Piggys</h2>
            <div class="piggys-wrapper">
                {#each data.hot as piggyData}
                    <PiggyCard {piggyData} />
                {/each}
            </div>
        </article>
        <article>
            <h2 class="title-medium">⏰ About to finish</h2>
            <div class="piggys-wrapper">
                {#each data.toFinish as piggyData}
                    <PiggyCard {piggyData} />
                {/each}
            </div>
        </article>
    </Container>
    <Container width="300px">
        <div class="piggy-of-the-week-wrapper">
            <h2 class="display-small">Piggy of the week</h2>
            <PiggyCard piggyData={data.weekFeatured} hasBorder size="xlarge"/>
        </div>
    </Container>
</section>

<style lang="scss">
    article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        &:first-of-type {
            margin-bottom: 2rem;
        }

        .piggys-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.3rem;            
        }
    }

    .piggy-of-the-week-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        h2 {
            margin-bottom: 1rem;
            color: var(--md-sys-color-on-primary-container);
        }
    }
</style>