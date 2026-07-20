import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
  alternates: { canonical: `${siteConfig.domain}/sources/` }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description="Use this page to see where code, tier-list, update, Trello, Discord, wiki, and guide claims are checked. Official Roblox pages should win when sources disagree."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Official snapshot</span>
          <h2 className="mt-3 text-xl font-bold text-white">Checked July 20, 2026</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">The current official Roblox page still titles the game `+1 Aura Per Click`, still names treadmills and rebirth in the description, and still points to Aura Software as the creator. The official Roblox APIs showed 268,342 upvotes versus 2,856 downvotes, 6,498 live players, 51,898,181 visits, 3,391,639 favorites, and a latest game update timestamp of 2026-07-19T14:58:51Z during the July 20, 2026 refresh.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">YouTube demand</span>
          <h2 className="mt-3 text-xl font-bold text-white">World 3, rebirth, treadmill, fastest aura, pet watch</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Current YouTube discovery still repeats World 3, rebirth, treadmill, fastest-aura, and best-pet phrasing. Codes demand is still present too, but the visible video set is noisy with exploit and mixed-game uploads, so the site should keep the no-verified-code state until a creator-owned source appears.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Reject set</span>
          <h2 className="mt-3 text-xl font-bold text-white">Aura RNG, Re:Aura, exploit scripts</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Related-game Aura phrases and exploit-script queries are visible in search, but they belong to different games or unsafe intent clusters and should not be merged into this site.</p>
        </article>
      </section>
    </main>
  );
}
