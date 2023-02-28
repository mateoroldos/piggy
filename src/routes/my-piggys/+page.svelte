<script lang="ts">
	import { user } from '$lib/stores/session/userStore';
	import { Container, PiggyCard, MyPiggyList } from '$lib/components/atoms';
	import type { PageData } from './+page';
	import LoginButton from '$lib/components/atoms/Login/LoginButton.svelte';
    
    export let data: PageData; 
</script>

<section>
    <Container width="600px">
        {#if $user}
        <div class="piggys-wrapper">
                <h2 class="title-medium">🐷 My Piggys</h2>
                {#each data.myPiggys as piggyData}
                    <MyPiggyList {piggyData} />
                {/each}
            </div>
        {:else}
            <div class="login-wrapper">
                <p class="body-large">You need to login to see your piggys</p>
                <LoginButton />
            </div>
        {/if}
    </Container>
    <Container width="300px">
        {#if $user}
            <div class="last-piggy-wrapper">
                <h2 class="display-small">Last Piggy created</h2>
                <PiggyCard piggyData={data.myPiggys[0]} hasBorder size="xlarge"/>
            </div>
        {/if}
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

    .login-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
</style>