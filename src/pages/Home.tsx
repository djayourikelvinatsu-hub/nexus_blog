import { MOCK_POSTS } from '../lib/mock-data';
import HeroSection from '../components/home/HeroSection';
import EditorsPick from '../components/home/EditorsPick';
import TrendingBlock from '../components/home/TrendingBlock';
import MasonryBlock from '../components/home/MasonryBlock';
import BlogGrid from '../components/home/BlogGrid';

export default function Home() {
    const featuredPost = MOCK_POSTS[0];
    const editorsPicks = MOCK_POSTS.slice(1, 5);
    const trendingPosts = [...MOCK_POSTS].reverse().slice(0, 4);
    const masonryPosts = [...MOCK_POSTS].slice(0, 5);
    const latestPosts = MOCK_POSTS;

    return (
        <div className="container mx-auto px-4 pb-16 space-y-10 md:space-y-16">
            <HeroSection post={featuredPost} />
            <EditorsPick posts={editorsPicks} />
            <TrendingBlock posts={trendingPosts} />
            <MasonryBlock posts={masonryPosts} />
            <BlogGrid posts={latestPosts} />
        </div>
    );
}
