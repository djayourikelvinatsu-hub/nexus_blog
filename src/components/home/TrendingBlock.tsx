import { Link } from 'react-router-dom';
import type { BlogPost } from '../../lib/mock-data';

interface TrendingBlockProps {
    posts: BlogPost[];
}

export default function TrendingBlock({ posts }: TrendingBlockProps) {
    return (
        <section className="py-12 bg-muted/30 rounded-3xl p-8 border border-border/50">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post, index) => (
                    <article key={post.id} className="group relative flex flex-col gap-4">
                        <div className="text-5xl font-extrabold text-border group-hover:text-primary/20 transition-colors">
                            0{index + 1}
                        </div>
                        <div className="space-y-2">
                            <div className="flex text-xs items-center gap-2 text-muted-foreground">
                                <span className="font-semibold text-primary">{post.category}</span>
                                <span>&bull;</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
                                <Link to={`/post/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>
                            <p className="text-sm text-foreground/60">{post.author.name}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
