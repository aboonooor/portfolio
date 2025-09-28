<!-- src/lib/components/SectionTitle.svelte -->
<script lang="ts">
  export let title: string;
  export let subtitle: string | undefined = undefined;
</script>

<div class="text-center mb-10">
  <h2 class="text-4xl font-extrabold text-gray-900 mb-4">
    {title}
  </h2>
  {#if subtitle}
    <p class="text-xl text-gray-600 max-w-2xl mx-auto">
      {subtitle}
    </p>
  {/if}
</div>
