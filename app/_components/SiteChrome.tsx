import Link from "next/link";
import type { ReactNode } from "react";
import { accessInfo, hotpepperUrl, images, navItems, phoneNumber } from "@/app/_lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src={images.logo} alt="白浜整体院 ロゴ" className="h-20 w-auto shrink-0 object-contain sm:h-24 lg:h-28" />
          <div className="min-w-0">
            <p className="truncate text-lg font-black text-[#073b68] sm:text-xl">白浜整体院</p>
            <p className="truncate text-xs font-bold text-slate-500 sm:text-sm">八戸市松ヶ丘｜慢性痛・姿勢改善</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-bold text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#0b5f9e]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <a href={`tel:${phoneNumber}`} className="rounded-full border border-[#0b5f9e] px-4 py-2 text-sm font-bold text-[#0b5f9e] transition hover:bg-blue-50">
            電話
          </a>
          <a href={hotpepperUrl} className="rounded-full bg-[#0b5f9e] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#084f86]">
            ネット予約
          </a>
        </div>
      </div>
      <div className="border-t border-blue-50 bg-white px-4 py-2 lg:hidden">
        <nav className="mx-auto flex max-w-7xl flex-wrap gap-2 text-xs font-bold text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full bg-blue-50 px-3 py-2 text-[#073b68]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-blue-100 px-4 py-10 text-center text-sm text-slate-500">
      <img src={images.logo} alt="白浜整体院 ロゴ" className="mx-auto mb-3 h-12 w-auto object-contain" />
      <p className="font-black text-[#073b68]">{accessInfo.name}</p>
      <p className="mt-1">
        〒{accessInfo.postalCode} {accessInfo.address} ｜ TEL：{phoneNumber}
      </p>
      <p className="mt-2">© Shirahama Seitaiin</p>
    </footer>
  );
}

export function MobileFixedCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-100 bg-white p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href={`tel:${phoneNumber}`} className="rounded-full border border-[#0b5f9e] py-3 text-center text-sm font-bold text-[#0b5f9e]">
          電話で相談する
        </a>
        <a href={hotpepperUrl} className="rounded-full bg-[#0b5f9e] py-3 text-center text-sm font-bold text-white">
          空き状況を見て予約する
        </a>
      </div>
    </div>
  );
}

export function CTAButtonGroup({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={hotpepperUrl}
        className={`rounded-full px-6 py-4 text-center text-base font-bold shadow-sm transition ${
          dark ? "bg-white text-[#073b68] hover:bg-blue-50" : "bg-[#0b5f9e] text-white hover:bg-[#084f86]"
        }`}
      >
        空き状況を見て予約する
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className={`rounded-full px-6 py-4 text-center text-base font-bold shadow-sm transition ${
          dark ? "border border-white/50 text-white hover:bg-white/10" : "border border-[#0b5f9e] bg-white text-[#0b5f9e] hover:bg-blue-50"
        }`}
      >
        電話で相談する
      </a>
    </div>
  );
}

export function SectionTitle({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#0b5f9e] sm:text-sm">{label}</p>
      <h2 className="text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl md:text-4xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}

export function PageHero({ label, title, text, image }: { label: string; title: string; text: string; image?: string }) {
  return (
    <section className="bg-gradient-to-b from-[#dff1ff] via-[#f4fbff] to-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_0.86fr]">
        <div>
          <img src={images.logo} alt="白浜整体院 ロゴ" className="mb-6 h-20 w-auto object-contain sm:h-24" />
          <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0b5f9e] shadow-sm">{label}</p>
          <h1 className="text-3xl font-black leading-[1.45] text-slate-950 sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">{text}</p>
          <div className="mt-7">
            <CTAButtonGroup />
          </div>
        </div>
        {image ? (
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={image} alt="" className="aspect-[4/3] h-auto w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#0b5f9e]/20 bg-[#073b68] p-8 text-center text-white shadow-sm md:p-12">
        <img src={images.logo} alt="白浜整体院 ロゴ" className="mx-auto mb-5 h-20 w-auto object-contain" />
        <p className="text-sm font-bold tracking-[0.22em] text-blue-100">RESERVATION</p>
        <h2 className="mt-3 text-2xl font-black leading-relaxed md:text-4xl">つらい慢性痛を、もう一度本気で整えたい方へ</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-50">電話でのご相談も、ホットペッパーからの24時間ネット予約も可能です。初めての方も安心してご予約ください。</p>
        <div className="mt-7 flex justify-center">
          <CTAButtonGroup dark />
        </div>
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-white pb-24 text-slate-800">
      <Header />
      {children}
      <CTASection />
      <Footer />
      <MobileFixedCTA />
    </main>
  );
}
