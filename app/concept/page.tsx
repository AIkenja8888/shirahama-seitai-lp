import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { images, infectionMeasures, steps, strengths } from "@/app/_lib/site";

export const metadata = {
  title: "理念・施術方針｜神経・筋肉・関節へやさしくアプローチ｜白浜整体院",
  description: "白浜整体院の施術方針。骨格や関節、筋肉、神経の関係、小波津式と気導術、施術の流れ、感染症対策を紹介します。",
};

export default function ConceptPage() {
  return (
    <SiteShell>
      <PageHero
        label="CONCEPT"
        title="神経・筋肉・関節を、やさしい手技で整える。"
        text="白浜整体院では、骨格や関節、筋肉、神経のつながりを見ながら、無理に強い痛みを出さない施術で根本原因を探します。"
        image={images.towel}
      />

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="POLICY" title="施術方針" text="元サイトの重要な考え方を、見出しと要約で読みやすく再配置しました。" />
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

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="DETAIL" title="体をどう見ているか" text="痛い場所だけでなく、体を動かしている仕組みから確認します。" />
          <div className="space-y-4">
            {[
              ["骨格や関節は筋肉の異常で歪む", "関節だけを無理に動かすのではなく、周囲の筋肉の状態や使い方を見ながら整えます。"],
              ["筋肉は神経が動かしている", "筋肉が固い、力が入りにくい、動きが悪い状態には、神経の伝達やつながりが関係しています。"],
              ["神経・筋肉・関節すべてにアプローチ", "神経、筋肉、関節の全てにやさしい手技で働きかけ、体が連動しやすい状態を目指します。"],
              ["強い痛みやバキバキに頼らない", "無理に強い痛みを出したり、骨をバキバキする施術はしません。状態に合わせてやさしく進めます。"],
              ["小波津式と気導術を主に使用", "小波津式と気導術の手技を主に使用し、必要に応じて複数の技術を組み合わせます。"],
            ].map(([summary, detail]) => (
              <details key={summary} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{summary}</summary>
                <p className="mt-3 leading-8 text-slate-600">{detail}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
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

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="HYGIENE" title="感染症対策と居心地のいい空間づくり" text="安心して過ごせるよう、清潔な院内環境づくりを大切にしています。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {infectionMeasures.map((item) => (
              <div key={item} className="rounded-2xl border border-blue-100 bg-white p-5 text-center font-bold leading-7 text-[#073b68] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
