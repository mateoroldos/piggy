<script lang="ts">
	import Icon from '@iconify/svelte';
	import FlowConnect from '$lib/components/atoms/FlowConnect/FlowConnect.svelte';
	import { fly } from 'svelte/transition';
	import { user } from '$lib/stores/session/userStore';
	import { Container, PiggyCard } from '$lib/components/atoms';
	import type { PageData } from './+page';
	import LoginButton from '$lib/components/atoms/Login/LoginButton.svelte';
	import PiggyNft from '$lib/components/atoms/PiggyNft/PiggyNft.svelte';
	import { flowUser } from '$lib/stores/flow/flowStore';

    export let data: PageData; 

    let navigationPage = 0;
    const nftsPerPage = 3
    let numberOfPages = data.myNfts.length / nftsPerPage
</script>

<section>
    <Container width="600px">
        {#if $user}
            <div class="main-wrapper">
                <div class="nfts-wrapper">
                    {#each data.myNfts as nft, i}
                        {#if i >= navigationPage * nftsPerPage && i < (navigationPage + 1) * nftsPerPage}
                            <div in:fly|local={{ x: 40, duration: 800 }}>
                                <PiggyNft />
                            </div>
                        {/if}
                    {/each}
                </div>
                <div class="navigation-wrapper">
                    <button class="transparent" on:click={() => navigationPage--} disabled={navigationPage === 0} >
                        <Icon icon="tabler:arrow-left" />
                        Previous
                    </button>
                    <button class="transparent" on:click={() => navigationPage++} disabled={navigationPage >= numberOfPages - 1}>
                        Next
                        <Icon icon="tabler:arrow-right" />
                    </button>
                </div>
            </div>
        {:else}
            <div class="login-wrapper">
                <p class="body-large">You need to login to see your piggys</p>
                <LoginButton />
            </div>
        {/if}
    </Container>
    <Container width="400px">
        {#if $user}
            <div class="secondary-wrapper">
                {#if !$flowUser.addr}
                    <p class="body-large">Currently, we are in custody of your NFTs.</p>
                    <p class="body-large">Connect your Flow wallet to have them in a self-custody wallet.</p>
                    <FlowConnect />
                {:else}
                    <p class="body-large">NFTs are stored in</p>
                    <FlowConnect />
                {/if}
            </div>
        {/if}
    </Container>
</section>

<style lang="scss">
    .main-wrapper {
        .nfts-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: 1rem;
        }

        .navigation-wrapper {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            gap: 1rem;

            button {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                transition: 300;

                &:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                }
            }
        }
    }

    .secondary-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        
        p {
            max-width: 20ch;
            text-align: right;
            margin-bottom: 1rem;
            color: var(--md-sys-color-on-primary-container)
        }
    }

    .login-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
</style>