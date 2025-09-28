<!-- src/lib/components/HeroSection.svelte -->
<script lang="ts">
  import Button from './Button.svelte';

  export let name: string = '[اسمك]';
  export let title: string = 'مطور ويب Full-Stack';
  export let description: string = 'أقوم ببناء تطبيقات ويب قوية وجذابة باستخدام أحدث التقنيات.';
</script>

<section class="relative bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-20 md:py-32 overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
      مرحباً، أنا {name}
    </h1>
    <p class="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-200">
      {title}
    </p>
    <p class="max-w-3xl mx-auto text-lg md:text-xl mb-10 animate-fade-in-up delay-400">
      {description}
    </p>
    <div class="flex justify-center space-x-4 animate-fade-in-up delay-600" style="gap: 20px;">
      <Button href="/projects" variant="primary">اكتشف مشاريعي</Button>
      <Button href="/contact" variant="secondary">تواصل معي</Button>
    </div>
  </div>
  <!-- ممكن تضيف خلفية بشكل موجات أو أشكال هندسية هنا -->
  <div class="absolute inset-0 z-0 opacity-10">
    <!-- مثال: SVG pattern -->
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.1)"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"/>
    </svg>
  </div>
</section>

<style>
  /* تعريفات للحركات (Animations) */
  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInFromBottom 0.6s ease-out forwards;
    opacity: 0; /* يبدأ مخفي */
  }

  .animate-fade-in-up.delay-200 {
    animation-delay: 0.2s;
  }
  .animate-fade-in-up.delay-400 {
    animation-delay: 0.4s;
  }
  .animate-fade-in-up.delay-600 {
    animation-delay: 0.6s;
  }
</style>
