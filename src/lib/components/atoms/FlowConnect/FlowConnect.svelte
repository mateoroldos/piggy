<script lang="ts">
	import { user } from '$lib/stores/flow/flowStore';
	import Icon from '@iconify/svelte';
  import { logIn, unauthenticate } from '../../../../flow/actions';

	export let connectText = "Connect";
</script>

<div class="button-wrapper">
	{#if $user.addr}
		<button on:click={unauthenticate} class="transparent">
			<span class="user">
				{$user.addr}
			</span>
			<span class="disconnect"> Disconnect </span>
		</button>
	{:else}
		<button on:click={logIn}>
      {connectText}
      <Icon icon="tabler:wallet" />
    </button>
	{/if}
</div>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;

		.disconnect {
			display: none;
		}
	}

	.button-wrapper:hover {
			& .disconnect {
				display: block;
				position: absolute;
				text-align: left;
			}
			
			& .user {
				visibility: hidden;
			}
		}
</style>
