import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, ContentPanel, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Pets`,
  description: "Aura Per Click pets source-watch page with verified public signals, best-pet demand notes, and remaining data gaps.",
  alternates: { canonical: `${siteConfig.domain}/wiki/pets` }
};

export default function PetsWikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Pets", href: "/wiki/pets" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Pets", href: "/wiki/pets" }]} />
      <PageIntro
        eyebrow="Source watch"
        title="Aura Per Click Pets"
        description="Public surfaces now confirm that Aura Per Click has a pet system, but pet names, rarities, and best-pet rankings still need stronger verification before they are treated as final."
      />
      <AdsterraArticleTop />

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Verified now</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Public gamepass surfaces list pet-related upgrades such as extra pet storage and extra pet equip slots. That is enough to confirm a pet system exists.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Still unverified</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Pet names, pet rarities, best-pet tiers, egg names, hatch rates, and world-specific pet unlocks are not yet confirmed from official or creator-owned sources.</p>
        </ContentPanel>
        <ContentPanel>
          <h2 className="text-xl font-bold text-white">Demand signal</h2>
          <p className="mt-3 text-sm leading-6 text-white/66">Current YouTube and Google discovery still repeat best-pet phrasing, so this route exists to capture that intent without publishing invented rankings.</p>
        </ContentPanel>
      </section>

      <section className="mt-12">
        <SectionHeader
          eyebrow="Use safely"
          title="How to use this page"
          copy="Treat this as a claim-state watch page until public source quality improves."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Do use</span>
            <h3 className="mt-3 text-lg font-bold text-white">Pet-system confirmation</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Use this page to confirm that pet equip and storage systems exist before trusting third-party best-pet lists.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Do not use</span>
            <h3 className="mt-3 text-lg font-bold text-white">Made-up names or tiers</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Do not treat recycled pet names, copied rankings, or exploit-heavy egg pages as reliable until the game creators publish stronger evidence.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Watch next</span>
            <h3 className="mt-3 text-lg font-bold text-white">World 3 and codes</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Pet changes often move with update and code windows, so check those pages when a new public signal appears.</p>
          </article>
        </div>
      </section>

      <section className="mt-12">
        <SectionHeader eyebrow="Continue" title="Useful next pages" />
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Link className="content-card" href="/tier-list">Tier list</Link>
          <Link className="content-card" href="/updates/world-3">World 3 status</Link>
          <Link className="content-card" href="/codes">Codes</Link>
          <Link className="content-card" href="/sources">Sources</Link>
        </div>
      </section>

      <AdsterraArticleBottom />
    </main>
  );
}
