import { MOCK_POSTS } from '../lib/mock-data';
import BlogGrid from '../components/home/BlogGrid';

export default function Podcast() {
    const podcastPosts = MOCK_POSTS.filter(post => post.category === 'Podcast');

    return (
        <div className="container mx-auto px-4 py-16 space-y-12 min-h-[60vh]">
            <header className="max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Podcast</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Listen to our latest episodes featuring industry experts, founders, and creators.
                </p>
            </header>

            {podcastPosts.length > 0 ? (
                <BlogGrid posts={podcastPosts} />
            ) : (
                <div className="py-20 text-center text-muted-foreground">
                    No podcast episodes found currently.
                </div>
            )}
        </div>
    );
}
