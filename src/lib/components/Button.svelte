<!-- src/lib/components/Button.svelte -->
<script lang="ts">
  export let href: string = '#';
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let type: 'button' | 'submit' = 'button'; // لتستخدم في الفورم

  let buttonClasses = 'px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg';

  $: { // Svelte reactive declaration to update classes when variant changes
    if (variant === 'primary') {
      buttonClasses = 'bg-white text-indigo-700 hover:bg-gray-100 ' + buttonClasses;
    } else if (variant === 'secondary') {
      buttonClasses = 'bg-indigo-600 text-white hover:bg-indigo-700 border border-indigo-600 ' + buttonClasses;
    } else if (variant === 'outline') {
      buttonClasses = 'bg-transparent text-white border border-white hover:bg-white hover:text-indigo-700 ' + buttonClasses;
    }
  }
</script>

{#if href !== '#'}
  <a {href} class="{buttonClasses}">
    <slot />
  </a>
{:else}
  <button {type} class="{buttonClasses}">
    <slot />
  </button>
{/if}
