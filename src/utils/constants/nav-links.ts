import { DollarSignIcon, HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon, StarIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Eva - AI SDR",
                tagline: "Your AI Sales Development Representative.",
                href: "/features/eva-ai-sdr",
                icon: StarIcon,
            },
            {
                title: "Outreacho 1.0",
                tagline: "Automate your outreach with AI.",
                href: "/features/outreacho",
                icon: DollarSignIcon,
            },
            {
                title: "Lead Generation",
                tagline: "Generate high-ticket leads and track their performance.",
                href: "/features/lead-generation",
                icon: Link2Icon,
            },
            {
                title: "Privacy protection",
                tagline: "Secure your work with Vairox.",
                href: "/features/privacy-protection",
                icon: LockIcon,
            },
            {
                title: "Advanced analytics",
                tagline: "Gain insights into business and community.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            // {
            //     title: "Custom QR Codes",
            //     tagline: "Use QR codes to reach your audience.",
            //     href: "/features/qr-codes",
            //     icon: QrCodeIcon,
            // },
        ],
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Enterprise",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
