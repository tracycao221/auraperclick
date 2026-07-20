import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} World 3 Update`,
  description: "Aura Per Click World 3 status, source notes, and what to verify before relying on world requirements.",
  alternates: { canonical: `${siteConfig.domain}/updates/world-3/` }
};

export default function World3UpdatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "World 3", href: "/updates/world-3" }]} />
      <Breadcrumbs items={[{ label: "World 3", href: "/updates/world-3" }]} />
      <PageIntro eyebrow="Update status" title="Aura Per Click World 3" description="World 3 remains a live search-demand and community-watch phrase, but the current official Roblox title is now simply +1 Aura Per Click and no longer carries a visible World 3 label. Exact unlocks, rewards, and world requirements still need checking before they are treated as final." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel><h2 className="text-xl font-bold text-white">Official now</h2><p className="mt-3 text-sm leading-6 text-white/66">The live official title is still `+1 Aura Per Click` rather than a stable visible World 3 label, and the latest official Roblox API update timestamp still sits on July 19, 2026 during the July 20 check.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Search signal</h2><p className="mt-3 text-sm leading-6 text-white/66">Current YouTube discovery still repeats World 3 phrasing, so the route stays live as a source-watch page instead of being removed.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Check next</h2><p className="mt-3 text-sm leading-6 text-white/66">Use sources, codes, and the pets watch page before trusting community-only claims about new unlocks, worlds, or rewards.</p></ContentPanel>
      </section>
      <section className="mt-12"><SectionHeader eyebrow="World links" title="Continue from here" /><div className="mt-6 grid gap-4 md:grid-cols-4"><Link className="content-card" href="/wiki/worlds">Worlds wiki</Link><Link className="content-card" href="/codes">Codes</Link><Link className="content-card" href="/sources">Sources</Link><Link className="content-card" href="/wiki/pets">Pets watch</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
