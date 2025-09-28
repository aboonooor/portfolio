

// src/lib/types/global.d.ts

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[]; // لوصف تفصيلي على هيئة فقرات
  technologies: string[];
  imageUrl: string;
  liveUrl?: string; // رابط مباشر للمشروع (اختياري)
  githubUrl?: string; // رابط GitHub (اختياري)
}

export interface Skill {
  name: string;
  icon: string; // ممكن تكون path لأيقونة SVG أو كلاس لأيقونة فونت
}
