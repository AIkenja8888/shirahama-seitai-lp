import Link from "next/link";
import { CTAButtonGroup, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { courses, images, jsonLd, strengths, symptomGroups, trustItems, worries } from "@/app/_lib/site";

export const metadata = {
  title: "八戸市の整体なら白浜整体院｜慢性痛・腰痛・肩こり・姿勢改善",
  description:
    "青森県八戸市松ヶ丘の白浜整体院。小波津式・気導術を中心に、神経・筋肉・関節へやさしくアプローチ。肩こり、腰痛、膝痛、猫背、しびれなど、つらい慢性痛でお悩みの方へ。",
};

export default function Home() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="overflow-hidden bg-gradient-to-b from-[#eef8ff] via-white to-white px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.03fr_0.97fr]">
          <div>
            <img src={images.logo} alt="白浜整体院 ロゴ" className="mb-5 h-16 w-auto object-contain sm:h-20" />
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0b5f9e] shadow-sm">
              青森県八戸市松ヶ丘｜完全予約制・駐車場あり
            </p>
            <h1 className="text-3xl font-black leading-[1.45] text-slate-950 sm:text-4xl md:text-5xl">
              その痛み、
              <br />
              まだ諦めないでください。
              <br />
              <span className="text-[#0b5f9e]">慢性痛の最後の盾</span>として
              <br className="hidden md:block" />
              向き合います。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              肩・腰・膝などのつらい慢性痛に。神経・筋肉・関節のすべてにやさしくアプローチし、どこに行っても変わらなかった方の改善を目指します。
            </p>
            <div className="mt-7">
              <CTAButtonGroup />
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.hero} alt="白浜整体院の施術イメージ" className="aspect-[4/3] w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f8fbff] px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
          {trustItems.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-bold text-slate-500">{label}</p>
              <p className="mt-1 text-lg font-black text-[#0b5f9e] sm:text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="WORRIES" title="このようなお悩みの方へ" text="長く続く不調を、症状別にわかりやすく整理しました。気になる症状から詳しく確認できます。" />
          <div className="grid gap-3 md:grid-cols-2">
            {worries.map((worry) => (
              <div key={worry} className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 text-base font-bold leading-7 text-slate-800 shadow-sm">
                <span className="mr-2 text-[#0b5f9e]">✓</span>
                {worry}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/symptoms" className="inline-flex rounded-full bg-[#0b5f9e] px-6 py-3 font-bold text-white">
              症状別の詳しい説明を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f9fd] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="REASON" title="白浜整体院が選ばれる理由" text="元サイトの情報を、初めての方が読みやすいように要点と詳細へ分けて整理しています。" />
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#0b5f9e] text-lg font-black text-white">{index + 1}</div>
                <h3 className="text-xl font-black leading-8 text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/concept" className="inline-flex rounded-full border border-[#0b5f9e] px-6 py-3 font-bold text-[#0b5f9e]">
              理念と施術方針を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="SYMPTOMS" title="症状別メニュー" text="肩こり・腰痛だけでなく、姿勢の歪みや長年の慢性痛にも対応します。" />
          <div className="grid gap-5 md:grid-cols-3">
            {symptomGroups.map((group) => (
              <article key={group.name} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#073b68]">{group.name}</h3>
                <p className="mt-3 leading-8 text-slate-600">{group.summary}</p>
                <p className="mt-4 text-sm font-bold text-slate-500">{group.items.join(" / ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="MENU" title="施術メニュー・料金" text="料金は来院前に分かりやすく。詳しいコース選びは料金ページに整理しています。" />
          <div className="grid gap-5 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.name} className={`rounded-2xl border bg-white p-6 shadow-sm ${course.popular ? "border-[#0b5f9e]" : "border-blue-100"}`}>
                {course.popular ? <p className="mb-4 inline-flex rounded-full bg-[#ffc857] px-3 py-1 text-xs font-black text-[#073b68]">一番人気</p> : null}
                <h3 className="text-xl font-black leading-8 text-slate-950">{course.name}</h3>
                <p className="mt-4 text-sm font-bold text-slate-500">{course.time}</p>
                <p className="mt-1 text-3xl font-black text-[#0b5f9e]">{course.price}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/menu" className="inline-flex rounded-full bg-[#0b5f9e] px-6 py-3 font-bold text-white">
              料金とコース選びを見る
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
