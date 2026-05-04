import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { faqs, images } from "@/app/_lib/site";

export const metadata = {
  title: "よくある質問｜白浜整体院",
  description: "白浜整体院の施術、予約、初回時間、コース選び、支払い方法、駐車場についてのよくある質問をまとめました。",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero label="FAQ" title="初めての不安を、来院前に減らす。" text="施術内容、予約方法、支払い、駐車場など、よくある質問を見出しごとに整理しました。" image={images.payment} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle label="QUESTIONS" title="よくある質問" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{faq.q}</summary>
                <p className="mt-3 leading-8 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
