<script lang="ts">
	import { donationData } from '$lib/stores/donation/donationStore';
	import { page } from '$app/stores';
	import type { PageData } from './+layout';
	import { onMount } from 'svelte';
    
    export let data: PageData; 

    onMount(() => {
        $donationData.piggyId = $page.params.id;
    })
</script>

<div class="main-wrapper">
    <h2 class="display-small"><strong>{`${data.piggy.name}`}</strong> needs <span>{`$1,000`}</span>{` to ${data.piggy.description.toLowerCase()}`}</h2>
    <div class="donate-wrapper">
        <div class="donate-input-wrapper">
            <label for="amount">Amount </label>
            <input type="number" name="amount" id="amount" bind:value={$donationData.amount}>
        </div>
        <a class="button" href={`${$page.url.pathname}/donate`}>Donate</a>
    </div>
</div>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            color: var(--md-sys-color-on-background);

             span {
                color: var(--md-sys-color-primary);
            }
        }


        .donate-wrapper {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding: 2rem;
            border-radius: 10px;
            border: 1px solid var(--md-sys-color-outline);

            .donate-input-wrapper {
                display: flex;
                flex-direction: column;
            }

            .button {
                font-size: 1.2rem;
                display: flex;
                justify-content: center;
            }
        }
    }
</style>