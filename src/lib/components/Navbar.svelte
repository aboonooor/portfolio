<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { fly } from 'svelte/transition';

  let menuOpen = false;

  function toggleMenu(event:MouseEvent) {
    menuOpen = !menuOpen;
 
  }

  function closeMenu() {
    menuOpen = false;
  }
</script>

<nav class="bg-white shadow-sm sticky top-0 z-50 ">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex">
        <a href="/" class="flex-shrink-0 flex items-center text-2xl font-bold text-indigo-600 " style="border-radius: 8px;">
          <span class="sr-only">Home</span>
          <img src="/images/logo.png" alt="Logo" class="h-14 w-30 mr-0" style="border-radius: 7px; border:#4499ff 2px solid"/>
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4">
        <a
          href="/"
          class="nav-link"
          class:active={$page.url.pathname === '/'}
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}
          >الرئيسية</a
        >
        <a
          href="/about"
          class="nav-link"
          class:active={$page.url.pathname === '/about'}
          aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
          >عني</a
        >
        <a
          href="/projects"
          class="nav-link"
          class:active={$page.url.pathname.startsWith('/projects')}
          aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}
          >مشاريعي</a
        >
        <a
          href="/contact"
          class="nav-link"
          class:active={$page.url.pathname === '/contact'}
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
          >تواصل معي</a
        >
      </div>

      <!-- Mobile menu button -->
      <div class="-mr-2 flex md:hidden">
        <button
          type="button"
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
        >
          <span class="sr-only">Open main menu</span>
          {#if !menuOpen}
            <!-- Heroicon "menu" -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {:else}
            <!-- Heroicon "x" -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if menuOpen}
    <div class="md:hidden" id="mobile-menu" transition:fly={{ y: -20, duration: 200 }}>
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="/"
          on:click={closeMenu}
          class="block mobile-nav-link"
          class:active={$page.url.pathname === '/'}
          aria-current={$page.url.pathname === '/' ? 'page' : undefined}
          >الرئيسية</a
        >
        <a
          href="/about"
          on:click={closeMenu}
          class="block mobile-nav-link"
          class:active={$page.url.pathname === '/about'}
          aria-current={$page.url.pathname === '/about' ? 'page' : undefined}
          >عني</a
        >
        <a
          href="/projects"
          on:click={closeMenu}
          class="block mobile-nav-link"
          class:active={$page.url.pathname.startsWith('/projects')}
          aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}
          >مشاريعي</a
        >
        <a
          href="/contact"
          on:click={closeMenu}
          class="block mobile-nav-link"
          class:active={$page.url.pathname === '/contact'}
          aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}
          >تواصل معي</a
        >
      </div>
    </div>
  {/if}
</nav>

<style lang="postcss">
  button:focus {
  outline: none !important;
  box-shadow: none !important;
}
  .nav-link {
    @apply text-gray-700 hover:bg-gray-50 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200;
  }
  .nav-link.active {
    @apply bg-indigo-50 text-indigo-700;
  }
  .mobile-nav-link {
    @apply text-gray-700 hover:bg-gray-100 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200;
  }
  .mobile-nav-link.active {
    @apply bg-indigo-100 text-indigo-800;
  }
</style>