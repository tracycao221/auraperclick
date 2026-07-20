import type { Metadata } from "next";
import Link from "next/link";
import { faqs, siteConfig, tierPreview } from "@/data/site";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Tier List`,
  description: `${siteConfig.gameName} progression priorities for codes, treadmills, rebirth, and World 3 planning.`,
  alternates: { canonical: `${siteConfig.domain}/tier-list/` },
  openGraph: {
    title: `${siteConfig.gameName} Tier List`,
    description: `${siteConfig.gameName} progression priorities for codes, treadmills, rebirth, and World 3 planning.`,
    url: `${siteConfig.domain}/tier-list/`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Tier List`,
    description: `${siteConfig.gameName} progression priorities for codes, treadmills, rebirth, and World 3 planning.`,
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <ItemListJsonLd />
      <FaqJsonLd items={faqs.tierList} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow="Tier list"
        title={`${siteConfig.gameName} Tier List`}
        description="Use this page as a progression-priority tier list until named entities, pets, or traits are verified from stronger public sources."
      />
      <AdsterraArticleTop />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Checked date</span>
          <h2 className="mt-3 text-xl font-bold text-white">{siteConfig.lastUpdated}</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Rankings should be refreshed after codes, updates, balance changes, or repeated community reports.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Power, cost, utility, and scaling</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Compare picks by clear speed, survival, unlock cost, support value, replacement risk, and late-game scaling.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official, creator, wiki, and community checks</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Treat official Roblox and creator-owned sources as strongest. Videos and community reports help with trends and use cases.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Rankings"
          title="Best current progression priorities"
          copy="Compare the public mechanics that are safe to plan around now, then expand into named entities only when stronger sources appear."
        />
        <div className="mt-6 grid gap-4">
          {tierPreview.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-4">
                <span className="tier-badge">{item.tier}</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.role}</p>
                </div>
                {item.confidence ? <span className="status-pill">{item.confidence}</span> : null}
              </div>
              {item.bestFor?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.bestFor.map((label) => (
                    <span key={label} className="mini-label">{label}</span>
                  ))}
                </div>
              ) : null}
              <p className="mt-4 max-w-4xl text-white/68">{item.reason}</p>
              {item.teamNote ? <p className="mt-3 text-sm text-white/60">Team combo: {item.teamNote}</p> : null}
              {item.sourceNote ? <p className="mt-2 text-xs uppercase tracking-wide text-white/45">Source check: {item.sourceNote}</p> : null}
            </article>
          ))}
        </div>
      </section>
      <AdsterraArticleMid />

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Rank low-risk first steps such as code checks, clicking, and early treadmill use.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Training ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Rank official training loops by repeatable Aura gain and how often YouTube discovery still references them.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Scaling ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Rank rebirth and World 3 planning once threshold numbers are verified from gameplay or creator-owned sources.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Source-status coverage"
          title="Best pet and egg searches need claim-state answers"
          copy="Public discovery still shows enough demand to answer these searches on-site, but the answer is still a status note: no stable pet list, egg table, or hatch-rate sheet was verified from official or creator-owned sources in the July 20 refresh."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="content-card">
            <span className="mini-label">Best pet</span>
            <h3 className="mt-3 text-lg font-bold text-white">Use the pets watch page, not a made-up ranking</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Recent YouTube and Google discovery show real demand for best-pet phrasing, and public gamepass surfaces now confirm that pets exist. Pet names and tier placements are still unverified, so use the dedicated pets watch page instead of trusting recycled ranking pages.</p>
          </article>
          <article className="content-card">
            <span className="mini-label">Eggs</span>
            <h3 className="mt-3 text-lg font-bold text-white">Egg intent exists, but the system is still unverified</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Egg phrasing appears in public search, yet the current source packet does not confirm an official egg loop, egg names, or drop tables. Treat egg pages and exploit-heavy results as unverified until stronger public evidence appears.</p>
          </article>
          <Link href="/wiki/pets" className="content-card">
            <span className="mini-label">Source watch</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read the pets evidence</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">Check the current public evidence for pet storage, pet equip slots, and the remaining gaps before trusting best-pet claims.</p>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expansion note"
          title="Add named entities only when sources support them"
          copy="If future public sources repeatedly surface pets, traits, or other named systems, split them into exact pages instead of forcing them into a generic tier list."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/guides" className="content-card">
            <span className="mini-label">Build guide</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check team roles</h3>
            <p className="mt-2 text-sm text-white/66">Use guides for carry, support, control, farming, and bossing roles after the full entity list is confirmed.</p>
          </Link>
          <Link href="/wiki" className="content-card">
            <span className="mini-label">Wiki</span>
            <h3 className="mt-3 text-lg font-bold text-white">Read entity details</h3>
            <p className="mt-2 text-sm text-white/66">Use wiki pages for unlock paths, abilities, traits, and source-backed notes on each ranked pick.</p>
          </Link>
          <Link href="/sources" className="content-card">
            <span className="mini-label">Sources</span>
            <h3 className="mt-3 text-lg font-bold text-white">Check evidence</h3>
            <p className="mt-2 text-sm text-white/66">Use source notes when creator videos, wiki pages, or community reports disagree.</p>
          </Link>
        </div>
      </section>
      <AdsterraArticleBottom />

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the calculator</Link>
        <Link href="/trello" className="button-secondary">Check source status</Link>
      </div>
    </main>
  );
}
