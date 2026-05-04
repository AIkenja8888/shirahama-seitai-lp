import { PageHero, SectionTitle, SiteShell } from "@/app/_components/SiteChrome";
import { accessInfo, images, phoneNumber } from "@/app/_lib/site";

export const metadata = {
  title: "アクセス・営業時間｜白浜整体院",
  description: "白浜整体院の住所、電話番号、営業時間、定休日、駐車場、バス停からのアクセスを紹介します。青森県八戸市松ヶ丘11-8。",
};

export default function AccessPage() {
  return (
    <SiteShell>
      <PageHero label="ACCESS" title="八戸市松ヶ丘の、予約制整体院です。" text="陸上自衛隊近く、バス停「松ヶ丘」から徒歩1分。建物左側の屋根付き駐車場をご利用ください。" image={images.exterior} />

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle label="INFO" title="店舗情報" />
            <div className="rounded-2xl border border-blue-100 bg-white p-6 leading-8 shadow-sm">
              <h2 className="text-xl font-black text-[#073b68]">{accessInfo.name}</h2>
              <p className="mt-3">
                〒{accessInfo.postalCode} {accessInfo.address}
              </p>
              <p>TEL：{phoneNumber}</p>
              <p>{accessInfo.hours}</p>
              <p>{accessInfo.closed}</p>
              <p className="mt-3 rounded-2xl bg-blue-50 p-3 text-sm font-bold text-[#0b5f9e]">{accessInfo.guide}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.room} alt="白浜整体院の施術室" className="h-full min-h-80 w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="GUIDE" title="来院前の確認" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["完全予約制", "来院前に電話またはネット予約で空き状況をご確認ください。"],
              ["駐車場あり", "建物に向かって左側の屋根付き駐車場をご利用ください。"],
              ["バス停徒歩1分", "バス停「松ヶ丘」から徒歩1分で来院しやすい立地です。"],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-[#073b68]">{title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
