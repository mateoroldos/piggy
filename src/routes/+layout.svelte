<script lang="ts">
	import '$lib/styles/design-system/theme.css';
	import '$lib/styles/app.scss';
	import Header from '$lib/components/layout/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>