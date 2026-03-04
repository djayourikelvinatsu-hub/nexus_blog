import { Link } from 'react-router-dom';
import { Search, Menu, X, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'All Posts', path: '/posts' },
        { name: 'Business', path: '/business' },
        { name: 'Technology', path: '/technology' },
        { name: 'Podcast', path: '/podcast' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-primary/80 transition-colors">
                    NEXUS.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions (Desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 text-foreground/60 transition-colors">
                        <a href="#" className="hover:text-foreground"><Facebook className="h-4 w-4" /></a>
                        <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
                        <a href="#" className="hover:text-foreground"><Instagram className="h-4 w-4" /></a>
                    </div>
                    <div className="h-4 w-px bg-border" />
                    <button aria-label="Search" className="text-foreground/80 hover:text-foreground">
                        <Search className="h-5 w-5" />
                    </button>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-foreground/80 hover:text-foreground"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
