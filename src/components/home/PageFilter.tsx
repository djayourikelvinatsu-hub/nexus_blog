import type { Dispatch, SetStateAction } from 'react';
import { Search } from 'lucide-react';

interface PageFilterProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    selectedCategory: string;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    categories: string[];
}

export default function PageFilter({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories
}: PageFilterProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-b border-border pb-6">
            <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full pl-10 pr-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <button
                    onClick={() => setSelectedCategory('All')}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${selectedCategory === 'All'
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:bg-muted'
                        }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors ${selectedCategory === category
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:bg-muted'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}
