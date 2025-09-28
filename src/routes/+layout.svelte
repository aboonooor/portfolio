<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import '../app.css'; // استيراد ملف Tailwind CSS
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { fade } from 'svelte/transition';
  import { page } from '$app/stores';

  // لـ SEO و Open Graph
  $: title = $page.data?.meta?.title || 'بورتفوليو [اسمك]';
  $: description = $page.data?.meta?.description || 'مطور ويب متخصص في بناء تطبيقات ويب عصرية باستخدام SvelteKit.';
  $: imageUrl = $page.data?.meta?.imageUrl || 'https://via.placeholder.com/1200x630?text=My+Portfolio'; // صورة افتراضية
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourportfolio.com{$page.url.pathname}" /> <!-- غير الدومين ده -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourportfolio.com{$page.url.pathname}" /> <!-- غير الدومين ده -->
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={imageUrl} />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <Navbar />
  <main class="flex-grow">
    <!-- استخدام Svelte transition للتحكم في كيفية ظهور واختفاء المحتوى -->
    {#key $page.url.pathname}
      <div in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 100 }}>
        <slot />
      </div>
    {/key}
  </main>
  <Footer />
</div>
