export const metadata = {
  title: "八戸市の整体なら白浜整体院｜慢性痛・腰痛・肩こり・姿勢改善",
  description:
    "青森県八戸市松ヶ丘の白浜整体院。小波津式・気導術を中心に、神経・筋肉・関節へやさしくアプローチ。肩こり、腰痛、膝痛、猫背、しびれなど、つらい慢性痛でお悩みの方へ。",
};

const phoneNumber = "0178-79-0178";
const hotpepperUrl = "https://beauty.hotpepper.jp/kr/slnH000578566/";

const images = {
  logo: "/images/logo.jpg",
  hero: "/images/hero.jpg",
  owner: "/images/owner.jpg",
  room: "/images/room.jpg",
};

const worries = [
  "肩こり・首こりが何度も戻ってしまう",
  "腰痛や脚のしびれで仕事・家事がつらい",
  "猫背・巻き肩・反り腰など姿勢の歪みが気になる",
  "膝・股関節・肩など複数の場所に痛みがある",
  "病院や他の整体でも大きく変わらなかった",
  "年齢のせいだと諦めかけているが、本当は良くなりたい",
];

const strengths = [
  {
    title: "神経・筋肉・関節すべてにアプローチ",
    text: "骨格や関節は筋肉の異常で歪み、筋肉は神経が動かしています。当院では神経・筋肉・関節の全てにやさしい手技で働きかけます。",
  },
  {
    title: "小波津式・気導術を中心とした専門技術",
    text: "主に小波津式と気導術の手技を使用。状態に合わせて複数の技術を組み合わせ、根本原因を探しながら施術します。",
  },
  {
    title: "痛みからの最後の盾になる整体院",
    text: "ロゴに込めた想いは、痛みからの最後の盾。どこへ行っても変わらなかった方に、最後まで寄り添います。",
  },
];

const courses = [
  {
    name: "整体 基本コース",
    time: "40分",
    price: "税込 3,500円",
    text: "強い症状が近い場所にある方、違和感がある方、時間がない方におすすめです。",
    coupon: "新規クーポン目安：3,000円",
  },
  {
    name: "全身整体 しっかりメンテナンスコース",
    time: "70分",
    price: "税込 5,500円",
    text: "肩こりと腰痛、腰痛と膝痛など、気になる症状が2カ所程度ある方におすすめです。",
    coupon: "新規クーポン目安：4,950円",
    popular: true,
  },
  {
    name: "全身整体 体の歪み対策特別コース",
    time: "100分",
    price: "税込 8,500円",
    text: "頭痛・肩こり・腰痛・猫背など、3カ所以上の不調や長期間同じ症状がある方におすすめです。",
    coupon: "新規クーポン目安：7,800円",
  },
];

const symptoms = ["肩こり・首こり", "腰痛・ぎっくり腰", "膝痛・股関節の痛み", "頭痛・眼精疲労", "猫背・巻き肩・反り腰", "脚のしびれ・慢性痛"];

const trustItems = [
  ["口コミ評価", "5.00"],
  ["口コミ件数", "38件"],
  ["受付体制", "完全予約制"],
  ["通いやすさ", "駐車場あり"],
];

const faqs = [
  {
    q: "ボキボキする整体ですか？",
    a: "無理に強い痛みを出したり、骨をバキバキする施術はしません。やさしい手技でお体の状態に合わせて進めます。",
  },
  {
    q: "初回はどのくらい時間がかかりますか？",
    a: "コース時間に加えて、初回はカウンセリングやお体の確認に少しお時間をいただきます。余裕を持ってご来院ください。",
  },
  {
    q: "どのコースを選べばよいですか？",
    a: "迷う場合は、気になる症状の数やつらさに合わせてご相談ください。初回はホットペッパーのクーポンもご利用いただけます。",
  },
  {
    q: "駐車場はありますか？",
    a: "建物に向かって左側の屋根付き駐車場をご利用ください。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "白浜整体院",
  image: images.logo,
  telephone: phoneNumber,
  address: {
    "@type": "PostalAddress",
    postalCode: "039-2243",
    addressRegion: "青森県",
    addressLocality: "八戸市",
    streetAddress: "松ヶ丘11-8",
  },
  areaServed: "青森県八戸市",
  url: "https://www.shirahamaseitaiin.com/",
  priceRange: "¥¥",
  description: "青森県八戸市松ヶ丘の白浜整体院。慢性痛、腰痛、肩こり、膝痛、姿勢改善に対応。",
};

function CTAButtonGroup({ dark = false }: { dark?: boolean }) {
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

function SectionTitle({ label, title, text }: { label: string; title: string; text?: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-xs font-bold tracking-[0.22em] text-[#0b5f9e] sm:text-sm">{label}</p>
      <h2 className="text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl md:text-4xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}

export default function ShirahamaSeitaiRenewalLP() {
  return (
    <main className="min-h-screen bg-white pb-24 text-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img src={images.logo} alt="白浜整体院 ロゴ" className="h-14 w-auto shrink-0 object-contain sm:h-16" />
            <div className="min-w-0">
              <p className="truncate text-base font-black text-[#073b68] sm:text-lg">白浜整体院</p>
              <p className="truncate text-xs font-bold text-slate-500 sm:text-sm">八戸市松ヶ丘｜慢性痛・姿勢改善</p>
            </div>
          </a>
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <a href={`tel:${phoneNumber}`} className="rounded-full border border-[#0b5f9e] px-4 py-2 text-sm font-bold text-[#0b5f9e] transition hover:bg-blue-50">
              電話
            </a>
            <a href={hotpepperUrl} className="rounded-full bg-[#0b5f9e] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[#084f86]">
              ネット予約
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="overflow-hidden bg-gradient-to-b from-[#eef8ff] via-white to-white px-4 py-10 sm:px-6 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.03fr_0.97fr]">
          <div>
            <img src={images.logo} alt="白浜整体院 ロゴ" className="mb-5 h-10 w-auto object-contain sm:h-12" />
            <p className="mb-4 inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0b5f9e] shadow-sm">
              青森県八戸市松ヶ丘｜完全予約制・駐車場あり
            </p>
            <h1 className="text-3xl font-black leading-[1.45] text-slate-950 sm:text-4xl md:text-5xl">
              その痛み、
              <br />
              まだ諦めないでください。
              <br />
              <span className="text-[#0b5f9e]">慢性痛の最後の盾</span>として
              <br className="hidden md:block" />
              向き合います。
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              肩・腰・膝などのつらい慢性痛に。神経・筋肉・関節のすべてにやさしくアプローチし、どこに行っても変わらなかった方の改善を目指します。
            </p>
            <div className="mt-7">
              <CTAButtonGroup />
            </div>
          </div>
          <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.hero} alt="白浜整体院の施術イメージ" className="aspect-[4/3] w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f8fbff] px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4">
          {trustItems.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
              <p className="text-xs font-bold text-slate-500">{label}</p>
              <p className="mt-1 text-lg font-black text-[#0b5f9e] sm:text-2xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle label="WORRIES" title="このようなお悩みの方へ" text="まずはあなたの体の状態を丁寧に確認します。年齢のせいかもと諦める前にご相談ください。" />
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

      <section id="reason" className="bg-[#f5f9fd] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="REASON" title="白浜整体院が選ばれる理由" text="一時的にほぐすだけではなく、根本原因を探し、体が使いやすい状態へ整えることを大切にしています。" />
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#0b5f9e] text-lg font-black text-white">{index + 1}</div>
                <h3 className="text-xl font-black leading-8 text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="METHOD" title="やさしく、原因から整える施術" text="無理に強い痛みを出したり、骨をバキバキする施術は行いません。" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["01", "丁寧なカウンセリングと検査", "症状の出方、生活習慣、姿勢などを確認し、根本原因を探します。"],
              ["02", "神経のつながりを増やす", "固まった筋肉をゆるめ、神経・筋肉・関節が連動しやすい状態を目指します。"],
              ["03", "戻りにくい体づくり", "使えていない筋肉に動くスイッチを入れ、症状の戻りを防ぐことを目指します。"],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-black tracking-[0.2em] text-[#0b5f9e]">STEP {num}</p>
                <h3 className="mt-3 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-3 leading-8 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#073b68] px-4 py-16 text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="SYMPTOMS" title="症状別メニュー" text="肩こり・腰痛だけでなく、姿勢の歪みや長年の慢性痛にも対応します。" />
          <div className="grid gap-3 md:grid-cols-3">
            {symptoms.map((symptom) => (
              <div key={symptom} className="rounded-2xl border border-white/15 bg-white/10 p-5 font-bold shadow-sm backdrop-blur">
                {symptom}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle label="PRICE" title="施術メニュー・料金" text="料金は来院前に分かりやすく。初回はホットペッパーのクーポン利用で、より試しやすくなっています。" />
          <div className="grid gap-5 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.name} className={`relative rounded-2xl border bg-white p-6 shadow-sm ${course.popular ? "border-[#0b5f9e]" : "border-blue-100"}`}>
                {course.popular ? <p className="mb-4 inline-flex rounded-full bg-[#ffc857] px-3 py-1 text-xs font-black text-[#073b68]">一番人気</p> : null}
                <h3 className="text-xl font-black leading-8 text-slate-950">{course.name}</h3>
                <p className="mt-4 text-sm font-bold text-slate-500">{course.time}</p>
                <p className="mt-1 text-3xl font-black text-[#0b5f9e]">{course.price}</p>
                <p className="mt-4 leading-8 text-slate-600">{course.text}</p>
                <p className="mt-4 rounded-2xl bg-blue-50 p-3 text-sm font-bold text-[#0b5f9e]">{course.coupon}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="bg-[#f5f9fd] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-9 md:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.owner} alt="白浜整体院 院長 白浜聡" className="aspect-square w-full rounded-xl object-cover" />
          </div>
          <div>
            <p className="mb-2 text-sm font-bold tracking-[0.22em] text-[#0b5f9e]">OWNER MESSAGE</p>
            <h2 className="text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl md:text-4xl">院長の想い</h2>
            <div className="mt-6 space-y-5 text-base leading-9 text-slate-700">
              <p className="text-xl font-black leading-9 text-[#073b68]">ひとりでも多くの人から、つらい慢性痛をなくしたい。</p>
              <p>長年苦しんだ腰と肩の慢性痛を整体で救われた実体験から、日常生活に慢性痛がない素晴らしさを多くの方に届けたいと考えています。</p>
              <p>どこに行っても変わらない、病名がついてしまった、年齢を重ねた、でも諦めたくない方のお役に立ちたい。その想いで一人ひとりに向き合います。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle label="ACCESS" title="アクセス" />
            <div className="rounded-2xl border border-blue-100 bg-white p-6 leading-8 shadow-sm">
              <h3 className="text-xl font-black text-[#073b68]">白浜整体院</h3>
              <p className="mt-3">〒039-2243 青森県八戸市松ヶ丘11-8</p>
              <p>TEL：{phoneNumber}</p>
              <p>月・火・金・土・日：9時〜12時、14時〜19時</p>
              <p>水・木：定休日</p>
              <p className="mt-3 rounded-2xl bg-blue-50 p-3 text-sm font-bold text-[#0b5f9e]">陸上自衛隊近く／バス停「松ヶ丘」から徒歩1分／看板あり</p>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-2 shadow-sm">
            <img src={images.room} alt="白浜整体院の施術室" className="h-full min-h-80 w-full rounded-xl object-cover brightness-95 contrast-105" />
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle label="FAQ" title="よくある質問" />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-lg font-black text-slate-950">{faq.q}</summary>
                <p className="mt-3 leading-8 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#0b5f9e]/20 bg-[#073b68] p-8 text-center text-white shadow-sm md:p-12">
          <img src={images.logo} alt="白浜整体院 ロゴ" className="mx-auto mb-5 h-12 w-auto object-contain" />
          <p className="text-sm font-bold tracking-[0.22em] text-blue-100">RESERVATION</p>
          <h2 className="mt-3 text-2xl font-black leading-relaxed md:text-4xl">つらい慢性痛を、もう一度本気で整えたい方へ</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-50">電話でのご相談も、ホットペッパーからの24時間ネット予約も可能です。初めての方も安心してご予約ください。</p>
          <div className="mt-7 flex justify-center">
            <CTAButtonGroup dark />
          </div>
        </div>
      </section>

      <footer className="px-4 py-8 text-center text-sm text-slate-500">
        <p className="font-black text-[#073b68]">白浜整体院</p>
        <p className="mt-1">〒039-2243 青森県八戸市松ヶ丘11-8 ｜ TEL：{phoneNumber}</p>
        <p className="mt-2">© Shirahama Seitaiin</p>
      </footer>

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
    </main>
  );
}
