import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { images } from "@/app/_lib/site";

export const metadata = {
  title: "院長紹介｜白浜整体院",
  description: "白浜整体院の院長紹介。慢性痛で悩んだ実体験と、ひとりでも多くの方からつらい慢性痛をなくしたいという想いを紹介します。",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero label="ABOUT" title="ひとりでも多くの人から、つらい慢性痛をなくしたい。" text="院長自身が長年の腰と肩の慢性痛を整体で救われた経験から、同じように悩む方の力になりたいと考えています。" image={images.owner} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-9 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.counseling} alt="白浜整体院のカウンセリング" className="aspect-square w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
          <div>
            <SectionTitle label="MESSAGE" title="院長の想い" />
            <div className="space-y-5 text-base leading-9 text-slate-700">
              <p className="text-xl font-black leading-9 text-[#073b68]">日常生活に慢性痛がない素晴らしさを、もう一度感じてほしい。</p>
              <p>若い頃に長年苦しんだ腰と肩の慢性痛を整体で救われたことが、今の施術の原点です。</p>
              <p>どこに行っても変わらない、年齢のせいだと諦めかけている、でも本当は良くなりたい。そんな方に寄り添う整体院でありたいと考えています。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="PROMISE" title="初めての方へ" text="不安を減らすため、施術前の説明と確認を大切にしています。" />
          <div className="grid gap-5 md:grid-cols-3">
            {["話を丁寧に聞く", "状態を確認して説明する", "無理な刺激をしない"].map((item) => (
              <div key={item} className="rounded-2xl border border-blue-100 bg-white p-6 text-center text-lg font-black text-[#073b68] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
