import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Worlds`,
  description: "Aura Per Click worlds wiki with World 3 status and verified source notes.",
  alternates: { canonical: `${siteConfig.domain}/wiki/worlds/` }
};

export default function WorldsWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Worlds", href: "/wiki/worlds" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Worlds", href: "/wiki/worlds" }]} />
      <PageIntro
        eyebrow="Wiki"
        title="Aura Per Click Worlds"
        description="The current Roblox title includes World 3. This page keeps world information separate from guesses until unlock requirements are verified."
      />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">World 3</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Verified from the current Roblox title: Aura Per Click is using a World 3 update label.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">World Gates</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">World unlock costs, required Aura, and rebirth requirements still need checking.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Source Rule</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">World routes should update when the Roblox title, creator notes, or in-game data changes.</p>
        </ContentPanel>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="World help" title="Useful next pages" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link className="content-card" href="/updates/world-3">Check World 3 status</Link>
          <Link className="content-card" href="/guides/beginner">Plan your first progression path</Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
