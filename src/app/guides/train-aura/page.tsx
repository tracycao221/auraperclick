import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `How to Train Aura in ${siteConfig.gameName}`,
  description: "Aura Per Click training guide for treadmills, clicking, and estimated Aura gain.",
  alternates: { canonical: `${siteConfig.domain}/guides/train-aura` }
};

export default function TrainAuraPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Train Aura", href: "/guides/train-aura" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Train Aura", href: "/guides/train-aura" }]} />
      <PageIntro eyebrow="Training" title="How to Train Aura" description="The Roblox listing says players train Aura on treadmills. This guide explains how to use that signal without inventing unverified rates." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel><h2 className="text-xl font-bold text-white">Find training</h2><p className="mt-3 text-sm leading-6 text-white/66">Use treadmill training when available, then compare your result with regular clicking.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Track rates</h2><p className="mt-3 text-sm leading-6 text-white/66">Write down your Aura gain before and after training to estimate your real multiplier.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Use rebirth</h2><p className="mt-3 text-sm leading-6 text-white/66">Rebirth multipliers can change whether training or clicking feels faster.</p></ContentPanel>
      </section>
      <section className="mt-12"><SectionHeader eyebrow="Related" title="Keep planning" /><div className="mt-6 grid gap-4 md:grid-cols-2"><Link className="content-card" href="/wiki/treadmills">Treadmills wiki</Link><Link className="content-card" href="/calculator">Estimate training gains</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
