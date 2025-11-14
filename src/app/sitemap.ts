import { BLOGS } from "@/constants";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sewarotattoo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Core clinic pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Homepage gets highest priority
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  const blogPages = BLOGS.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.id}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

  return [
    ...staticRoutes,
    ...blogPages
  ];
}