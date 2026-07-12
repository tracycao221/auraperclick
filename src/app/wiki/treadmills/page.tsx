import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Treadmills`,
  description: "Aura Per Click treadmill wiki notes for training Aura and checking source confidence.",
  alternates: { canonical: `${siteConfig.domain}/wiki/treadmills/` }
};

export default function TreadmillsWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Treadmills", href: "/wiki/treadmills" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Treadmills", href: "/wiki/treadmills" }]} />
      <PageIntro
        eyebrow="Wiki"
        title="Aura Per Click Treadmills"
        description="Treadmills are the training system mentioned by the Roblox listing. This page tracks what is verified and what still needs checking."
      />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Verified</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">The Roblox description tells players to train Aura on treadmills.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Needs Check</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Training rate, treadmill tiers, unlocks, and any World 3 changes are not verified yet.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Best Use</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Use treadmill training as part of your Aura plan, then compare it with clicking and rebirth multipliers.</p>
        </ContentPanel>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Related help" title="Plan training with the rest of your run" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link className="content-card" href="/guides/train-aura">Read the training guide</Link>
          <Link className="content-card" href="/calculator">Estimate treadmill impact</Link>
        </div>
      </section>
      <AdsterraArticleBottom />
    </main>
  );
}
