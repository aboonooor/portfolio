<!-- src/routes/contact/+page.svelte -->
<script lang="ts">
  import SectionTitle from '$lib/components/SectionTitle.svelte';
  import Button from '$lib/components/Button.svelte';

  let name: string = '';
  let email: string = '';
  let message: string = '';
  let status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  async function handleSubmit() {
    status = 'sending';
    // هنا ممكن تستخدم خدمة زي Formspree أو Netlify Forms
    // أو ترسل البيانات لـ API backend خاص بيك
    try {
      const response = await fetch('https://formspree.io/f/yourformid', { // غير 'yourformid' بمعرف الفورم بتاعك
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        status = 'success';
        name = '';
        email = '';
        message = '';
      } else {
        status = 'error';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      status = 'error';
    } finally {
      // ممكن ترجع الـ status لـ idle بعد فترة
      setTimeout(() => (status = 'idle'), 5000);
    }
  }
</script>

<svelte:head>
  <title>تواصل معي | بورتفوليو [اسمك]</title>
  <meta name="description" content="تواصل معي بخصوص فرص العمل، المشاريع الجديدة، أو أي استفسار آخر." />
</svelte:head>

<section class="py-16 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle title="تواصل معي" subtitle="يسعدني تلقي رسائلكم وفرص التعاون." />

    <div class="bg-gray-50 p-8 rounded-lg shadow-md">
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
          <input
            type="text"
            id="name"
            bind:value={name}
            required
            class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            required
            class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">رسالتك</label>
          <textarea
            id="message"
            bind:value={message}
            required
            rows="5"
            class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <Button type="submit" variant="primary" disabled={status === 'sending'}>
          {#if status === 'sending'}
            جار الإرسال...
          {:else if status === 'success'}
            تم الإرسال بنجاح!
          {:else if status === 'error'}
            حدث خطأ. حاول مرة أخرى.
          {:else}
            إرسال الرسالة
          {/if}
        </Button>

        {#if status === 'success'}
          <p class="mt-4 text-green-600 text-sm">شكرًا لك على رسالتك! سأتواصل معك قريبًا.</p>
        {:else if status === 'error'}
          <p class="mt-4 text-red-600 text-sm">عذرًا، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.</p>
        {/if}
      </form>
    </div>

    <div class="mt-12 text-center text-gray-700">
      <p class="text-xl font-semibold mb-4">أو تواصل معي مباشرةً:</p>
      <p class="text-lg mb-2">البريد الإلكتروني: <a href="mailto:your.email@example.com" class="text-indigo-600 hover:underline">your.email@example.com</a></p>
      <p class="text-lg">LinkedIn: <a href="https://linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer" class="text-indigo-600 hover:underline">linkedin.com/in/YourUsername</a></p>
    </div>
  </div>
</section>
