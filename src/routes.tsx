import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const AllPosts = lazy(() => import('./pages/AllPosts'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const Business = lazy(() => import('./pages/Business'));
const Technology = lazy(() => import('./pages/Technology'));
const Podcast = lazy(() => import('./pages/Podcast'));

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center">Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts" element={<AllPosts />} />
                <Route path="/post/:slug" element={<BlogDetail />} />

                {/* Category Pages */}
                <Route path="/business" element={<Business />} />
                <Route path="/technology" element={<Technology />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/search" element={<GenericPage />} />

                {/* Info Pages */}
                <Route path="/about" element={<GenericPage />} />
                <Route path="/contact" element={<GenericPage />} />
                <Route path="/terms" element={<GenericPage />} />
                <Route path="/privacy" element={<GenericPage />} />
                <Route path="/sitemap" element={<GenericPage />} />

                <Route path="*" element={<GenericPage />} />
            </Routes>
        </Suspense>
    );
}
