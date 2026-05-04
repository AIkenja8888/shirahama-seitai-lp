import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { accessInfo, images, phoneNumber } from "@/app/_lib/site";

export const metadata = {
  title: "アクセス・営業時間｜白浜整体院",
  description: "白浜整体院の住所、電話番号、営業時間、最終予約、時間外相談、定休日、駐車場、バス停からのアクセスを紹介します。",
};

export default function AccessPage() {
  return (
    <SiteShell>
      <PageHero label="ACCESS" title="八戸市松ヶ丘の、予約制整体院です。" text="陸上自衛隊近く、バス停「松ヶ丘」から徒歩1分。建物左側の屋根付き駐車場をご利用ください。" image={images.exterior} />

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="INFO" title="店舗情報" />
            <div className="rounded-2xl border border-blue-100 bg-white p-6 leading-8 shadow-sm md:p-8">
              <h2 className="text-xl font-black text-[#073b68]">{accessInfo.name}</h2>
              <dl className="mt-5 space-y-3 text-slate-700">
                {[
                  ["住所", `〒${accessInfo.postalCode} ${accessInfo.address}`],
                  ["電話", phoneNumber],
                  ["営業時間", accessInfo.hours],
                  ["最終予約", accessInfo.lastBooking],
                  ["時間外", accessInfo.afterHours],
                  ["定休日", accessInfo.closed],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-blue-50 p-4">
                    <dt className="text-sm font-black text-[#0b5f9e]">{label}</dt>
                    <dd className="mt-1 font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-2xl bg-[#073b68] p-4 text-sm font-bold leading-7 text-white">{accessInfo.guide}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.room} alt="白浜整体院の施術室" className="aspect-[4/3] h-auto w-full rounded-xl object-cover brightness-95 contrast-105 md:aspect-auto md:h-full md:min-h-80" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="GUIDE" title="来院前の確認" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["完全予約制", "来院前に電話またはネット予約で空き状況をご確認ください。最終予約は19時開始です。"],
              ["駐車場あり", "建物に向かって左側の屋根付き駐車場をご利用ください。"],
              ["時間外は相談可能", "通常時間外をご希望の場合は、まずは電話でご相談ください。"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-[#073b68]">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="MAP" title="Googleマップ" text="所在地を地図で確認できます。来院前の経路確認にご利用ください。" />
          <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <iframe
              title="白浜整体院 Googleマップ"
              src="https://www.google.com/maps?q=%E3%80%92039-2243%20%E9%9D%92%E6%A3%AE%E7%9C%8C%E5%85%AB%E6%88%B8%E5%B8%82%E6%9D%BE%E3%83%B6%E4%B8%9811-8%20%E7%99%BD%E6%B5%9C%E6%95%B4%E4%BD%93%E9%99%A2&output=embed"
              className="aspect-[4/3] w-full rounded-xl border-0 md:aspect-[16/9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
