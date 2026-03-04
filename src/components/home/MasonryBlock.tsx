import { Link } from 'react-router-dom';
import type { BlogPost } from '../../lib/mock-data';

interface MasonryBlockProps {
    posts: BlogPost[];
}

export default function MasonryBlock({ posts }: MasonryBlockProps) {
    if (posts.length < 5) return null;
    const mainPost = posts[0];
    const gridPosts = posts.slice(1, 5);

    return (
        <section className="py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Discover</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
                {/* Large featured block */}
                <article className="lg:col-span-2 lg:row-span-2 group relative rounded-2xl overflow-hidden bg-card text-white">
                    <img
                        src={mainPost.imageUrl}
                        alt={mainPost.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase rounded w-fit">
                            {mainPost.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                            <Link to={`/post/${mainPost.slug}`}>
                                <span className="absolute inset-0" />
                                {mainPost.title}
                            </Link>
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-foreground/80">
                            <span className="font-medium text-white">{mainPost.author.name}</span>
                            <span>&bull;</span>
                            <span className="text-white/80">{mainPost.date}</span>
                        </div>
                    </div>
                </article>

                {/* Smaller grid blocks */}
                {gridPosts.map((post) => (
                    <article key={post.id} className="group relative rounded-2xl overflow-hidden bg-card text-white">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-2">
                            <span className="text-primary text-xs font-bold uppercase">
                                {post.category}
                            </span>
                            <h4 className="text-lg font-bold leading-snug line-clamp-2">
                                <Link to={`/post/${post.slug}`}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </Link>
                            </h4>
                            <p className="text-xs text-white/70">{post.date}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
