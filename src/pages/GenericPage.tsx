import { useLocation } from 'react-router-dom';

export default function GenericPage() {
    const location = useLocation();
    const title = location.pathname.split('/').pop()?.replace(/-/g, ' ') || 'Page';

    return (
        <div className="container mx-auto px-4 py-20 text-center space-y-6 min-h-[60vh] flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold capitalize tracking-tight">
                {title === '' ? 'Welcome' : title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl text-balance">
                This is a placeholder page for the {title} section. In a real application, you would iterate here to refine content, images, and styling.
            </p>
        </div>
    );
}
