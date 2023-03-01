<script lang="ts">
    import { page } from '$app/stores';
</script>

<div>
    <h1>{$page.status}: {$page.error?.message}</h1>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>