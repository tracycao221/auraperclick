import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} World 3 Update`,
  description: "Aura Per Click World 3 status, source notes, and what to verify before relying on world requirements.",
  alternates: { canonical: `${siteConfig.domain}/updates/world-3` }
};

export default function World3UpdatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "World 3", href: "/updates/world-3" }]} />
      <Breadcrumbs items={[{ label: "World 3", href: "/updates/world-3" }]} />
      <PageIntro eyebrow="Update status" title="Aura Per Click World 3" description="World 3 is verified from the current Roblox title. Exact unlocks, rewards, and world requirements still need checking before they are treated as final." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel><h2 className="text-xl font-bold text-white">Verified</h2><p className="mt-3 text-sm leading-6 text-white/66">The Roblox title includes a World 3 label.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Watch</h2><p className="mt-3 text-sm leading-6 text-white/66">World unlock costs, new treadmill rates, and any new codes tied to World 3.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Check next</h2><p className="mt-3 text-sm leading-6 text-white/66">Use sources and codes pages before trusting community-only claims.</p></ContentPanel>
      </section>
      <section className="mt-12"><SectionHeader eyebrow="World links" title="Continue from here" /><div className="mt-6 grid gap-4 md:grid-cols-3"><Link className="content-card" href="/wiki/worlds">Worlds wiki</Link><Link className="content-card" href="/codes">Codes</Link><Link className="content-card" href="/sources">Sources</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
