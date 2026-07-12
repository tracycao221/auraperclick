import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Rebirth Guide`,
  description: "Aura Per Click rebirth guide with multiplier planning and data-gap warnings.",
  alternates: { canonical: `${siteConfig.domain}/guides/rebirth/` }
};

export default function RebirthGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Rebirth Guide", href: "/guides/rebirth" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Rebirth", href: "/guides/rebirth" }]} />
      <PageIntro eyebrow="Guide" title="Aura Per Click Rebirth Guide" description="Rebirth is the multiplier system mentioned on the Roblox page. Exact thresholds are still being checked, so plan with estimates." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel><h2 className="text-xl font-bold text-white">Before rebirth</h2><p className="mt-3 text-sm leading-6 text-white/66">Check your current Aura gain and whether a longer training session would reach the next threshold.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">After rebirth</h2><p className="mt-3 text-sm leading-6 text-white/66">Use the new multiplier to speed up future clicking and training.</p></ContentPanel>
        <ContentPanel><h2 className="text-xl font-bold text-white">Needs verification</h2><p className="mt-3 text-sm leading-6 text-white/66">Costs, reset rules, and exact multiplier tables should be checked in-game.</p></ContentPanel>
      </section>
      <section className="mt-12"><SectionHeader eyebrow="Tools" title="Use estimates carefully" /><div className="mt-6 grid gap-4 md:grid-cols-2"><Link className="content-card" href="/calculator">Open calculator</Link><Link className="content-card" href="/wiki/rebirth">Read rebirth wiki</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
