import { Link } from 'react-router-dom';
import type { BlogPost } from '../../lib/mock-data';

interface BlogGridProps {
    posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Latest Stories</h2>
                <Link to="/posts" className="text-sm font-medium text-primary hover:underline">
                    View all posts &rarr;
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.id} className="group relative flex flex-col gap-4 rounded-xl p-4 -m-4 hover:bg-muted/50 transition-colors">
                        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-card">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="space-y-3 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="font-semibold text-primary">{post.category}</span>
                                <span>&bull;</span>
                                <span>{post.date}</span>
                            </div>

                            <h3 className="font-bold text-xl leading-tight group-hover:text-primary transition-colors">
                                <Link to={`/post/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h3>

                            <p className="text-muted-foreground line-clamp-2 mt-auto text-sm">
                                {post.excerpt}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
