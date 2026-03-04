import Header from './Header';
import Footer from './Footer';

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
