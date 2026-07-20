export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:4000" : "");

export interface Localized {
  en: string;
  az: string;
}

export interface ServiceItem {
  icon: string;
  title: Localized;
  description: Localized;
}

export interface ProjectItem {
  title: string;
  category: Localized;
  img: string;
  url: string;
}

export interface BlogItem {
  category: Localized;
  title: Localized;
  description: Localized;
  img: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface CounterItem {
  icon: string;
  num: number;
  text: Localized;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

export const fetchServices = () => get<ServiceItem[]>("/api/services");
export const fetchProjects = () => get<ProjectItem[]>("/api/projects");
export const fetchBlog = () => get<BlogItem[]>("/api/blog");
export const fetchSkills = () => get<SkillItem[]>("/api/skills");
export const fetchCounters = () => get<CounterItem[]>("/api/counters");

export async function postContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("contact_failed");
  return res.json();
}
