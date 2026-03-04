import { Link } from 'react-router-dom';
import type { BlogPost } from '../../lib/mock-data';

interface EditorsPickProps {
    posts: BlogPost[];
}

export default function EditorsPick({ posts }: EditorsPickProps) {
    if (posts.length === 0) return null;
    const mainPost = posts[0];
    const sidePosts = posts.slice(1, 4);

    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Editor's Pick</h2>
                <Link to="/posts?filter=editors" className="text-sm font-medium text-primary hover:underline">
                    View all picks &rarr;
                </Link>
            </div>

            <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
                {/* Main Pick */}
                <article className="group relative rounded-2xl overflow-hidden bg-card border border-border">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                        <img
                            src={mainPost.imageUrl}
                            alt={mainPost.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6 md:p-8 space-y-4">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="font-medium text-primary">{mainPost.category}</span>
                            <span>&bull;</span>
                            <span>{mainPost.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                            <Link to={`/post/${mainPost.slug}`}>
                                <span className="absolute inset-0" />
                                {mainPost.title}
                            </Link>
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">
                            {mainPost.excerpt}
                        </p>
                    </div>
                </article>

                {/* Side Picks */}
                <div className="flex flex-col justify-between gap-6">
                    {sidePosts.map(post => (
                        <article key={post.id} className="group relative grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="aspect-square rounded-lg overflow-hidden border border-border">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-2">
                                <span className="text-xs font-semibold text-primary">{post.category}</span>
                                <h4 className="font-bold line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                    <Link to={`/post/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h4>
                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                    <span>{post.author.name}</span>
                                    <span>&bull;</span>
                                    <span>{post.date}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
