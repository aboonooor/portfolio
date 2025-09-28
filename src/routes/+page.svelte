<!-- src/routes/+page.svelte -->
<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import SectionTitle from '$lib/components/SectionTitle.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';
  import { projects } from '$lib/data/projects';
  import { skills } from '$lib/data/skills';

  const featuredProjects = projects.slice(0, 3); // عرض أول 3 مشاريع كمشاريع مميزة
</script>

<svelte:head>
  <title>الرئيسية | بورتفوليو [اسمك]</title>
  <meta name="description" content="مطور ويب Full-Stack، متخصص في بناء تطبيقات ويب عصرية باستخدام SvelteKit." />
  <!-- أضف Open Graph و Twitter tags خاصة بالصفحة الرئيسية هنا لو عايزها تختلف عن الـ default في الـ layout -->
</svelte:head>

<HeroSection
  name="أحمد"
  title="مطور ويب Full-Stack"
  description="بشغف لتطوير الويب، أقوم ببناء تجارب مستخدم مذهلة وحلول برمجية قوية. أستخدم أحدث التقنيات لتقديم منتجات عالية الجودة."
/>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle title="أهم مشاريعي" subtitle="استكشف بعضًا من أعمالي الأخيرة التي تعرض مهاراتي وخبراتي." />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each featuredProjects as project (project.slug)}
        <ProjectCard {project} />
      {/each}
    </div>
    <div class="text-center mt-12">
      <a href="/projects" class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
        شاهد كل المشاريع
      </a>
    </div>
  </div>
</section>

<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle title="مهاراتي" subtitle="التقنيات والأدوات التي أتقنها وأستخدمها في مشاريعي." />
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
      {#each skills as skill (skill.name)}
        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
         <!-- <svg class="h-12 w-12 text-indigo-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="{skill.icon}" />
          </svg>-->
          <img src="{skill.icon}" alt="{skill.name} logo" class="h-12 w-12 text-indigo-600 mb-2" />
          <p class="font-medium text-gray-800">{skill.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
