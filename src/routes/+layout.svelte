<script lang="ts">
	import '$lib/styles/design-system/theme.css';
	import '$lib/styles/app.scss';
	import Header from '$lib/components/layout/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<div class="mobile-prompt">
	<p>Sorry, this site is not yet optimized for mobile devices.</p>
	<p>Please download our Android or iOS app</p>
</div>

<style lang="scss">
	@media only screen and (max-width: 1000px) {
		main {
			display: none;
		}
	}

	.mobile-prompt {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		
		p {
			color: var(--md-sys-color-on-background);
			text-align: center;
		}
	}

	@media only screen and (min-width: 1000px) {
		.mobile-prompt {
			display: none;
		}
	}
</style>