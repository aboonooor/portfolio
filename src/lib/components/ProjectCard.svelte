<!-- src/lib/components/ProjectCard.svelte -->
<script lang="ts">
  import type { Project } from '$lib/types/global';

  export let project: Project;
</script>

<a href="/projects/{project.slug}" class="block rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
  <img src={project.imageUrl} alt={project.title} class="w-full h-48 object-cover object-center" loading="lazy" />
  <div class="p-5">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
    <p class="text-indigo-600 text-sm mb-3">{project.category}</p>
    <p class="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
    <div class="flex flex-wrap gap-2 text-xs">
      {#each project.technologies.slice(0, 3) as tech}
        <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tech}</span>
      {/each}
      {#if project.technologies.length > 3}
        <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">+{project.technologies.length - 3}</span>
      {/if}
    </div>
  </div>
</a>