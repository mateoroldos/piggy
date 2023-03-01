<script lang="ts">
	import LoginButton from "$lib/components/atoms/Login/LoginButton.svelte";
  import { user } from "$lib/stores/session/userStore";
</script>

<div>
  <h4 class="display-small">Thank you for your donation</h4>
  {#if !$user}
    <p class="body-medium">Please login to claim your NFT</p>
    <LoginButton connectText="Login to claim NFT" />
  {:else}
     <p class="body-medium">You didn't break the Piggy, you get a normal NFT in your wallet</p>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
</style>