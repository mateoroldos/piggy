<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './+layout';
    
    export let data: PageData; 
</script>

<div class="main-wrapper">
    <h2 class="display-small">{`${data.piggy.name} needs $FLOW ${data.piggy.goal.toLocaleString()} ${data.piggy.description}`}</h2>
    <a class="button" href={`${$page.url.pathname}/donate`}>Donate</a>
</div>

<style lang="scss">
    .main-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        .button {
            font-size: 1.2rem;
            width: 180px;
            display: flex;
            justify-content: center;
        }
    }
</style>