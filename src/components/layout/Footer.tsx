import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/40 py-12 md:py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between">
                {/* Brand */}
                <div className="space-y-4 max-w-sm">
                    <Link to="/" className="text-2xl font-bold tracking-tighter">NEXUS.</Link>
                    <p className="text-sm text-muted-foreground">
                        A modern, minimal blog exploring the intersection of business, technology, and design.
                    </p>
                    <div className="flex items-center gap-4 text-foreground/60 transition-colors">
                        <a href="#" className="hover:text-foreground"><Facebook className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div className="space-y-3">
                        <h4 className="font-medium">Categories</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/business" className="hover:text-foreground">Business</Link></li>
                            <li><Link to="/technology" className="hover:text-foreground">Technology</Link></li>
                            <li><Link to="/podcast" className="hover:text-foreground">Podcast</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-medium">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
                            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-medium">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
                            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border/50 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between">
                <p>© {new Date().getFullYear()} Nexus Blog. All rights reserved.</p>
                <Link to="/sitemap" className="mt-4 md:mt-0 hover:text-foreground">Sitemap</Link>
            </div>
        </footer>
    );
}
