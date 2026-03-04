import { MOCK_POSTS } from '../lib/mock-data';
import BlogGrid from '../components/home/BlogGrid';

export default function Technology() {
    const techPosts = MOCK_POSTS.filter(post => post.category === 'Technology');

    return (
        <div className="container mx-auto px-4 py-16 space-y-12 min-h-[60vh]">
            <header className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Technology</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The latest trends, frameworks, and innovations transforming the tech landscape today.
                </p>
            </header>

            {techPosts.length > 0 ? (
                <BlogGrid posts={techPosts} />
            ) : (
                <div className="py-20 text-center text-muted-foreground">
                    No technology posts found currently.
                </div>
            )}
        </div>
    );
}
