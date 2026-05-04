import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { courses, images } from "@/app/_lib/site";

export const metadata = {
  title: "料金・施術メニュー｜白浜整体院",
  description: "白浜整体院の整体基本コース、全身整体メンテナンスコース、体の歪み対策特別コースの料金と選び方を紹介します。",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <PageHero label="MENU" title="状態に合わせて選べる、分かりやすい料金。" text="短時間の基本コースから、複数の不調を見たい全身整体まで。初めての方にも選びやすいように、目安を整理しました。" image={images.treatment} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="PRICE" title="施術メニュー・料金" />
          <div className="grid gap-5 lg:grid-cols-3">
            {courses.map((course) => (
              <article key={course.name} className={`rounded-2xl border bg-white p-6 shadow-sm ${course.popular ? "border-[#0b5f9e]" : "border-blue-100"}`}>
                {course.popular ? <p className="mb-4 inline-flex rounded-full bg-[#ffc857] px-3 py-1 text-xs font-black text-[#073b68]">一番人気</p> : null}
                <h2 className="text-xl font-black leading-8 text-slate-950">{course.name}</h2>
                <p className="mt-4 text-sm font-bold text-slate-500">{course.time}</p>
                <p className="mt-1 text-3xl font-black text-[#0b5f9e]">{course.price}</p>
                <p className="mt-4 leading-8 text-slate-600">{course.text}</p>
                <p className="mt-4 rounded-2xl bg-blue-50 p-3 text-sm font-bold text-[#0b5f9e]">{course.coupon}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm leading-7 text-slate-500">頭部すっきりオプション 10分 税込1,000円／出張料金 施術料＋税込2,000円。詳しい空き状況・クーポンはホットペッパーをご確認ください。</p>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="GUIDE" title="コース選びの目安" />
          <div className="space-y-4">
            {[
              ["症状が1カ所中心", "整体 基本コースが目安です。まず気になる部位を確認し、短時間で整えたい方に向いています。"],
              ["肩こりと腰痛など2カ所程度", "全身整体 しっかりメンテナンスコースが目安です。関連する部位まで確認したい方に向いています。"],
              ["3カ所以上・長年続く不調", "体の歪み対策特別コースが目安です。全身のバランスと姿勢を丁寧に見たい方に向いています。"],
            ].map(([summary, detail]) => (
              <details key={summary} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{summary}</summary>
                <p className="mt-3 leading-8 text-slate-600">{detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
