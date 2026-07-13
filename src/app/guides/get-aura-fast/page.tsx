import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `How to Get Aura Fast in ${siteConfig.gameName}`,
  description: "Get Aura fast in Aura Per Click with source-backed priorities and estimated planning.",
  alternates: { canonical: `${siteConfig.domain}/guides/get-aura-fast/` }
};

export default function GetAuraFastPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Get Aura Fast", href: "/guides/get-aura-fast" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Get Aura Fast", href: "/guides/get-aura-fast" }]} />
      <PageIntro eyebrow="Progression" title="How to Get Aura Fast" description="Use a simple loop: check codes, click consistently, train on treadmills, and use rebirth multipliers when your in-game threshold makes sense. Current YouTube discovery still repeats fastest-aura phrasing, so this route stays current." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-4">
        {["Codes", "Clicking", "Treadmills", "Rebirth"].map((item) => (
          <ContentPanel key={item}><h2 className="text-xl font-bold text-white">{item}</h2><p className="mt-3 text-sm leading-6 text-white/66">Keep this step in your routine, then compare its value with your current multiplier and session length.</p></ContentPanel>
        ))}
      </section>
      <section className="mt-12"><SectionHeader eyebrow="Estimate" title="Plan your next session" /><div className="mt-6 grid gap-4 md:grid-cols-2"><Link className="content-card" href="/calculator">Use the Aura calculator</Link><Link className="content-card" href="/wiki/treadmills">Read treadmill notes</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
