<!-- src/routes/projects/[slug]/+page.svelte -->
<script lang="ts">
  import { projects } from '$lib/data/projects';
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';

  $: slug = $page.params.slug;
  $: project = projects.find(p => p.slug === slug);

  // إعادة توجيه لصفحة 404 لو المشروع مش موجود
  import { redirect } from '@sveltejs/kit';
  if (!project) {
    throw redirect(302, '/404.html'); // redirect لصفحة الـ 404
  }
</script>

<svelte:head>
  <title>{project?.title || 'Project'} | بورتفوليو [اسمك]</title>
  <meta name="description" content={project?.description || 'تفاصيل مشروع.'} />
</svelte:head>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <a href="/projects" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-200">
      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      العودة للمشاريع
    </a>

    {#if project}
      <h1 class="text-5xl font-extrabold text-gray-900 mb-6">{project.title}</h1>
      <p class="text-indigo-600 text-lg mb-8">{project.category}</p>

      <img src={project.imageUrl} alt={project.title} class="w-full h-96 object-cover object-center rounded-lg shadow-lg mb-12" />

      <div class="prose prose-indigo max-w-none text-gray-700 text-lg leading-relaxed mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-4">نظرة عامة على المشروع</h2>
        {#each project.longDescription as paragraph}
          <p class="mb-4">{paragraph}</p>
        {/each}

        <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">التقنيات المستخدمة</h3>
        <div class="flex flex-wrap gap-3">
          {#each project.technologies as tech}
            <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-base font-medium">{tech}</span>
          {/each}
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center md:justify-start">
        {#if project.liveUrl}
          <Button href={project.liveUrl} variant="primary" target="_blank" rel="noopener noreferrer">
            مشاهدة حية
            <svg class="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </Button>
        {/if}
        {#if project.githubUrl}
          <Button href={project.githubUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            GitHub
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.922 7.822 6.85 8.78.5.087.68-.217.68-.483 0-.237-.008-.87-.012-1.72-2.843.617-3.435-1.378-3.435-1.378-.465-1.187-1.134-1.503-1.134-1.503-.927-.63.07-.617.07-.617 1.026.072 1.564 1.054 1.564 1.054.91 1.554 2.392 1.104 2.973.843.092-.656.357-1.104.646-1.356-2.288-.26-4.686-1.144-4.686-5.084 0-1.12.398-2.037 1.05-2.75-.104-.26-.455-1.302.1-.2.836-.273 2.747 1.05 4.04 1.343.376-.104.776-.156 1.178-.157.402.001.802.053 1.178.157 1.293-.293 3.204-1.616 4.04-1.343.555 1.1.204 2.5.1 2.75.652.713 1.05 1.63 1.05 2.75 0 3.947-2.398 4.82-4.695 5.076.366.314.689.92.689 1.85 0 1.343-.012 2.427-.012 2.75 0 .267.18.57.689.48C19.078 19.822 22 16.237 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" /></svg>
          </Button>
        {/if}
      </div>
    {:else}
      <p class="text-center text-xl text-gray-700">المشروع المطلوب غير موجود.</p>
    {/if}
  </div>
</section>
