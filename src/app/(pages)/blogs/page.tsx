import { Metadata } from "next";
import { Articles } from "./_components/Articles/Articles";

export const metadata: Metadata = {
    title: 'Blog - Sewaro Tattoo Studio | Tattoo Tips & Insights',
    description: 'Explore tattoo care tips, design inspiration, and artist insights from Sewaro Tattoo Studio in Birtamode.',
    openGraph: {
        title: 'Blog - Sewaro Tattoo Studio',
        description: 'Explore tattoo care tips, design inspiration, and artist insights from Sewaro Tattoo Studio in Birtamode.',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
        type: 'website',
        images: [
            {
                url: '/images/articles/article1.webp',
                width: 1200,
                height: 630,
                alt: 'Sewaro Tattoo Blog',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog - Sewaro Tattoo Studio',
        description: 'Explore tattoo care tips, design inspiration, and artist insights.',
        images: ['https://yoursite.com/images/blog-og-image.jpg'],
    },
};

export default function BlogsPage() {
    return <Articles />;
}