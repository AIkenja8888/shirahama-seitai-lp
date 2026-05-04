"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { accessInfo, hotpepperUrl, images, navItems, phoneNumber } from "@/app/_lib/site";

export function Header() {
  const pathname = usePathname();

  const navClassName = (href: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname === href;
    const symptomEmphasis = href === "/symptoms" ? "font-black underline underline-offset-4" : "";

    return `shrink-0 rounded-full px-3 py-2 transition ${symptomEmphasis} ${
      isActive ? "bg-[#073b68] text-white hover:bg-[#0b5f9e]" : "bg-blue-50 text-[#073b68] hover:bg-blue-100"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src={images.logo} alt="白浜整体院 ロゴ" className="h-20 w-auto shrink-0 object-contain sm:h-24 lg:h-28" />
          <div className="min-w-0">
            <p className="truncate text-lg font-black text-[#073b68] sm:text-xl">白浜整体院</p>
            <p className="truncate text-xs font-bold text-slate-500 sm:text-sm">八戸市松ヶ丘｜慢性痛・姿勢改善</p>
            <p className="truncate text-[11px] font-bold text-[#0b5f9e] sm:text-xs">〜症状が重い方も一度お試しください〜</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 text-sm font-bold lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navClassName(item.href)}>
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
        <nav className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-xs font-bold">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navClassName(item.href)}>
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
      <div className="mx-auto mt-4 max-w-xl leading-7">
        <p className="font-bold text-[#073b68]">営業時間および定休日</p>
        <p>月・火・金・土・日 ：9時～12時、14時～19時</p>
        <p>（最終予約は19時開始です。時間外の場合はご相談ください）</p>
        <p>水・木：定休日</p>
      </div>
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
          <h1 className="text-3xl font-black leading-[1.45] text-[#073b68] sm:text-4xl md:text-5xl">{title}</h1>
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
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

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
        <button
          type="button"
          onClick={() => setIsMailOpen(true)}
          className="mt-4 inline-flex rounded-full border border-white/50 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
        >
          メールで相談する
        </button>
      </div>
      <MailConsultModal isOpen={isMailOpen} onClose={() => setIsMailOpen(false)} onPolicyOpen={() => setIsPolicyOpen(true)} />
      <PrivacyPolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </section>
  );
}

function MailConsultModal({ isOpen, onClose, onPolicyOpen }: { isOpen: boolean; onClose: () => void; onPolicyOpen: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-slate-950/55 px-4 py-8">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 text-left shadow-xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black tracking-[0.18em] text-[#0b5f9e]">MAIL</p>
            <h2 className="mt-2 text-2xl font-black text-[#073b68]">ご予約・お問い合わせ（メール）</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#073b68]">
            閉じる
          </button>
        </div>

        <form
          className="mt-6 space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            alert("送信内容を確認しました。実際のメール送信先が設定されていないため、送信機能の接続が必要です。");
          }}
        >
          {[
            ["お名前", "text", "name"],
            ["メールアドレス", "email", "email"],
            ["電話番号", "tel", "tel"],
          ].map(([label, type, name]) => (
            <label key={name} className="block">
              <span className="text-sm font-bold text-slate-700">{label}</span>
              <input name={name} type={type} className="mt-2 w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none focus:border-[#0b5f9e]" />
            </label>
          ))}

          <label className="block">
            <span className="text-sm font-bold text-slate-700">メッセージ</span>
            <textarea name="message" rows={5} className="mt-2 w-full rounded-2xl border border-blue-100 bg-[#f8fbff] px-4 py-3 text-slate-900 outline-none focus:border-[#0b5f9e]" />
          </label>

          <label className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-7 text-slate-700">
            <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0" />
            <span>
              このフォームの「送信」ボタンを押すことで、入力された個人情報が、お問い合わせ対応および個別のご案内の目的で利用されることに同意します。なお、この同意は、メール等の連絡によりいつでも撤回することができます。
              <br />
              <button type="button" onClick={onPolicyOpen} className="font-black text-[#0b5f9e] underline underline-offset-4">
                プライバシーポリシー
              </button>
              を読み同意します。
            </span>
          </label>

          <button type="submit" className="w-full rounded-full bg-[#0b5f9e] px-6 py-4 text-center font-bold text-white transition hover:bg-[#084f86]">
            送信
          </button>
        </form>
      </div>
    </div>
  );
}

function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-slate-950/60 px-4 py-8">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 text-left shadow-xl md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black tracking-[0.18em] text-[#0b5f9e]">PRIVACY POLICY</p>
            <h2 className="mt-2 text-2xl font-black text-[#073b68]">プライバシーポリシー</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-[#073b68]">
            閉じる
          </button>
        </div>
        <div className="mt-6 space-y-5 leading-8 text-slate-700">
          <section>
            <h3 className="font-black text-slate-950">個人情報の取得</h3>
            <p>白浜整体院は、お問い合わせやご予約対応に必要な範囲で、お名前、メールアドレス、電話番号、メッセージ内容などの個人情報を取得します。</p>
          </section>
          <section>
            <h3 className="font-black text-slate-950">利用目的</h3>
            <p>取得した個人情報は、お問い合わせへの回答、予約確認、個別のご案内、サービス改善のために利用します。目的外で利用する場合は、事前に同意を得ます。</p>
          </section>
          <section>
            <h3 className="font-black text-slate-950">第三者提供</h3>
            <p>法令に基づく場合を除き、ご本人の同意なく第三者へ個人情報を提供しません。</p>
          </section>
          <section>
            <h3 className="font-black text-slate-950">安全管理とお問い合わせ</h3>
            <p>個人情報は適切に管理し、漏えい、紛失、改ざんの防止に努めます。個人情報の確認、訂正、利用停止、同意撤回をご希望の場合は、メール等でご連絡ください。</p>
          </section>
        </div>
      </div>
    </div>
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
