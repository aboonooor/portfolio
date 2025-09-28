<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
  import SectionTitle from '$lib/components/SectionTitle.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
  import { fade } from 'svelte/transition';

  let selectedCategory: string = 'All';
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  $: filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);
</script>

<svelte:head>
  <title>مشاريعي | بورتفوليو [اسمك]</title>
  <meta name="description" content="تصفح جميع المشاريع التي قمت بتطويرها." />
</svelte:head>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle title="مشاريعي" subtitle="مجموعة من أعمالي التي تظهر خبرتي في تطوير الويب." />

    <div class="flex flex-wrap justify-center gap-3 mb-12">
      {#each categories as category}
        <button
          on:click={() => (selectedCategory = category)}
          class="px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200
            {selectedCategory === category ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}"
        >
          {category}
        </button>
      {/each}
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredProjects as project (project.slug)}
        <div in:fade={{ duration: 200, delay: 100 }}>
          <ProjectCard {project} />
        </div>
      {/each}
    </div>

    {#if filteredProjects.length === 0}
      <p class="text-center text-gray-600 text-lg mt-10">لا توجد مشاريع في هذا القسم بعد.</p>
    {/if}
  </div>
</section>
