<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-gray-800 text-gray-300 py-8 mt-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div class="mb-4">
      <!-- Social Media Icons (يمكنك إضافة أيقونات حقيقية هنا) -->
      <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white mx-2">
        <span class="sr-only">GitHub</span>
        <svg class="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.922 7.822 6.85 8.78.5.087.68-.217.68-.483 0-.237-.008-.87-.012-1.72-2.843.617-3.435-1.378-3.435-1.378-.465-1.187-1.134-1.503-1.134-1.503-.927-.63.07-.617.07-.617 1.026.072 1.564 1.054 1.564 1.054.91 1.554 2.392 1.104 2.973.843.092-.656.357-1.104.646-1.356-2.288-.26-4.686-1.144-4.686-5.084 0-1.12.398-2.037 1.05-2.75-.104-.26-.455-1.302.1-.2.836-.273 2.747 1.05 4.04 1.343.376-.104.776-.156 1.178-.157.402.001.802.053 1.178.157 1.293-.293 3.204-1.616 4.04-1.343.555 1.1.204 2.5.1 2.75.652.713 1.05 1.63 1.05 2.75 0 3.947-2.398 4.82-4.695 5.076.366.314.689.92.689 1.85 0 1.343-.012 2.427-.012 2.75 0 .267.18.57.689.48C19.078 19.822 22 16.237 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd" />
        </svg>
      </a>
      <a href="https://linkedin.com/in/YourUsername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white mx-2">
        <span class="sr-only">LinkedIn</span>
        <svg class="h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <!-- أضف المزيد من الأيقونات هنا (Twitter, Behance, Dribbble) -->
    </div>
    <p>&copy; {currentYear} Ahmed Fouad. جميع الحقوق محفوظة.</p>
    <p class="text-sm mt-1">بنيت باستخدام <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300">SvelteKit</a> و <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300">Tailwind CSS</a>.</p>
  </div>
</footer>