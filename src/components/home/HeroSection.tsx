import { Link } from 'react-router-dom';
import type { BlogPost } from '../../lib/mock-data';

interface HeroSectionProps {
    post: BlogPost;
}

export default function HeroSection({ post }: HeroSectionProps) {
    return (
        <section className="group py-8 md:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border transition-all hover:border-primary/20">
                <div className="relative aspect-video md:aspect-[4/3] overflow-hidden">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        loading="eager"
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="p-6 md:p-10 lg:p-12 space-y-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-sm">
                        <span className="font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                            {post.category}
                        </span>
                        <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-tight">
                            <Link to={`/post/${post.slug}`} className="hover:underline decoration-primary decoration-2 underline-offset-4">
                                {post.title}
                            </Link>
                        </h1>
                        <p className="text-lg text-muted-foreground line-clamp-3 leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-10 h-10 rounded-full border-2 border-background"
                            />
                            <div className="text-sm">
                                <p className="font-medium text-foreground">{post.author.name}</p>
                                <p className="text-muted-foreground">{post.readTime}</p>
                            </div>
                        </div>

                        <Link
                            to={`/post/${post.slug}`}
                            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground h-10 px-5 py-2 text-sm font-medium transition-colors hover:bg-primary/90"
                        >
                            Read Article
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
