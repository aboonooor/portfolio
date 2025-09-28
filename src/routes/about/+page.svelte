<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import SectionTitle from '$lib/components/SectionTitle.svelte';
  import { skills } from '$lib/data/skills';

  const mySkills = skills; // استخدام نفس بيانات المهارات
</script>

<svelte:head>
  <title>عني | بورتفوليو احمد فؤاد</title>
  <meta name="description" content="تعرف على المزيد عن خبراتي، مهاراتي، وفلسفتي في تطوير الويب." />
</svelte:head>

<section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle title="عني" subtitle="رحلتي في عالم تطوير الويب" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      <div class="text-lg text-gray-700 leading-relaxed">
        <p class="mb-6">
    أنا احمد فؤاد، مطور ويب Full-Stack و برامج سطح المكتب و محلل نظم شغوف ببناء تجارب رقمية مبتكرة وفعالة. بدأت رحلتي في عالم البرمجة منذ 25 سنة،
          وخلالها اكتسبت خبرة واسعة في تطوير الواجهات الأمامية والخلفية لتطبيقات الويب المعقدة و مجموعة كبيرة من منصات البرمجة الحيوية 
        </p>
        <p class="mb-6">
          أؤمن بأهمية الكود النظيف، التصميم المتجاوب، وتجربة المستخدم السلسة. أستمتع بالعمل على تحديات جديدة وأسعى دائمًا لتعلم
          أحدث التقنيات والأدوات لتقديم أفضل الحلول.
        </p>
        <p>
          هدفي هو تحويل الأفكار إلى واقع ملموس، وبناء منتجات تترك أثرًا إيجابيًا. إذا كنت تبحث عن مطور يمكنه إنجاز مهمة
          بشكل احترافي وإبداعي، فأنا هنا لمساعدتك.
        </p>
      </div>
      <div class="flex justify-center">
        <img
          src="images/profile.jpg"
          alt="صورتك الشخصية"
          class="rounded-full shadow-lg border-4 border-indigo-200 w-64 h-64 object-cover object-center"
        />
      </div>
    </div>

    <SectionTitle title="خبراتي ومهاراتي التقنية" subtitle="نظرة عميقة على التقنيات التي أستخدمها يوميًا." />
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
      {#each mySkills as skill (skill.name)}
        <div class="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
           <img src="{skill.icon}" alt="{skill.name} logo" class="h-12 w-12 text-indigo-600 mb-2" />

          <p class="font-medium text-gray-800">{skill.name}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
