import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Beginner Guide`,
  description: "Start Aura Per Click with codes, Aura gain, treadmill training, rebirth planning, and World 3 source notes.",
  alternates: { canonical: `${siteConfig.domain}/guides/beginner/` }
};

export default function BeginnerGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Beginner", href: "/guides/beginner" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Beginner", href: "/guides/beginner" }]} />
      <PageIntro eyebrow="Beginner guide" title="Aura Per Click Beginner Guide" description="Start with the parts that are verified: click for Aura, train on treadmills, plan around rebirth multipliers, and check codes before grinding." />
      <AdsterraArticleTop />
      <section className="mt-10 grid gap-4 md:grid-cols-3">
        {["Check codes before a long session", "Use treadmills as part of Aura training", "Treat rebirth as your long-term multiplier"].map((item) => (
          <ContentPanel key={item}><h2 className="text-xl font-bold text-white">{item}</h2><p className="mt-3 text-sm leading-6 text-white/66">This advice is based on the official Roblox description and will be refined as exact in-game data is verified.</p></ContentPanel>
        ))}
      </section>
      <section className="mt-12"><SectionHeader eyebrow="Next" title="Useful next pages" /><div className="mt-6 grid gap-4 md:grid-cols-4"><Link className="content-card" href="/codes">Codes</Link><Link className="content-card" href="/calculator">Calculator</Link><Link className="content-card" href="/guides/get-aura-fast">Get Aura fast</Link><Link className="content-card" href="/updates/world-3">World 3 status</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
