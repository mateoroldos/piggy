<script type="ts">
	import '$lib/styles/design-system/theme.css';
	import '$lib/styles/app.scss';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style type="scss">
	main {
		background-color: var(--md-sys-color-background);
	}
</style>
