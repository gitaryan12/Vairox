// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: 90,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: 490,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links"},
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

// export const PRICING_FEATURES = [
//     {
//         text: "Shorten links",
//         tooltip: "Create shortened links",
//     },
//     {
//         text: "Track clicks",
//         tooltip: "Track clicks on your links",
//     },
//     {
//         text: "See top countries",
//         tooltip: "See top countries where your links are clicked",
//     },
//     {
//         text: "Upto 10 tags",
//         tooltip: "Add upto 10 tags to your links",
//     },
//     {
//         text: "Community support",
//         tooltip: "Community support is available for free users",
//     },
//     {
//         text: "Priority support",
//         tooltip: "Get priority support from our team",
//     },
//     {
//         text: "AI powered suggestions",
//         tooltip: "Get AI powered suggestions for your links",
//     },
// ];

// export const WORKSPACE_LIMIT = 2;
// export const PLANS = [
//     {
//         name: "Free",
//         info: "For most individuals",
//         price: {
//             monthly: 0,
//             yearly: 0,
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 100 tags", limit: "100 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "1K clicks/month" },
//             { text: "Community support", tooltip: "Get answers your questions on discord" },
//             { text: "AI powered suggestions", tooltip: "Get up to 100 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Start for free",
//             href: "/auth/sign-up?plan=free",
//             variant: "default",
//         }
//     },
//     {
//         name: "Pro",
//         info: "For small businesses",
//         price: {
//             monthly: 9,
//             yearly: Math.round(9 * 12 * (1 - 0.12)),
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Up to 500 tags", limit: "500 tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "20K clicks/month" },
//             { text: "Export click data", tooltip: "Upto 1K links" },
//             { text: "Priority support", tooltip: "Get 24/7 chat support" },
//             { text: "AI powered suggestions", tooltip: "Get up to 500 AI powered suggestions" },
//         ],
//         btn: {
//             text: "Get started",
//             href: "/auth/sign-up?plan=pro",
//             variant: "purple",
//         }
//     },
//     {
//         name: "Business",
//         info: "For large organizations",
//         price: {
//             monthly: 49,
//             yearly: Math.round(49 * 12 * (1 - 0.12)),
//         },
//         features: [
//             { text: "Shorten links" },
//             { text: "Unlimited tags" },
//             { text: "Customizable branded links" },
//             { text: "Track clicks", tooltip: "Unlimited clicks" },
//             { text: "Export click data", tooltip: "Unlimited clicks" },
//             { text: "Dedicated manager", tooltip: "Get priority support from our team" },
//             { text: "AI powered suggestions", tooltip: "Get unlimited AI powered suggestions" },
//         ],
//         btn: {
//             text: "Contact team",
//             href: "/auth/sign-up?plan=business",
//             variant: "default",
//         }
//     }
// ];

export const PLANS = [
    {
      name: "Free",
      info: "For early users and solo founders",
      price: {
        monthly: 0,yearly: Math.round(0 * 12 * (1 - 0.12)),
      },
      features: [
        { text: "AI chat support", tooltip: "Respond to inquiries in real-time via web chat" },
        { text: "Limited outreach", tooltip: "Send up to 50 outreach messages per month" },
        { text: "Basic lead tracking", tooltip: "View lead name, email, and basic status" },
        { text: "Community support", tooltip: "Access support through our Discord community" },
      ],
      btn: {
        text: "Start for free",
        href: "/auth/sign-up?plan=free",
        variant: "default",
      },
    },
    {
      name: "Pro",
      info: "For startups & small teams",
      price: {
        monthly: 99,
        yearly: Math.round(99 * 12 * (1 - 0.12)), // e.g. 12% discount
      },
      features: [
        { text: "Multi-channel outreach", tooltip: "Email, SMS, and LinkedIn automation" },
        { text: "Meeting scheduling", tooltip: "Auto-book calls via Google Calendar" },
        { text: "CRM sync", tooltip: "HubSpot + Airtable integration" },
        { text: "Follow-up automation", tooltip: "Trigger personalized sequences automatically" },
        { text: "Priority support", tooltip: "Fast support via chat and email" },
      ],
      btn: {
        text: "Get started",
        href: "/auth/sign-up?plan=pro",
        variant: "purple",
      },
    },
    {
      name: "Business",
      info: "For scale-ups and enterprise",
      price: {
        monthly: 499,
        yearly: Math.round(499 * 12 * (1 - 0.15)),
      },
      features: [
        { text: "Custom AI workflows", tooltip: "Tailored outreach and objection handling flows" },
        { text: "Voice sales agent", tooltip: "Phone calls with AI voice (via Twilio + ElevenLabs)" },
        { text: "Full CRM sync", tooltip: "Salesforce + custom API support" },
        { text: "Dedicated account manager", tooltip: "White-glove onboarding and support" },
        { text: "Advanced analytics", tooltip: "Custom dashboard with lead insights" },
      ],
      btn: {
        text: "Contact sales",
        href: "/auth/sign-up?plan=business",
        variant: "default",
      },
    },
  ];
  

export const PRICING_FEATURES = [
    {
      text: "AI-powered lead outreach",
      tooltip: "Automatically send emails, SMS, and LinkedIn messages to new leads"
    },
    {
      text: "Real-time chat & voice conversations",
      tooltip: "Engage leads through chat and voice using natural-sounding AI"
    },
    {
      text: "Calendar scheduling",
      tooltip: "Book meetings automatically using Google Calendar integration"
    },
    {
      text: "CRM sync",
      tooltip: "Sync leads and conversations with CRMs like HubSpot or Salesforce"
    },
    {
      text: "Follow-up automation",
      tooltip: "Trigger multi-step follow-up sequences based on lead behavior"
    },
    {
      text: "Objection handling",
      tooltip: "Respond smartly to common sales objections with AI-trained responses"
    },
    {
      text: "Lead memory",
      tooltip: "Remember lead interactions using vector memory (Pinecone, Weaviate)"
    },
    {
      text: "Voice call support",
      tooltip: "Handle inbound and outbound sales calls with human-like voice AI"
    },
    {
      text: "Analytics dashboard",
      tooltip: "Track lead activity, conversion rates, and engagement insights"
    },
    {
      text: "Priority support",
      tooltip: "Get direct help and faster response times from the Vairox AI team"
    }
  ];

export const WORKSPACE_LIMIT = 2;