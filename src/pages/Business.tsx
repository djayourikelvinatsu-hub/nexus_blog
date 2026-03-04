import { MOCK_POSTS } from '../lib/mock-data';
import BlogGrid from '../components/home/BlogGrid';

export default function Business() {
    const businessPosts = MOCK_POSTS.filter(post => post.category === 'Business');

    return (
        <div className="container mx-auto px-4 py-16 space-y-12 min-h-[60vh]">
            <header className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Business</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Insights and strategies for modern business leaders and entrepreneurs navigating today's competitive landscape. and all the latest updates about business
                </p>
            </header>

            {businessPosts.length > 0 ? (
                <BlogGrid posts={businessPosts} />
            ) : (
                <div className="py-20 text-center text-muted-foreground">
                    No business posts found currently.
                </div>
            )}
        </div>
    );
}
