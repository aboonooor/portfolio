// src/lib/data/projects.ts
import type { Project } from '$lib/types/global';

export const projects: Project[] = [
  {
    slug: 'e-commerce-platform',
    title: 'منصة تسوق إلكتروني متكاملة',
    category: 'Full-Stack Development',
    description: 'تطوير منصة تسوق إلكتروني بميزات إدارة منتجات، عربة تسوق، ومعالجة طلبات.',
    longDescription: [
      'هذا المشروع يتضمن بناء واجهة أمامية ديناميكية باستخدام SvelteKit، وواجهة خلفية قوية مبنية على Node.js و Express مع قاعدة بيانات MongoDB.',
      'يتيح للمستخدمين تصفح المنتجات، إضافتها للعربة، وإتمام عمليات الشراء بأمان.',
      'لوحة تحكم إدارية تسمح بإضافة وتعديل وحذف المنتجات، وإدارة المستخدمين والطلبات.'
    ],
    technologies: ['SvelteKit', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'images/shop1.png',
    liveUrl: '#', // غيره لرابط مشروعك الحقيقي
    githubUrl: '#' // غيره لرابط GitHub الحقيقي
  },
  {
    slug: 'task-management-app',
    title: 'تطبيق إدارة المهام التعاوني',
    category: 'Front-End Development',
    description: 'تطبيق ويب لإدارة المهام يسمح للمستخدمين بإنشاء، تخصيص، وتتبع المهام مع فريقهم.',
    longDescription: [
      'تم تصميم واجهة المستخدم بعناية لتوفير تجربة سلسة وبديهية، مع التركيز على سهولة الاستخدام.',
      'يتضمن ميزات مثل تحديد أولويات المهام، تتبع التقدم، والتنبيهات المخصصة.',
      'استخدمت SvelteKit لبناء الواجهة الأمامية سريعة الاستجابة، مع استخدام API خارجي لحفظ البيانات.'
    ],
    technologies: ['SvelteKit', 'TypeScript', 'API Integration', 'Tailwind CSS', 'Vite'],
    imageUrl: 'images/tasks.png',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    slug: 'personal-blog',
    title: 'مدونة شخصية بتصميم عصري',
    category: 'Content & Design',
    description: 'مدونة شخصية لعرض المقالات والخبرات مع نظام إدارة محتوى بسيط.',
    longDescription: [
      'تم بناء المدونة باستخدام SvelteKit لتقديم أداء عالي وسرعة في التحميل.',
      'يتضمن تصميم متجاوب ليتناسب مع جميع الأجهزة، وميزات SEO لتحسين الظهور في محركات البحث.',
      'نظام بسيط لإدارة المقالات يسمح بإضافة وتعديل وحذف المحتوى بسهولة.'
    ],
    technologies: ['SvelteKit', 'Markdown', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'images/blog.png',
    liveUrl: '#',
    githubUrl: '#'
  }
  // أضف المزيد من المشاريع هنا
];