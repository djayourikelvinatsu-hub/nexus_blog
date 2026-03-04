import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Link as LinkIcon, ChevronLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { MOCK_POSTS } from '../lib/mock-data';
import BlogGrid from '../components/home/BlogGrid';

export default function BlogDetail() {
    const { slug } = useParams();
    const post = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0];
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) return <div className="container py-20 text-center">Post not found</div>;

    return (
        <article className="relative min-h-screen">
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
            />

            {/* Hero Header */}
            <header className="relative w-full h-[60vh] min-h-[400px]">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                        <div className="max-w-3xl space-y-6">
                            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground font-semibold rounded-full text-sm">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-white/80">
                                <div className="flex items-center gap-3">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white/20" />
                                    <span className="font-medium text-white">{post.author.name}</span>
                                </div>
                                <span>&bull;</span>
                                <span>{post.date}</span>
                                <span>&bull;</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Area */}
            <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
                {/* Social Share (Sticky Side) */}
                <aside className="hidden lg:flex flex-col gap-4 sticky top-24 h-fit">
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-2">Share</p>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></button>
                    <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></button>
                </aside>

                {/* Main Content */}
                <div className="flex-1 max-w-3xl mx-auto lg:mx-0 prose prose-lg dark:prose-invert">
                    <p className="lead text-xl text-muted-foreground font-medium mb-8">
                        {post.excerpt}
                    </p>
                    <h2>Introduction</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2>The Main Challenge</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <blockquote>
                        "Innovation distinguishes between a leader and a follower." – Steve Jobs
                    </blockquote>
                    <h3>Key Takeaways</h3>
                    <ul>
                        <li>First point of importance</li>
                        <li>Second critical factor</li>
                        <li>Third essential consideration</li>
                    </ul>
                    <h2>Conclusion</h2>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>

                {/* Table of Contents (Sticky Side) */}
                <aside className="hidden xl:block w-64 sticky top-24 h-fit border-l border-border pl-6 space-y-4">
                    <h4 className="font-bold text-sm uppercase tracking-wider">On this page</h4>
                    <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Introduction</a>
                        <a href="#" className="hover:text-primary transition-colors">The Main Challenge</a>
                        <a href="#" className="pl-4 hover:text-primary transition-colors">Key Takeaways</a>
                        <a href="#" className="hover:text-primary transition-colors">Conclusion</a>
                    </nav>
                </aside>
            </div>

            {/* Mobile Share */}
            <div className="lg:hidden container mx-auto px-4 pb-12 border-b border-border flex items-center justify-center gap-4">
                <span className="text-sm font-semibold">Share:</span>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Twitter className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><Facebook className="w-4 h-4" /></button>
                <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"><LinkIcon className="w-4 h-4" /></button>
            </div>

            {/* Related Posts */}
            <div className="bg-muted/30 pb-20 pt-16 mt-12 border-t border-border">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                    <BlogGrid posts={MOCK_POSTS.slice(0, 3)} />
                </div>
            </div>
        </article>
    );
}
