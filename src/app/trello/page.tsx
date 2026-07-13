import type { Metadata } from "next";
import Link from "next/link";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
  description: `Official-link status for ${siteConfig.gameName} Trello, Discord, wiki, Roblox updates, codes, and community sources.`,
  alternates: { canonical: `${siteConfig.domain}/trello/` },
  openGraph: {
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Check verified ${siteConfig.gameName} source status for Trello, Discord, wiki, Roblox updates, and codes.`,
    url: `${siteConfig.domain}/trello/`,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Trello, Discord & Wiki Status`,
    description: `Check verified ${siteConfig.gameName} source status for Trello, Discord, wiki, Roblox updates, and codes.`,
    images: ["/opengraph-image"]
  }
};

const statusRows = [
  {
    label: "Official Roblox page",
    href: gameConfig.dataSources.officialGameUrl,
    status: "Primary source",
    note: "Use this for the current title, description bullets, creator, Roblox availability, live counts, and the latest official update timestamp."
  },
  {
    label: "Aura Software Roblox group",
    href: "https://www.roblox.com/communities/988942002/Aura-Software#!/about",
    status: "Nearest public creator surface",
    note: "Use the creator group when a public Discord, Trello, or wiki link has not been verified yet. The official Roblox API still ties the live game to Aura Software group 988942002."
  },
  {
    label: "Discord",
    href: gameConfig.dataSources.discord ?? "#",
    status: gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? "Candidate source" : "No official invite verified",
    note: "Search demand exists, but this refresh did not verify a creator-owned public invite. Avoid reposting community-made servers as official."
  },
  {
    label: "Trello",
    href: gameConfig.dataSources.trello ?? "#",
    status: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? "Candidate source" : "No official board verified",
    note: "Many Roblox players search for a Trello board even when the game does not publish one. Keep the status honest and dated."
  },
  {
    label: "Wiki",
    href: "/wiki",
    status: "No official wiki verified",
    note: "Use the site wiki hub for source-backed entities, mechanics, rewards, and guide links until an official or creator-owned wiki appears."
  }
];

export default function TrelloStatusPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Trello, Discord & Wiki", href: "/trello" }]} />
      <Breadcrumbs items={[{ label: "Trello, Discord & Wiki", href: "/trello" }]} />
      <PageIntro
        eyebrow="Community status"
        title={`${siteConfig.gameName} Trello, Discord & Wiki Status`}
        description={`Use this page to check which ${siteConfig.gameName} community sources are official, which still need verification, and how to separate source-backed pages from rumor-heavy search demand.`}
      />
      <AdsterraArticleTop />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Official links"
          title="Source status"
          copy="This page was refreshed on July 13, 2026. Until creator-owned links are verified, uncertain links stay clearly labelled and non-clickable. Search demand still exists for Trello, Discord, and wiki terms even though no official public board or invite was confirmed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {statusRows.map((item) => {
            const isInternal = item.href.startsWith("/");
            const hasLink = item.href !== "#";
            const content = (
              <>
                <span className="mini-label">{item.status}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{item.note}</p>
              </>
            );

            if (!hasLink) {
              return (
                <article key={item.label} className="content-card">
                  {content}
                </article>
              );
            }

            return isInternal ? (
              <Link key={item.label} href={item.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <Link href="/codes" className="content-card">
          <span className="mini-label">Freshness</span>
          <h2 className="mt-3 text-xl font-bold text-white">Codes verification</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Check active and expired rewards against official update surfaces before publishing code claims.</p>
        </Link>
        <Link href="/tier-list" className="content-card">
          <span className="mini-label">Meta</span>
          <h2 className="mt-3 text-xl font-bold text-white">Tier-list sources</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Use Discord, YouTube, update notes, and wiki data as signals, then label ranking confidence clearly.</p>
        </Link>
        <Link href="/sources" className="content-card">
          <span className="mini-label">Editorial</span>
          <h2 className="mt-3 text-xl font-bold text-white">Source checklist</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Keep official, community, video, Reddit, and guide-site evidence separated so updates stay auditable.</p>
        </Link>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Disambiguation"
          title="Keep Aura Per Click separate from other Aura games"
          copy="Current search results also surface terms from games such as Aura RNG or Re:Aura. Only map phrases here when they clearly point to +1 Aura Per Click."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="content-card">
            <span className="mini-label">Reject</span>
            <h2 className="mt-3 text-xl font-bold text-white">Aura RNG terms</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Do not fold Aura RNG ranks, rolls, or aura-value language into Aura Per Click pages unless a future source shows direct overlap.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Reject</span>
            <h2 className="mt-3 text-xl font-bold text-white">Re:Aura terms</h2>
            <p className="mt-2 text-sm leading-6 text-white/65">Re:Aura is a different Roblox game. Treat it as a disambiguation case, not an expansion opportunity for this site.</p>
          </article>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
