export interface Author {
    name: string;
    avatar: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: Author;
    category: string;
    date: string;
    imageUrl: string;
    readTime: string;
    slug: string;
}

export const MOCK_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'How Server Components Are Reshaping React Architecture in 2026',
        excerpt: 'React Server Components (RSC) have matured significantly. We explore how leading engineering teams are leveraging RSCs to reduce client-side bundles by up to 60% while improving time-to-interactive scores across the board.',
        content: 'React Server Components represent a fundamental shift in how we build React applications...',
        author: {
            name: 'Delilah Vance',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Technology',
        date: 'February 28, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
        readTime: '8 min read',
        slug: 'react-server-components-architecture-2026'
    },
    {
        id: '2',
        title: 'The Silent Rise of the "Micro-SaaS" Ecosystem',
        excerpt: 'Why solopreneurs are turning away from venture capital to build highly specialized, highly profitable $50k/MRR micro-businesses solving niche B2B problems.',
        content: 'Full content goes here...',
        author: {
            name: 'Marcus Thorne',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Business',
        date: 'March 01, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1200',
        readTime: '6 min read',
        slug: 'rise-of-micro-saas-ecosystem'
    },
    {
        id: '3',
        title: 'Designing for the Ambient Web: Beyond Screens',
        excerpt: 'As smart rings, augmented glasses, and voice interfaces become ubiquitous, UX designers must learn to craft experiences that exist purely in the periphery of our attention.',
        content: 'Full content goes here...',
        author: {
            name: 'Elena Rostova',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Design',
        date: 'March 02, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        readTime: '7 min read',
        slug: 'designing-for-ambient-web'
    },
    {
        id: '4',
        title: 'We Need to Talk About Open Source Burnout',
        excerpt: 'Maintainers of critical infrastructure packages are increasingly stepping away. How the tech industry can sustainably fund and support the unseen foundations of the web.',
        content: 'Full content goes here...',
        author: {
            name: 'Samira Jalil',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Culture',
        date: 'February 25, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        readTime: '10 min read',
        slug: 'open-source-maintainer-burnout'
    },
    {
        id: '5',
        title: 'PostgreSQL Vector Search is Eating the Database World',
        excerpt: 'With pgvector optimizations reaching maturity, many engineering teams are dropping dedicated vector databases entirely in favor of their trusted relational setups.',
        content: 'Full content goes here...',
        author: {
            name: 'David Osei',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Technology',
        date: 'February 20, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200',
        readTime: '5 min read',
        slug: 'postgresql-vector-search-dominance'
    },
    {
        id: '6',
        title: 'The Return to Monoliths: When Microservices Go Wrong',
        excerpt: 'A deep dive into why several prominent scale-ups recently executed highly public migrations back to monolithic architectures, shedding millions in infrastructure costs.',
        content: 'Full content goes here...',
        author: {
            name: 'Julian Hayes',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
        },
        category: 'Engineering',
        date: 'February 15, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
        readTime: '12 min read',
        slug: 'return-to-monoliths-over-microservices'
    }
];
