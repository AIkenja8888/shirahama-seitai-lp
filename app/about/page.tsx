import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { directorStory, images } from "@/app/_lib/site";

export const metadata = {
  title: "院長紹介・慢性痛を乗り越えたストーリー｜白浜整体院",
  description: "白浜整体院の院長紹介。スポーツ歴、10歳から続いた腰痛、ヘルニア手術を勧められた経験、整体に救われた体験とロゴに込めた想いを紹介します。",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        label="ABOUT"
        title="痛みを知っているから、諦めかけた人に寄り添える。"
        text="院長自身が長年の腰痛、しびれ、スポーツによる痛みに悩み、整体に救われた経験があります。その体験が、白浜整体院の施術と想いの原点です。"
      />

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.86fr_1.14fr]">
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.counseling} alt="白浜整体院のカウンセリング" className="aspect-[4/3] h-auto w-full rounded-xl object-cover brightness-95 contrast-105 md:aspect-square" />
          </div>
          <div>
            <SectionTitle label="MESSAGE" title="院長の想い" />
            <div className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-6 shadow-sm md:p-8">
              <p className="text-xl font-black leading-9 text-[#073b68]">日常生活に慢性痛がない素晴らしさを、もう一度感じてほしい。</p>
              <p className="mt-5 leading-9 text-slate-700">
                慢性的な痛みやしびれがなくなると、世界が明るくなったように感じました。今度は自分が皆様に寄り添い、つらい慢性痛をなくしたい。その想いで一人ひとりに向き合っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="STORY" title="整体が、最後の砦だった" text="元サイトの院長ストーリーを、時系列で読みやすく整理しました。" />
          <div className="grid gap-5 md:grid-cols-2">
            {directorStory.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black tracking-[0.2em] text-[#0b5f9e]">STORY {String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-xl font-black leading-8 text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <details className="mt-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <summary className="cursor-pointer text-lg font-black text-slate-950">院長ストーリーを本文で読む</summary>
            <div className="mt-5 space-y-4 leading-9 text-slate-700">
              <p>小学4年生から約30年間、野球、バレーボール、ボート、硬式テニスに打ち込んできました。その一方で、10歳から続く腰痛、膝・肩・肘・手首などの痛みに悩んできました。</p>
              <p>病院でも改善せず、痛みに耐えて生活していた中、30代前半に右脚のしびれが出て、腰椎椎間板ヘルニアの手術を勧められました。その窮地を救ってくれたのが整体でした。</p>
              <p>整体は自分にとって最後の砦のような存在でした。慢性的な痛みやしびれがなくなると、世界が明るくなったように感じました。今度は自分が皆様に寄り添い、つらい慢性痛をなくしたいと考えています。</p>
            </div>
          </details>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl rounded-2xl border border-blue-100 bg-white p-8 text-center shadow-sm md:p-10">
          <img src={images.logo} alt="白浜整体院 ロゴ" className="mx-auto h-24 w-auto object-contain" />
          <p className="mt-6 text-sm font-black tracking-[0.22em] text-[#0b5f9e]">LOGO STORY</p>
          <h2 className="mt-3 text-2xl font-black leading-relaxed text-slate-950 md:text-4xl">白浜のSをベースに、痛みからの最後の盾へ。</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-9 text-slate-700">
            ロゴは「白浜のS」をベースに、白浜整体院が痛みからの“最後の盾”になりたいという想いで作成されています。
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
