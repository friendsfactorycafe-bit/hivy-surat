import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCBlogPostPage from '@/components/ffc-blog-post-page';
import { getBlogBySlug, blogPosts } from '@/lib/ffc-config';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | HIVY - Place for Celebrations',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    alternates: {
      canonical: `https://hivy.co.in/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://hivy.co.in/blog/${slug}`,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      locale: 'en_IN',
      siteName: 'HIVY - Place for Celebrations',
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <FFCBlogPostPage post={post} />;
}
