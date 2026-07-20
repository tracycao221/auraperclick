import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with source-backed code status, World 3 source-watch notes, Trello and Discord checks, calculators, guides, and practical Roblox progression help.`,
  valueProposition: `Check ${gameConfig.name} code status, world-status notes, and progression priorities before you commit time to grinding in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-07-20",
  freshnessLabel: "Roblox official API, YouTube, Google, and source-status checks refreshed on July 20, 2026",
  keywords: [
    `${gameConfig.name}`,
    `+1 ${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} codes july 2026`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    `${gameConfig.name} world 3`,
    `${gameConfig.name} rebirth`,
    `${gameConfig.name} treadmill`,
    `${gameConfig.name} pets`,
    `${gameConfig.name} best pet`,
    `${gameConfig.name} eggs`,
    `${gameConfig.name} noob to pro`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Active Codes", href: "/codes", description: "Latest known rewards and redemption steps." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Best current picks and why they matter." },
        { label: "Calculator", href: "/calculator", description: "Decision helper for builds or progression." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Entity pages for items, units, maps, clans, or systems." },
        { label: "Guides", href: "/guides", description: "Beginner, farming, boss, and progression paths." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/about",
      items: [
        { label: "About Us", href: "/about", description: "Author profile, editorial process, and source standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status, advertising boundaries, and source precedence." },
        { label: "Contact Us", href: "/contact", description: "Corrections, privacy questions, and editorial contact path." },
        { label: "Privacy Policy", href: "/privacy", description: "Privacy, analytics, ads, and third-party cookie disclosure." },
        { label: "Terms of Service", href: "/terms", description: "Use rules, unofficial status, and third-party service terms." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Official title", value: "+1", note: "The official Roblox page still names the game +1 Aura Per Click on July 20, 2026." },
  { label: "Roblox update", value: "2026-07-19", note: "The official Roblox API still shows the latest game update timestamp on July 19, 2026." },
  { label: "Like ratio", value: "98.9%", note: "268,342 upvotes vs 2,856 downvotes from the Roblox votes endpoint on July 20, 2026." },
  { label: "Live players", value: "6.5k", note: "The official Roblox games API showed 6,498 live players on July 20, 2026." },
  { label: "Fresh route set", value: "16", note: "Codes, World 3, pets, guides, wiki, tools, and trust pages" }
];

export const activeCodes: GameCode[] = [
  { code: "NO VERIFIED CODE", reward: "No current code has been confirmed from an official or creator-owned source in the July 20, 2026 refresh, even though public code-demand queries are still active.", status: "Verified", addedDate: "Checked 2026-07-20" },
  { code: "WATCH WORLD 3 & PET SIGNALS", reward: "World 3 and best-pet phrasing still lead the public search surface, but the official Roblox title stays +1 Aura Per Click and no creator-owned code drop was verified in the July 20 refresh.", status: "Verified", addedDate: "Checked 2026-07-20" }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Code status first",
    tier: "S",
    role: "Freshness priority",
    reason: "The search demand is heavily codes-led, but no official code was verified on July 20, 2026, so the safest first action is to check live code status before long sessions or fresh World 3 or pet grinds.",
    confidence: "Source-backed",
    bestFor: ["returning players", "fast checks"],
    sourceNote: "Backed by Roblox metadata plus live code-query and code-site cross-checks with no official claim found.",
    teamNote: "Use this before deciding whether any temporary reward changes your next grind."
  },
  {
    name: "Treadmill training loop",
    tier: "A",
    role: "Official mechanic",
    reason: "Training on treadmills is part of the official Roblox description and still appears in current YouTube discovery, so it stays near the top of the progression stack.",
    confidence: "Source-backed",
    bestFor: ["training", "steady aura gain"],
    sourceNote: "Backed by the Roblox description and repeated treadmill phrasing in current YouTube searches.",
    teamNote: "Check World 3 and treadmill-specific guides before assuming new treadmill tiers or rates."
  },
  {
    name: "Rebirth timing",
    tier: "A",
    role: "Scaling",
    reason: "Rebirth is one of the few fully official mechanics named on the Roblox page, so it deserves a high planning priority even though exact thresholds still need gameplay verification.",
    confidence: "Source-backed",
    bestFor: ["mid game", "long sessions"],
    sourceNote: "Backed by the official Roblox description and rebirth-focused YouTube discovery phrases.",
    teamNote: "Use estimates carefully until rebirth thresholds and multiplier tables are verified."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical decision helper that can later become a full formula-based calculator."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranks the current best picks with notes for beginners, farming, and late-game use."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks active codes, expired-code conflicts, and redemption instructions."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "What to check first, how Aura grows, and where codes, rebirths, and worlds fit."
  },
  {
    title: "Get Aura fast",
    href: "/guides/get-aura-fast",
    eyebrow: "Guide",
    description: "A practical path for clicking, training, checking boosts, and planning your next session."
  },
  {
    title: "Rebirth guide",
    href: "/guides/rebirth",
    eyebrow: "Guide",
    description: "How to think about rebirth multipliers without trusting unverified threshold numbers."
  },
  {
    title: "Train Aura",
    href: "/guides/train-aura",
    eyebrow: "Guide",
    description: "How treadmill training fits beside clicking, World 3, and the estimated calculator."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Rebirth",
    href: "/wiki/rebirth",
    eyebrow: "Wiki",
    description: "What rebirth means in Aura Per Click, how multipliers affect planning, and what still needs checking."
  },
  {
    title: "Treadmills",
    href: "/wiki/treadmills",
    eyebrow: "Wiki",
    description: "How treadmill training fits into Aura gain and which details are still waiting on source verification."
  },
  {
    title: "Pets",
    href: "/wiki/pets",
    eyebrow: "Wiki",
    description: "Public gamepass surfaces confirm that pets exist, but pet names, tiers, and egg tables still need stronger source checks."
  },
  {
    title: "Worlds",
    href: "/wiki/worlds",
    eyebrow: "Wiki",
    description: "World 3 status, world progression notes, and the current limits of verified world data."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for the live title, public description bullets, creator, and Roblox availability."
  },
  {
    title: "Aura Software Roblox group",
    href: "https://www.roblox.com/communities/988942002/Aura-Software#!/about",
    eyebrow: "Creator",
    description: "Use the creator group as the nearest public official surface when Discord, Trello, or wiki links are not verified."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier priorities should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Split official mechanics such as World 3, rebirth, and treadmills into focused pages instead of burying them on the homepage."
  },
  {
    title: "Related-game clarity",
    body: "Keep Aura Per Click separate from other Roblox Aura terms such as Aura RNG or Re:Aura when search results start mixing them."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Noob to pro discovery",
    href: "https://www.youtube.com/results?search_query=%2B1+Aura+Per+Click+Noob+To+Pro",
    eyebrow: "YouTube",
    description: "Current YouTube discovery still shows beginner-style phrasing, but it stayed weaker than World 3, rebirth, pet-system, and fastest-aura guide signals in the July 20 check."
  },
  {
    title: "World 3 route",
    href: "https://www.youtube.com/results?search_query=%2B1+Aura+Per+Click+World+3",
    eyebrow: "YouTube",
    description: "World 3 remains a visible YouTube query cluster even though the current official Roblox title is now simply +1 Aura Per Click."
  },
  {
    title: "Rebirth and pet watch",
    href: "https://www.youtube.com/results?search_query=%2B1+Aura+Per+Click+best+pet",
    eyebrow: "YouTube",
    description: "Public YouTube titles still repeat rebirth and best-pet phrasing, which continues to support a dedicated pets source-watch page without inventing names or rankings."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, tier lists, calculators, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord status, calculator, beginner guide, wiki hub, and sources. Add entity pages after research confirms the game's real systems."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Start with official Roblox or creator-owned surfaces. If those stay silent, cross-check major code trackers and keep the page in a no-claim state until a real code is confirmed."
    },
    {
      q: "Why does this page say no verified codes?",
      a: "Because no current Aura Per Click code was confirmed from an official or creator-owned source during the July 20, 2026 refresh. It is safer to publish that clearly than to invent rewards."
    }
  ],
  tierList: [
    {
      q: "Why is the tier list about progression priorities?",
      a: "Because the official public evidence currently supports mechanics such as clicking, treadmills, rebirth, and World 3 more clearly than it supports named units, pets, or traits."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The bootstrap calculator is a starter decision helper. Replace it with verified formulas, tables, and game-specific inputs as research improves."
    }
  ]
};
