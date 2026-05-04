import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { images, symptomGroups, worries } from "@/app/_lib/site";

export const metadata = {
  title: "対応症状｜肩こり・腰痛・膝痛・姿勢改善｜白浜整体院",
  description: "白浜整体院で対応している肩こり、腰痛、膝痛、股関節痛、頭痛、猫背、しびれ、慢性痛などの症状を紹介します。",
};

export default function SymptomsPage() {
  return (
    <SiteShell>
      <PageHero label="SYMPTOMS" title="症状を、痛い場所だけで判断しません。" text="肩・腰・膝などの不調は、別の部位の使い方や姿勢から負担がかかっていることがあります。症状別に、確認するポイントを整理しました。" image={images.room} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="CHECK" title="よくあるお悩み" />
          <div className="grid gap-3 md:grid-cols-2">
            {worries.map((worry) => (
              <div key={worry} className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-5 text-base font-bold leading-7 text-slate-800 shadow-sm">
                <span className="mr-2 text-[#0b5f9e]">✓</span>
                {worry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="CATEGORY" title="症状別の見方" text="長文の説明は、症状カテゴリごとに要約と詳細へ分けています。" />
          <div className="grid gap-5 md:grid-cols-3">
            {symptomGroups.map((group) => (
              <article key={group.name} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-[#073b68]">{group.name}</h2>
                <p className="mt-3 leading-8 text-slate-600">{group.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-blue-50 px-3 py-2 text-sm font-bold text-[#0b5f9e]">
                      {item}
                    </span>
                  ))}
                </div>
                <details className="mt-5 rounded-2xl border border-blue-100 bg-[#f8fbff] p-4">
                  <summary className="cursor-pointer font-black text-slate-950">詳しく見る</summary>
                  <p className="mt-3 leading-8 text-slate-600">
                    症状が出ている場所だけでなく、姿勢、関節の動き、筋肉の働き、日常で負担がかかる動作を確認します。必要に応じて全身のバランスを見ながら施術します。
                  </p>
                </details>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
