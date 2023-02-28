<script lang="ts">
  import { getClientApp } from '$lib/firebase/client';
	import { user } from '$lib/stores/session/userStore';
	import { getAdditionalUserInfo, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
	import { onMount } from 'svelte';

  export let connectText = "Login with Google";

  const loginWithGoogle = () => {
      const auth = getAuth(getClientApp())
      signInWithPopup(auth, new GoogleAuthProvider()).then(async (result) => {
        const isFirstLogin = getAdditionalUserInfo(result).isNewUser;
        console.log(isFirstLogin);
      })
  };

  const logout = async () => {
		const auth = getAuth(getClientApp());
		signOut(auth);
	};

  onMount(async () => {
		const auth = getAuth(getClientApp());
		onAuthStateChanged(auth, (newUser) => {
      $user = newUser;      
		});
	});
</script>

{#if $user}
  <button class="transparent label-large" on:click={logout}>
    <img src={$user.photoURL} onerror="this.onerror=null;this.src='./placeholder.jpg';" alt="Avatar">
    {$user.displayName}
  </button>
{:else}
  <button on:click={loginWithGoogle}>{connectText}</button>
{/if}

<style lang="scss">
  .transparent {
    display: flex;
    align-items: center;
    padding: 0.4em 0.8em;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
</style>