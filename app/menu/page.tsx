import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { courses, images, paymentMethods } from "@/app/_lib/site";

export const metadata = {
  title: "料金・施術メニュー・回数券｜白浜整体院",
  description: "白浜整体院の整体基本コース40分3,500円、全身整体70分5,500円、特別コース100分8,500円、オプション、出張料金、支払い方法、回数券を紹介します。",
};

export default function MenuPage() {
  return (
    <SiteShell>
      <PageHero label="MENU" title="状態に合わせて選べる、分かりやすい料金。" text="短時間の基本コースから、複数の不調を見たい全身整体まで。オプション、出張、回数券、支払い方法も来院前に確認できます。" image={images.treatment} />

      <section className="px-4 py-20 sm:px-6 md:py-28">
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
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="OPTION" title="追加料金・便利な利用方法" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["頭部すっきりオプション", "10分 税込1,000円", "精神的なストレス、頭部のコリ・むくみ、眼精疲労、食いしばりの筋肉疲労などの症状がある方におすすめです。上記1〜3の全コースに追加できます。"],
              ["出張料金", "施術料＋税込2,000円", "重度のギックリ腰など、ご来院が困難な場合に限り青森県八戸市内限定で出張します。営業時間外でも可能な限り対応しますので、ご遠慮なくご相談ください。"],
              ["回数券", "9回分の料金で10回券", "使用期限なし、家族間利用可能。継続して整えたい方に利用しやすい内容です。"],
            ].map(([title, price, text]) => (
              <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-[#073b68]">{title}</h2>
                <p className="mt-3 text-2xl font-black text-slate-950">{price}</p>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle label="PAYMENT" title="支払い方法" text="現金以外にも、各種キャッシュレス決済に対応しています。" />
            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method) => (
                <span key={method} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-[#073b68]">
                  {method}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.payment} alt="白浜整体院の支払い方法" className="aspect-[4/3] h-auto w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="GUIDE" title="コース選びの目安" />
          <div className="space-y-4">
            {[
              ["症状が近い場所にある・時間がない", "整体 基本コース 40分 税込3,500円が目安です。「肩と首」「腰と股関節」など症状が近い場所にある方、違和感がある方、強い症状があっても時間がない方に向いています。"],
              ["症状が2カ所程度・全身を整えたい", "全身整体 しっかりメンテナンスコース 70分 税込5,500円が目安です。「肩コリと腰痛」「腰痛と膝痛」「首痛と大転子の張り出し」などがある方に向いています。"],
              ["症状が3カ所以上・長期間続いている", "全身整体 体の歪み対策特別コース 100分 税込8,500円が目安です。「頭痛と肩コリと腰痛」「猫背と内臓の下垂と足首痛」など、複数の不調や長期間同じ症状がある方に向いています。"],
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
