import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ebe0fc45-fc3b-4837-9232-70a2386267ac/files/34f95e67-11ca-4f7a-b40f-cac945acd327.jpg";
const CERAMIC_IMG = "https://cdn.poehali.dev/projects/ebe0fc45-fc3b-4837-9232-70a2386267ac/files/88701d4a-38a2-4e14-8948-646d49456f47.jpg";
const BEFORE_AFTER_IMG = "https://cdn.poehali.dev/projects/ebe0fc45-fc3b-4837-9232-70a2386267ac/files/478d8866-577d-49ef-8aa7-ff7dfc688598.jpg";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal();
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const services = [
  {
    icon: "Sparkles",
    title: "Нанокерамическое покрытие",
    desc: "Профессиональная защита лакокрасочного покрытия. Длительный блеск до 5 лет, гидрофобный эффект, защита от царапин и UV-лучей.",
    price: "от 15 000 ₽",
    badge: "ХИТ",
    color: "#C0152A",
  },
  {
    icon: "Zap",
    title: "Полировка кузова",
    desc: "Устранение царапин, потёртостей и голограмм. Восстановление зеркального блеска лакокрасочного покрытия.",
    price: "от 5 000 ₽",
    badge: null,
    color: "#FFD600",
  },
  {
    icon: "Shield",
    title: "Плёнка ППФ",
    desc: "Полиуретановая защитная плёнка от сколов и механических повреждений. Без снятия дверных карт.",
    price: "от 2 000 ₽",
    badge: null,
    color: "#00D4FF",
  },
  {
    icon: "Sun",
    title: "Тонировка стёкол",
    desc: "Тонировка любых стёкол без снятия дверных карт. Защита от UV, снижение нагрева салона.",
    price: "от 2 000 ₽",
    badge: null,
    color: "#A855F7",
  },
  {
    icon: "Droplets",
    title: "Детейлинг самообслуживания",
    desc: "Открытый доступ к профессиональному оборудованию, химии и полировальным машинкам. 16 ₽/мин.",
    price: "от 1 000 ₽",
    badge: "НОВИНКА",
    color: "#22C55E",
  },
  {
    icon: "Car",
    title: "Комплексная химчистка",
    desc: "Глубокая очистка салона: сидения, ковры, потолок, пластик. Устранение запахов и загрязнений.",
    price: "от 3 000 ₽",
    badge: null,
    color: "#F59E0B",
  },
];

const portfolio = [
  { title: "BMW 5 Series", desc: "Нанокерамика + полировка", img: CERAMIC_IMG },
  { title: "Mercedes GLE", desc: "ППФ полный капот + крылья", img: HERO_IMG },
  { title: "Toyota Camry", desc: "Полная полировка кузова", img: BEFORE_AFTER_IMG },
  { title: "Audi Q7", desc: "Комплекс: керамика + тонировка", img: CERAMIC_IMG },
  { title: "Porsche Cayenne", desc: "Детейлинг + защитное покрытие", img: HERO_IMG },
  { title: "Kia Sportage", desc: "Полировка + химчистка салона", img: BEFORE_AFTER_IMG },
];

const reviews = [
  {
    name: "Александр К.",
    car: "BMW X5",
    text: "Сдал машину под нанокерамику — результат превзошёл все ожидания! Краска стала зеркальной, вода скатывается шариками. Профессионализм на высшем уровне.",
    stars: 5,
    date: "Февраль 2026",
  },
  {
    name: "Марина В.",
    car: "Toyota RAV4",
    text: "Делала тонировку — сделали быстро и качественно. Очень понравилось, что не нужно снимать карты. Рекомендую студию всем знакомым!",
    stars: 5,
    date: "Январь 2026",
  },
  {
    name: "Дмитрий Р.",
    car: "Kia Sorento",
    text: "Воспользовался услугой самообслуживания — доступ к профессиональной химии и оборудованию. Удобно и бюджетно. Буду приезжать регулярно.",
    stars: 5,
    date: "Март 2026",
  },
  {
    name: "Сергей П.",
    car: "Mercedes E-Class",
    text: "Отдал на комплекс: полировка + керамика. Работа заняла 2 дня, зато результат — машина выглядит как из салона. Спасибо мастерам APT!",
    stars: 5,
    date: "Февраль 2026",
  },
];

const blogPosts = [
  {
    tag: "СОВЕТЫ",
    title: "Нанокерамика vs. полироль: что выбрать в 2026?",
    desc: "Разбираем ключевые отличия, срок защиты и стоимость каждого варианта.",
    date: "10 марта 2026",
    readTime: "5 мин",
    color: "#C0152A",
  },
  {
    tag: "ТРЕНДЫ",
    title: "ППФ-плёнка: модный тренд или реальная защита?",
    desc: "Всё о полиуретановой плёнке — когда она нужна и кому подходит.",
    date: "5 марта 2026",
    readTime: "4 мин",
    color: "#00D4FF",
  },
  {
    tag: "УХОД",
    title: "Как сохранить блеск керамики на год вперёд",
    desc: "Практические советы по уходу после нанесения керамического покрытия.",
    date: "28 февраля 2026",
    readTime: "3 мин",
    color: "#FFD600",
  },
];

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О студии", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", date: "" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#C0152A]/20" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-orange rounded flex items-center justify-center">
              <span className="font-oswald font-bold text-xs text-black">APT</span>
            </div>
            <span className="font-oswald text-xl font-bold tracking-wider text-white">
              APT <span className="text-gradient-orange">STUDIO</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link font-golos text-sm text-white/70 hover:text-white transition-colors tracking-wide uppercase">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#booking" className="hidden lg:flex bg-gradient-orange text-black font-oswald font-bold px-6 py-2.5 text-sm tracking-widest uppercase hover:scale-105 transition-transform">
            ЗАПИСАТЬСЯ
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#0D0D0D] border-t border-[#C0152A]/20 px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-golos text-white/80 hover:text-[#C0152A] transition-colors py-1 uppercase tracking-wide text-sm">
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMenuOpen(false)} className="bg-gradient-orange text-black font-oswald font-bold px-6 py-3 text-center tracking-widest uppercase mt-2">
              ЗАПИСАТЬСЯ
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="APT Studio" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
          <div className="absolute inset-0 stripe-bg" />
        </div>

        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C0152A]/10 animate-spin-slow hidden xl:block" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#C0152A]/20 hidden xl:block" style={{ animation: "spin-slow 12s linear infinite reverse" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#C0152A]/10 border border-[#C0152A]/30 px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#C0152A] animate-pulse" />
              <span className="font-golos text-sm text-[#C0152A] tracking-widest uppercase">Воронеж · Рейтинг 5.0 ★ · 97+ отзывов</span>
            </div>

            <h1 className="font-oswald text-5xl sm:text-7xl lg:text-8xl font-bold leading-none mb-4 animate-slide-left" style={{ animationDelay: "0.1s" }}>
              <span className="text-white">ЗАЩИТА</span>
              <br />
              <span className="text-gradient-orange">КОТОРАЯ</span>
              <br />
              <span className="text-white">ДЛИТСЯ ГОДАМИ</span>
            </h1>

            <p className="font-golos text-lg text-white/60 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Профессиональный детейлинг, нанокерамика, PPF и тонировка. APT Studio — ваш автомобиль в идеальном состоянии.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <a href="#booking" className="bg-gradient-orange text-black font-oswald font-bold px-8 py-4 text-lg tracking-widest uppercase hover:scale-105 transition-transform glow-orange inline-flex items-center justify-center gap-2">
                ЗАПИСАТЬСЯ <Icon name="ArrowRight" size={20} />
              </a>
              <a href="#services" className="border border-[#C0152A]/40 text-white font-oswald font-bold px-8 py-4 text-lg tracking-widest uppercase hover:border-[#C0152A] hover:bg-[#C0152A]/10 transition-all inline-flex items-center justify-center gap-2">
                УСЛУГИ <Icon name="ChevronDown" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#111]/80 backdrop-blur-md border-t border-[#C0152A]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: 500, suf: "+", label: "АВТО В РАБОТЕ" },
              { val: 5, suf: ".0★", label: "РЕЙТИНГ" },
              { val: 5, suf: " ЛЕТ", label: "ОПЫТ" },
              { val: 97, suf: "+", label: "ОТЗЫВОВ" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-oswald text-2xl md:text-3xl font-bold text-gradient-orange">
                  <AnimatedCounter target={s.val} suffix={s.suf} />
                </div>
                <div className="font-golos text-xs text-white/40 tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-reveal mb-16 text-center">
            <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Что мы делаем</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">
              НАШИ <span className="text-gradient-orange">УСЛУГИ</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-orange mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="section-reveal card-hover bg-[#111] border border-[#222] p-6 relative overflow-hidden group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-gradient-orange text-black font-oswald font-bold text-xs px-2.5 py-1 tracking-widest">
                    {s.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded flex items-center justify-center mb-4" style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}30` }}>
                  <Icon name={s.icon} size={22} style={{ color: s.color }} />
                </div>
                <h3 className="font-oswald text-xl font-bold mb-2 text-white group-hover:text-[#C0152A] transition-colors">
                  {s.title}
                </h3>
                <p className="font-golos text-sm text-white/50 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#222]">
                  <span className="font-oswald text-lg font-bold" style={{ color: s.color }}>{s.price}</span>
                  <a href="#booking" className="font-oswald text-xs tracking-widest text-white/40 hover:text-[#C0152A] transition-colors uppercase flex items-center gap-1">
                    ЗАПИСАТЬСЯ <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: s.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
          <img src={CERAMIC_IMG} alt="О студии" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="section-reveal">
              <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Кто мы</span>
              <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2 mb-6">
                О <span className="text-gradient-orange">СТУДИИ</span>
              </h2>
              <p className="font-golos text-white/60 leading-relaxed mb-4">
                APT Studio — детейлинг-студия в Воронеже, специализирующаяся на профессиональной защите автомобилей. Мы работаем с лучшими материалами и технологиями рынка.
              </p>
              <p className="font-golos text-white/60 leading-relaxed mb-8">
                Наше главное направление — <span className="text-[#C0152A] font-medium">нанокерамическое покрытие</span>, обеспечивающее долгосрочную защиту лака и неповторимый блеск. Каждый автомобиль получает индивидуальный подход.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Award", text: "Сертифицированные мастера" },
                  { icon: "Clock", text: "Ответ за 30 минут" },
                  { icon: "CheckCircle", text: "Гарантия на работы" },
                  { icon: "Star", text: "Рейтинг 4.8 на Avito" },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#C0152A]/10 rounded flex items-center justify-center shrink-0">
                      <Icon name={f.icon} size={16} className="text-[#C0152A]" />
                    </div>
                    <span className="font-golos text-sm text-white/70">{f.text}</span>
                  </div>
                ))}
              </div>

              <a href="#booking" className="inline-flex items-center gap-2 bg-gradient-orange text-black font-oswald font-bold px-8 py-3 tracking-widest uppercase hover:scale-105 transition-transform">
                ЗАПИСАТЬСЯ <Icon name="ArrowRight" size={18} />
              </a>
            </div>

            <div className="section-reveal relative hidden lg:block">
              <div className="relative">
                <img src={CERAMIC_IMG} alt="Керамика" className="w-full rounded-sm" />
                <div className="absolute -bottom-6 -left-6 bg-[#111] border border-[#C0152A]/30 p-6">
                  <div className="font-oswald text-4xl font-bold text-gradient-orange">4.8★</div>
                  <div className="font-golos text-sm text-white/50 mt-1">Средний рейтинг</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#C0152A] p-4">
                  <div className="font-oswald text-2xl font-bold text-black">97+</div>
                  <div className="font-golos text-xs text-black/70">ОТЗЫВОВ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-reveal mb-16 text-center">
            <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Наши работы</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">ПОРТФОЛИО</h2>
            <div className="w-16 h-1 bg-gradient-orange mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p, i) => (
              <div
                key={i}
                className="section-reveal relative overflow-hidden group cursor-pointer"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-oswald text-lg font-bold text-white">{p.title}</h3>
                  <p className="font-golos text-sm text-[#C0152A]">{p.desc}</p>
                </div>
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/80 px-3 py-1">
                  <span className="font-oswald text-xs text-white/70 tracking-wider">{p.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-reveal mb-16 text-center">
            <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Что говорят клиенты</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">ОТЗЫВЫ</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1,2,3,4,5].map(i => (
                <Icon key={i} name="Star" size={20} className="text-[#FFD600]" />
              ))}
              <span className="font-oswald text-xl font-bold text-white ml-2">5.0</span>
              <span className="font-golos text-white/40 ml-1">/ 97 отзывов</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="section-reveal bg-[#111] border border-[#222] p-6 relative group hover:border-[#C0152A]/30 transition-colors card-hover"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-orange rounded-full flex items-center justify-center font-oswald font-bold text-black">
                      {r.name[0]}
                    </div>
                    <div>
                      <div className="font-oswald font-bold text-white">{r.name}</div>
                      <div className="font-golos text-xs text-white/40">{r.car}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(r.stars)].map((_, j) => (
                      <Icon key={j} name="Star" size={14} className="text-[#FFD600]" />
                    ))}
                  </div>
                </div>
                <p className="font-golos text-white/60 leading-relaxed text-sm mb-3">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-golos text-xs text-white/30">{r.date}</span>
                  <div className="flex items-center gap-1 text-[#C0152A]/40">
                    <Icon name="ThumbsUp" size={12} />
                    <span className="font-golos text-xs">Полезно</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#C0152A] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 stripe-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[#C0152A]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="section-reveal text-center mb-12">
            <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Онлайн-запись</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">ЗАПИСАТЬСЯ</h2>
            <p className="font-golos text-white/50 mt-3">Ответим в течение 30 минут</p>
          </div>

          <div className="section-reveal bg-[#111] border border-[#222] p-8">
            {formSent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-[#22C55E]" />
                </div>
                <h3 className="font-oswald text-2xl font-bold text-white mb-2">ЗАЯВКА ОТПРАВЛЕНА!</h3>
                <p className="font-golos text-white/50">Мы свяжемся с вами в течение 30 минут</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-1.5">Ваше имя</label>
                    <input
                      required
                      type="text"
                      placeholder="Александр"
                      className="w-full bg-[#0A0A0A] border border-[#222] focus:border-[#C0152A] text-white font-golos px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-1.5">Телефон</label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (900) 000-00-00"
                      className="w-full bg-[#0A0A0A] border border-[#222] focus:border-[#C0152A] text-white font-golos px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-1.5">Услуга</label>
                  <select
                    className="w-full bg-[#0A0A0A] border border-[#222] focus:border-[#C0152A] text-white font-golos px-4 py-3 outline-none transition-colors"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" className="bg-[#111]">Выберите услугу</option>
                    {services.map(s => (
                      <option key={s.title} value={s.title} className="bg-[#111]">{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-widest text-white/40 uppercase block mb-1.5">Удобная дата</label>
                  <input
                    type="date"
                    className="w-full bg-[#0A0A0A] border border-[#222] focus:border-[#C0152A] text-white font-golos px-4 py-3 outline-none transition-colors"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-orange text-black font-oswald font-bold py-4 text-lg tracking-widest uppercase hover:scale-[1.02] transition-transform mt-2"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-reveal mb-16 flex items-end justify-between">
            <div>
              <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Полезное</span>
              <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">БЛОГ</h2>
            </div>
            <a href="#" className="hidden sm:flex items-center gap-2 font-oswald text-sm text-white/40 hover:text-[#C0152A] transition-colors uppercase tracking-wider">
              Все статьи <Icon name="ArrowRight" size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <div
                key={i}
                className="section-reveal bg-[#111] border border-[#222] p-6 group hover:border-[#C0152A]/30 transition-all card-hover cursor-pointer"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-oswald text-xs tracking-widest px-2.5 py-1 font-bold" style={{ color: p.color, backgroundColor: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-1 text-white/30">
                    <Icon name="Clock" size={12} />
                    <span className="font-golos text-xs">{p.readTime}</span>
                  </div>
                </div>
                <h3 className="font-oswald text-lg font-bold text-white mb-2 group-hover:text-[#C0152A] transition-colors leading-tight">
                  {p.title}
                </h3>
                <p className="font-golos text-sm text-white/40 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                  <span className="font-golos text-xs text-white/30">{p.date}</span>
                  <span className="font-oswald text-xs text-[#C0152A] tracking-wider flex items-center gap-1">
                    ЧИТАТЬ <Icon name="ArrowRight" size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-reveal mb-16 text-center">
            <span className="font-oswald text-sm tracking-[0.3em] text-[#C0152A] uppercase">Как нас найти</span>
            <h2 className="font-oswald text-4xl md:text-6xl font-bold mt-2">КОНТАКТЫ</h2>
            <div className="w-16 h-1 bg-gradient-orange mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="section-reveal space-y-4">
              {[
                { icon: "MapPin", label: "АДРЕС", value: "ул. Митрофановская, 2", sub: "г. Воронеж" },
                { icon: "Phone", label: "ТЕЛЕФОН", value: "+7 (950) 753-83-53", sub: "Ответим за 30 минут" },
                { icon: "Clock", label: "РЕЖИМ РАБОТЫ", value: "Пн–Вс: 9:00 – 21:00", sub: "Без выходных" },
                { icon: "Star", label: "МЫ НА AVITO", value: "APT studio", sub: "97 отзывов · Рейтинг 5.0★" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-[#111] border border-[#222] p-4 hover:border-[#C0152A]/30 transition-colors">
                  <div className="w-10 h-10 bg-[#C0152A]/10 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={18} className="text-[#C0152A]" />
                  </div>
                  <div>
                    <div className="font-oswald text-xs tracking-widest text-white/30 uppercase">{c.label}</div>
                    <div className="font-oswald text-lg font-bold text-white mt-0.5">{c.value}</div>
                    <div className="font-golos text-xs text-white/40 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2 flex-wrap">
                <a href="tel:+79507538353" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:border-[#C0152A]/40 text-white/60 hover:text-white px-4 py-2.5 transition-all font-golos text-sm">
                  <Icon name="Phone" size={16} className="text-[#C0152A]" /> Позвонить
                </a>
                <a href="https://t.me/APTstudio136" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:border-[#C0152A]/40 text-white/60 hover:text-white px-4 py-2.5 transition-all font-golos text-sm">
                  <Icon name="Send" size={16} className="text-[#00D4FF]" /> Telegram
                </a>
                <a href="https://www.avito.ru/brands/b6354d8206e2bc2ec3455d3f914cad18/all?sellerId=eaf918690916e23f0a7b434eee904443" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#111] border border-[#222] hover:border-[#C0152A]/40 text-white/60 hover:text-white px-4 py-2.5 transition-all font-golos text-sm">
                  <Icon name="ExternalLink" size={16} className="text-[#FFD600]" /> Avito
                </a>
              </div>
            </div>

            <div className="section-reveal bg-[#111] border border-[#222] overflow-hidden min-h-[400px] relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-10">
                <div className="w-16 h-16 bg-[#C0152A]/10 rounded-full flex items-center justify-center animate-pulse-orange">
                  <Icon name="MapPin" size={28} className="text-[#C0152A]" />
                </div>
                <div className="text-center">
                  <div className="font-oswald text-lg font-bold text-white">APT Studio</div>
                  <div className="font-golos text-sm text-white/40">ул. Митрофановская, 2</div>
                </div>
                <a href="https://yandex.ru/maps/-/CPFbzL4G" target="_blank" rel="noopener noreferrer" className="bg-gradient-orange text-black font-oswald font-bold px-6 py-2.5 text-sm tracking-widest uppercase hover:scale-105 transition-transform mt-2 flex items-center gap-2">
                  ОТКРЫТЬ КАРТУ <Icon name="ExternalLink" size={14} />
                </a>
              </div>
              <div className="absolute inset-0 stripe-bg opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070707] border-t border-[#C0152A]/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-gradient-orange rounded flex items-center justify-center">
                <span className="font-oswald font-bold text-xs text-black">APT</span>
              </div>
              <span className="font-oswald text-lg font-bold tracking-wider text-white">
                APT <span className="text-gradient-orange">STUDIO</span>
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="font-golos text-xs text-white/30 hover:text-white/70 transition-colors uppercase tracking-wider">
                  {l.label}
                </a>
              ))}
            </div>

            <div className="font-golos text-xs text-white/20">
              © 2026 APT Studio · Воронеж
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}