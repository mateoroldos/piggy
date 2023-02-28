<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
    import { getClientApp } from '$lib/firebase/client';
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
    import type { PageData } from './$types';
    
    export let data: PageData;

    const loginWithGoogle = () => {
        const auth = getAuth(getClientApp())
        signInWithPopup(auth, new GoogleAuthProvider())
    };
</script>

<section>
    <Container>
        <div>
            <p>Please login</p>
            <button on:click={loginWithGoogle}>Login with Google</button>
        </div>
    </Container>
</section>