import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Rebirth Guide`,
  description: "Aura Per Click rebirth wiki notes, multiplier planning, and verified source limits.",
  alternates: { canonical: `${siteConfig.domain}/wiki/rebirth` }
};

export default function RebirthWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Rebirth", href: "/wiki/rebirth" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Rebirth", href: "/wiki/rebirth" }]} />
      <PageIntro
        eyebrow="Wiki"
        title="Aura Per Click Rebirth"
        description="Rebirth is listed by the Roblox description as the main multiplier system. Use this page to plan around it without treating unverified numbers as final."
      />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Verified</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">The official Roblox description says rebirth gives massive multipliers.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Needs Check</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Exact rebirth costs, multiplier values, and reset rules still need in-game or creator-source verification.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Next Step</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Use the calculator in estimated mode, then adjust the multiplier to match what you see in-game.</p>
        </ContentPanel>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Planning" title="How to use rebirth information" copy="Treat rebirth as the main long-term speed lever, but avoid committing to an exact threshold until the game data is checked." />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link className="content-card" href="/calculator">Estimate Aura gain with your current multiplier</Link>
          <Link className="content-card" href="/guides/rebirth">Read the rebirth planning guide</Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
