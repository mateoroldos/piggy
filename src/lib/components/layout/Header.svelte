<script lang="ts">
	import { page } from "$app/stores";

console.log($page);


</script>

<header>
  <div>
    <a href="/" class="logo-link">
      <h1>🐽 Piggy</h1>
    </a>
    <nav>
      <a class="header-link" class:active={$page.url.pathname === "/"} href="/">Create</a>
      <a class="header-link" class:active={$page.url.pathname === "/trending"} href="/trending">Trending</a>
      <a class="header-link" class:active={$page.url.pathname === "/my-piggys"} href="/my-piggys">My Piggys</a>
    </nav>
  </div>
  <div>
    <a class="header-link" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
  </div>
</header>

<style lang="scss">
  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;

    .logo-link {
      text-decoration: none;
      color: var(--md-sys-color-on-background);      
    }

    nav {
      margin-left: 5rem;
      gap: 2.8rem;
    }

    > div, nav {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    div:last-child {
      gap: 1.2rem;
    }
  }
</style>