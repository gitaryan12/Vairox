import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Organize Your Leads",
        description: "Efficiently categorize and easy management. Integrate with your favorite tools.",
        icon: FolderOpenIcon,
    },
    {
        title: "Shorten and Customize",
        description: "Create concise, branded leads that are easy to track.",
        icon: WandSparklesIcon,
    },
    {
        title: "Analyze and Optimize",
        description: "Gain insights into leads performance and optimize for better engagement.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "Lead Generation",
        description: "Generate long-term leads that are easy to scalable and durable.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your leads & Sales.",
    },
    {
        title: "Privacy protection",
        description: "Hide your leads with a AI Protection.",
    },
    // {
    //     title: "Custom QR codes",
    //     description: "Generate custom QR codes for your links.",
    // },
    {
        title: " AI SDR",
        description: "Set an AI Sales Development Representative.",
    },
    {
        title: "Team collaboration",
        description: "Share Workflows with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    {
        name: "Michael Smith",
        username: "@michaelsmith",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "This tool is a lifesaver! Managing and tracking my leads has never been easier. A must-have for anyone dealing with numerous leads."
    },
    {
        name: "Emily Johnson",
        username: "@emilyjohnson",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "Very useful app! It has streamlined my workflow considerably. A few minor bugs, but overall a great experience."
    },
    {
        name: "Daniel Williams",
        username: "@danielwilliams",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "I've been using this app daily for months. The insights and analytics it provides are invaluable. Highly recommend it!"
    },
    {
        name: "Sophia Brown",
        username: "@sophiabrown",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "This app is fantastic! It offers AI SDR Eva ~ everything I need to manage my leads efficiently. Very user-friendly and intuitive."
    },
    {
        name: "James Taylor",
        username: "@jamestaylor",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "Absolutely love this app! It's intuitive and feature-rich. Budget friendly too. The AI SDR Eva is a game-changer for my sales process."
    },
    {
        name: "Olivia Martinez",
        username: "@oliviamartinez",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "Great app with a lot of potential. It has already saved me a lot of time. Looking forward to future updates on Eva."
    },
    {
        name: "William Garcia",
        username: "@williamgarcia",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "This app is a game-changer for sales management. It's easy to use, extremely powerful and highly recommended!"
    },
    {
        name: "Mia Rodriguez",
        username: "@miarodriguez",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "I've tried several lead management tools, but this one stands out. It's simple, effective."
    },
    {
        name: "Henry Lee",
        username: "@henrylee",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "This app has transformed my workflow. Managing and analyzing leads is now a breeze. I can't imagine working without it."
    },
] as const;
