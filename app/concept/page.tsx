import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { images, steps, strengths } from "@/app/_lib/site";

export const metadata = {
  title: "理念・施術方針｜八戸市の白浜整体院",
  description: "白浜整体院の理念、ロゴに込めた想い、神経・筋肉・関節へやさしく働きかける施術方針を紹介します。",
};

export default function ConceptPage() {
  return (
    <SiteShell>
      <PageHero label="CONCEPT" title="痛みからの最後の盾として、原因から整える。" text="白浜整体院は、ただ揉む・伸ばすだけではなく、神経・筋肉・関節のつながりを見ながら、つらい慢性痛に向き合います。" image={images.towel} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="POLICY" title="施術方針" text="元サイトの長文を、初めて読む方にも伝わりやすいように3つの考え方へ整理しました。" />
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black leading-8 text-[#073b68]">{item.title}</h2>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="DETAIL" title="なぜ全身を見るのか" text="痛みがある場所だけを整えても、原因が別の場所にあると不調は戻りやすくなります。" />
          <div className="space-y-4">
            {[
              ["筋肉は神経が動かしている", "筋肉が固い、力が入りにくい、動きが悪い状態には、神経の伝達や体の使い方が関係します。"],
              ["関節の歪みは筋肉の影響を受ける", "関節だけを見ず、周囲の筋肉や日常動作も確認することで、負担が戻りにくい状態を目指します。"],
              ["強い刺激に頼らない", "無理な矯正や強すぎる刺激ではなく、体の状態に合わせてやさしく進めます。"],
            ].map(([summary, detail]) => (
              <details key={summary} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{summary}</summary>
                <p className="mt-3 leading-8 text-slate-600">{detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="FLOW" title="施術の流れ" />
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map(([num, title, text]) => (
              <article key={num} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black tracking-[0.2em] text-[#0b5f9e]">STEP {num}</p>
                <h2 className="mt-3 text-xl font-black text-slate-950">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
