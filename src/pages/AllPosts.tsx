import { MOCK_POSTS } from '../lib/mock-data';
import BlogGrid from '../components/home/BlogGrid';
import PageFilter from '../components/home/PageFilter';
import { useState, useMemo } from 'react';

export default function AllPosts() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories safely
    const categories = useMemo(() => {
        return Array.from(new Set(MOCK_POSTS.map(post => post.category)));
    }, []);

    // Filter posts safely without useEffect
    const filteredPosts = useMemo(() => {
        return MOCK_POSTS.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-16 space-y-12">
            <header className="max-w-2xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Posts</h1>
                <p className="text-xl text-muted-foreground">
                    Explore our entire collection of articles, interviews, and insights.
                </p>
            </header>

            <PageFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />

            {filteredPosts.length > 0 ? (
                <BlogGrid posts={filteredPosts} />
            ) : (
                <div className="py-20 text-center text-muted-foreground">
                    No posts found matching your criteria.
                </div>
            )}

            {filteredPosts.length > 0 && (
                <div className="flex justify-center pt-8">
                    <button className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
}
