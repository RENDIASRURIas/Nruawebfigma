import { useState, useEffect, useRef } from 'react'
import './App.css'
import {
  ChevronDown,
  Clock,
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Building2,
  Users,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  BookOpen,
  Menu,
  X,
  Download,
  ExternalLink,
  Youtube,
  Globe,
  Scale,
  ArrowLeft,
} from 'lucide-react'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import PrivacyPage from './components/PrivacyPage'
import TermsPage from './components/TermsPage'
import CookiesPage from './components/CookiesPage'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, isInView }
}

function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView()
  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? 'fade-in-up' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Countdown() {
  const targetDate = new Date('2026-02-28T23:59:00').getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const diff = targetDate - now
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const blocks = [
    { value: timeLeft.days, label: 'DNI' },
    { value: timeLeft.hours, label: 'GODZIN' },
    { value: timeLeft.minutes, label: 'MINUT' },
    { value: timeLeft.seconds, label: 'SEKUND' },
  ]

  return (
    <div className="flex gap-6 sm:gap-12 justify-center countdown-elegant">
      {blocks.map((b, i) => (
        <div key={i} className="text-center">
          <div className="text-4xl sm:text-5xl lg:text-6xl text-gold tabular-nums mb-2">
            {String(b.value).padStart(2, '0')}
          </div>
          <div className="text-xs sm:text-sm text-gray tracking-widest font-medium uppercase">
            {b.label}
          </div>
        </div>
      ))}
    </div>
  )
}

interface FAQItem {
  q: string
  a: string
}

interface FAQCategory {
  title: string
  icon: React.ReactNode
  items: FAQItem[]
}

function FAQAccordion({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-0">
      {category.items.map((item, idx) => (
        <div
          key={idx}
          className="border-b border-gray-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full py-5 flex items-start gap-4 text-left group"
          >
            <span className="flex-1 text-base sm:text-lg font-medium text-dark leading-relaxed group-hover:text-gold transition-colors">
              {item.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                openIndex === idx ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? 'max-h-96 mb-5' : 'max-h-0'
            }`}
          >
            <p className="text-gray leading-relaxed font-light">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLegalPage, setActiveLegalPage] = useState<'privacy' | 'terms' | 'cookies' | null>(null)
  const [selectedFaqCategory, setSelectedFaqCategory] = useState(0)

  const openLegalPage = (page: 'privacy' | 'terms' | 'cookies') => {
    setActiveLegalPage(page)
    window.scrollTo(0, 0)
  }

  const closeLegalPage = () => {
    setActiveLegalPage(null)
    window.scrollTo(0, 0)
  }

  const navItems = [
    { href: '#co-to', label: 'Co to jest' },
    { href: '#jak-zlozyc', label: 'Jak złożyć' },
    { href: '#przydatne-linki', label: 'Przydatne linki' },
    { href: '#faq', label: 'FAQ' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  const heroCards = [
    {
      title: 'Właściciele apartamentów',
      desc: 'Osoby prywatne',
      sub: 'Jeśli wynajmujesz swoje mieszkanie przez Airbnb, Booking, czy nawet social media',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
      fallback: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    },
    {
      title: 'Firmy i spółki',
      desc: 'Działalność komercyjna',
      sub: 'Przedsiębiorstwa zarządzające portfelem nieruchomości na wynajem krótkoterminowy',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      fallback: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
    {
      title: 'Wynajem pokoi',
      desc: 'Współdzielone przestrzenie',
      sub: 'Nawet jeśli wynajmujesz tylko pokój w swoim domu, musisz mieć numer NRUA',
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      fallback: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    },
    {
      title: 'Wszyscy ogłaszający online',
      desc: 'Reklama internetowa',
      sub: 'Każda forma promocji online (portale, Facebook, Instagram) wymaga NRUA',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      fallback: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    },
  ]

  const faqCategories: FAQCategory[] = [
    {
      title: 'Obowiązek i NRUA',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { q: 'Kto dokładnie ma obowiązek posiadać numer NRUA?', a: 'Zgodnie z art. 5 ust. a) Dekretu Królewskiego 1312/2024, obowiązek ten dotyczy każdej osoby (prywatnej lub firmy), która oferuje zakwaterowanie krótkoterminowe za wynagrodzeniem przez platformy takie jak Airbnb, Booking.com czy social media. Dotyczy to nie tylko turystyki, ale też najmu dla pracowników, studentów czy osób na leczeniu.' },
        { q: 'Kiedy muszę uzyskać ten numer?', a: 'Prawo jest jasne: numer NRUA musisz uzyskać ZANIM opublikujesz ogłoszenie w internecie. Od 1 lipca 2025 r. platformy mają zakaz wyświetlania ofert, które nie posiadają zweryfikowanego i aktywnego numeru w systemie.' },
        { q: 'Mam już numer licencji turystycznej z mojego regionu (np. numer VFT lub VT). Czy to wystarczy?', a: 'Nie. Licencja regionalna (autonomiczna) jest warunkiem koniecznym, aby ubiegać się o NRUA, ale go nie zastępuje. NRUA to ogólnokrajowy numer rejestrowy wpisany do Księgi Wieczystej nieruchomości (Registro de la Propiedad), który pozwala na wymianę danych z Unią Europejską.' },
        { q: 'Czy jeśli wynajmuję mieszkanie prywatnie, bez portali, też muszę mieć NRUA?', a: 'Obowiązek posiadania NRUA dotyczy usług świadczonych za pośrednictwem „platform internetowych". Jeśli jednak reklamujesz się w jakikolwiek sposób cyfrowy (nawet na grupach Facebook), podpadasz pod definicję platformy i musisz posiadać numer, aby działać legalnie i uniknąć kar.' },
        { q: 'Co jeśli mam pokój w domu, w którym sam mieszkam?', a: 'Tak, wynajem pokoi (jeśli pozwalają na to przepisy Twojego regionu) również wymaga numeru NRUA, jeśli ogłaszasz go jako najem krótkoterminowy.' },
      ],
    },
    {
      title: 'Dane i Dokumenty (Rejestracja)',
      icon: <FileText className="w-5 h-5" />,
      items: [
        { q: 'Jakie dokumenty są potrzebne do uzyskania numeru?', a: 'Przy składaniu wniosku musisz posiadać: hiszpański numer NIE lub NIF, kod CRU nieruchomości (z Nota Simple), tytuł prawny do wynajmu (np. licencję turystyczną lub potwierdzenie zgłoszenia działalności w gminie/regionie) oraz informację o kategorii najmu (turystyczny lub sezonowy/inny).' },
        { q: 'Czy raz nadany numer NRUA jest bezterminowy?', a: 'Numer pozostaje ważny tak długo, jak długo spełniasz wymogi i składasz coroczne sprawozdanie w lutym. Brak raportu rocznego lub zmiana przeznaczenia nieruchomości bez aktualizacji danych może doprowadzić do natychmiastowego wycofania numeru z rejestru.' },
      ],
    },
    {
      title: 'Obowiązek i Terminy',
      icon: <Calendar className="w-5 h-5" />,
      items: [
        { q: 'Kiedy dokładnie muszę wysłać raport roczny?', a: 'Zgodnie z rozporządzeniem VAU/1560/2025, raport należy złożyć wyłącznie w lutym każdego roku. Przykładowo, dane za rok 2025 przesyłasz w lutym 2026 r.' },
        { q: 'Czy muszę mieć NRUA, jeśli wynajmuję mieszkanie tylko przez miesiąc w roku?', a: 'Tak. Ustawa (Art. 2.c RD 1312/2024) mówi, że obowiązek dotyczy każdego wynajmu krótkoterminowego, niezależnie od tego, czy jest on regularny, czy okazjonalny.' },
        { q: 'Mam licencję turystyczną od lat. Czy to to samo co NRUA?', a: 'Nie. Licencja turystyczna jest regionalna. NRUA to nowy, ogólnokrajowy numer rejestrowy niezbędny do publikowania ogłoszeń w sieci. Licencja jest wymogiem, aby w ogóle móc ubiegać się o NRUA.' },
      ],
    },
    {
      title: 'Dokumenty i Dane',
      icon: <FileText className="w-5 h-5" />,
      items: [
        { q: 'Jakich danych o gościach wymaga system?', a: 'System wymaga listy pobytów, w której podajesz: datę przyjazdu, datę wyjazdu, liczbę gości oraz cel pobytu (np. turystyka, praca). Dane są przesyłane w formacie anonimowym.' },
        { q: 'Co to jest numer CRU i gdzie go znajdę?', a: 'CRU (Código Registral Único) to „PESEL" Twojej nieruchomości w rejestrze gruntów. Znajdziesz go w swojej karcie własności (Nota Simple). Jest niezbędny do poprawnej identyfikacji nieruchomości w systemie NRUA.' },
        { q: 'Nie wynajmowałem mieszkania w tym roku. Czy mogę pominąć zgłoszenie?', a: 'Absolutnie nie. Musisz złożyć raport z zaznaczoną opcją „Sin actividad" (brak aktywności). Jeśli tego nie zrobisz, Twój numer NRUA może zostać wyrejestrowany.' },
      ],
    },
    {
      title: 'Proces i Aplikacja',
      icon: <BookOpen className="w-5 h-5" />,
      items: [
        { q: 'Czy mogę wysłać raport w formie PDF lub e-mailem?', a: 'Nie. Oficjalnym formatem jest XBRL (specyfikacja 2.1). Jest to format cyfrowy czytelny dla maszyn, przesyłany przez platformę elektroniczną Kolegium Rejestratorów.' },
        { q: 'Ile kosztuje złożenie raportu rocznego?', a: 'Aktualna opłata rejestrowa wynosi 27,05 € za każde zgłoszenie (za każdy numer NRUA).' },
        { q: 'Czy muszę osobiście jechać do Hiszpanii, aby to załatwić?', a: 'Nie. Cały proces odbywa się online. Możesz upoważnić pełnomocnika lub gestorię, która wyśle raport w Twoim imieniu.' },
      ],
    },
    {
      title: 'Konsekwencje i Kary',
      icon: <AlertTriangle className="w-5 h-5" />,
      items: [
        { q: 'Co się stanie, jeśli zapomnę o raporcie w lutym?', a: 'Rejestrator (Registrador de la Propiedad) może zawiesić ważność Twojego numeru NRUA. W efekcie Airbnb, Booking i inne platformy otrzymają nakaz usunięcia Twojego ogłoszenia w ciągu 48 godzin (Art. 10.2 RD 1312/2024).' },
        { q: 'Jakie kary finansowe grożą za brak NRUA?', a: 'Sam dekret NRUA odsyła do istniejących przepisów regionalnych. W zależności od regionu (np. Walencja, Andaluzja), kary za nielegalny wynajem lub brak wymaganych rejestracji mogą sięgać nawet 600.000 € w przypadku bardzo poważnych naruszeń.' },
        { q: 'Czy Airbnb samo prześle moje dane do rejestru?', a: 'Platformy przesyłają dane o aktywności (liczba nocy/gości), ale to Ty jako właściciel masz prawny obowiązek posiadania aktywnego numeru NRUA i składania corocznego modelu informacyjnego w rejestrze.' },
      ],
    },
  ]

  const steps = [
    { num: '01', title: 'Zbierz Dokumenty i Dane', desc: 'Przygotuj: NIE/NIF, numer NRUA, kod CRU, dane wszystkich wynajmów z 2025 roku (daty, liczba gości, cel najmu).', icon: <FileText className="w-7 h-7" /> },
    { num: '02', title: 'Pobierz Aplikację N2', desc: 'Oficjalny program Colegio de Registradores. Pobierz ze strony sede.registradores.org. Wymaga: Windows 10+ lub macOS, Java 8+.', icon: <BookOpen className="w-7 h-7" /> },
    { num: '03', title: 'Wypełnij Formularz', desc: 'Uruchom aplikację N2, wybierz "Nuevo depósito", rok 2025, wpisz dane właściciela, dane nieruchomości (CRU, NRUA), informacje o wynajmach.', icon: <CheckCircle2 className="w-7 h-7" /> },
    { num: '04', title: 'Złóż Elektronicznie lub Osobiście', desc: 'Elektronicznie: z certyfikatem cyfrowym na sede.registradores.org. Osobiście: wydrukuj formularz i zanieś do Registro de la Propiedad.', icon: <Shield className="w-7 h-7" /> },
  ]

  if (activeLegalPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              <button onClick={closeLegalPage} className="flex items-center gap-3">
                <img 
                  src="/logo.jpeg" 
                  alt="NRUA Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-semibold tracking-tight text-dark">NRUA Hiszpania</span>
              </button>
            </div>
          </div>
        </nav>
        <PrivacyPage onBack={closeLegalPage} />
      </div>
    )
  }

  if (activeLegalPage === 'terms') {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              <button onClick={closeLegalPage} className="flex items-center gap-3">
                <img 
                  src="/logo.jpeg" 
                  alt="NRUA Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-semibold tracking-tight text-dark">NRUA Hiszpania</span>
              </button>
            </div>
          </div>
        </nav>
        <TermsPage onBack={closeLegalPage} />
      </div>
    )
  }

  if (activeLegalPage === 'cookies') {
    return (
      <div className="min-h-screen bg-white font-sans antialiased">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between h-20">
              <button onClick={closeLegalPage} className="flex items-center gap-3">
                <img 
                  src="/logo.jpeg" 
                  alt="NRUA Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-semibold tracking-tight text-dark">NRUA Hiszpania</span>
              </button>
            </div>
          </div>
        </nav>
        <CookiesPage onBack={closeLegalPage} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream font-sans antialiased">
      {/* NAVBAR ELEGANTE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#hero" className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="NRUA Logo" 
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  // Fallback al SVG si no se encuentra el logo
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const svg = target.nextElementSibling as HTMLElement;
                  if (svg) svg.style.display = 'block';
                }}
              />
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ display: 'none' }}>
                <rect x="2" y="2" width="28" height="28" stroke="#c9a55a" strokeWidth="2" />
                <rect x="11" y="11" width="10" height="10" fill="#c9a55a" />
              </svg>
              <span className="text-xl font-semibold tracking-tight text-dark">
                NRUA <span className="text-gold">Hiszpania</span>
              </span>
            </a>
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray elegant-hover uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href="#kontakt" className="hidden sm:block btn-elegant btn-gold text-xs">
                Skontaktuj się
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-dark"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-dark hover:text-gold transition-colors text-sm font-medium uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block btn-elegant btn-gold text-xs text-center"
            >
              Skontaktuj się
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION - FOTO ARRIBA, TEXTO ABAJO */}
      <section id="hero" className="relative">
        {/* IMAGEN ARRIBA - CON TÍTULO ENCIMA */}
        <div className="h-[50vh] sm:h-[60vh] lg:h-[70vh] relative flex items-center justify-center overflow-hidden">
          {/* BACKGROUND IMAGE LAYER - GRAYSCALE ONLY */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1638886043487-72d203fa66b6?w=1600)',
              filter: 'grayscale(100%)',
            }}
          />

          {/* OVERLAY OSCURO PARA LEGIBILIDAD - SIN GRAYSCALE */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/50 to-dark/60 z-0" />
          
          {/* TÍTULO Y TEXTO ENCIMA DE LA FOTO - COLOR COMPLETO */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* TÍTULO CON FONDO SEMI-TRANSPARENTE */}
            <div className="inline-block relative mb-10 group cursor-default bg-black/60 backdrop-blur-sm p-8 sm:p-12 border border-white/10 shadow-2xl">
              {/* Decorative top line */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-gold/50" />
              
              <h1 
                className="text-4xl sm:text-5xl lg:text-7xl leading-tight relative z-10"
                style={{ 
                  fontFamily: 'Cormorant Garamond, serif', 
                  letterSpacing: '0.02em',
                }}
              >
                <span className="block text-white/95 font-light tracking-wide mb-1 drop-shadow-md transition-transform duration-700 group-hover:-translate-y-1">
                  KTO MUSI MIEĆ
                </span>
                <span className="block text-white font-medium drop-shadow-lg transition-transform duration-700 group-hover:translate-y-1">
                  NUMER <span style={{ color: '#c9a55a' }} className="font-bold tracking-wider drop-shadow-lg">NRUA</span>?
                </span>
              </h1>
              
              {/* Decorative bottom element */}
              <div className="mt-6 flex items-center justify-center gap-4 opacity-80">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
                <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_10px_rgba(201,165,90,0.5)]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
              </div>
            </div>

            {/* RECUADRO GRIS CLARO CON TEXTO */}
            <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-sm p-6 sm:p-8 shadow-2xl inline-block">
              <p className="text-base sm:text-lg text-dark font-light leading-relaxed">
                Zgodnie z hiszpańskim dekretem (RD 1312/2024), numer ten jest obowiązkowy dla każdego (osoby prywatnej lub firmy), kto chce reklamować wynajem krótkoterminowy <strong className="font-semibold">w internecie</strong>.
              </p>
            </div>
          </div>

          {/* BADGE NRUA - COLOR COMPLETO */}
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full border-2 border-gold bg-cream flex items-center justify-center z-10">
            <span className="text-gold text-xs font-bold">NRUA</span>
          </div>
        </div>

        {/* TEXTO DEBAJO DE LA FOTO */}
        <div className="bg-cream py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* COUNTDOWN CENTRADO */}
            <FadeIn delay={400}>
              <div className="pt-0">
                <p className="text-center text-sm text-gray uppercase tracking-widest mb-8 font-semibold">
                  Pozostało czasu do deadline
                </p>
                <Countdown />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* FLECHA PARA SCROLL */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray" />
        </div>
      </section>

      {/* HERO CARDS - 4 KATEGORIE */}
      <section id="co-to" className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid-hero-cards">
            {heroCards.map((card, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="card-elegant overflow-hidden group h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { (e.target as HTMLImageElement).src = card.fallback }}
                      style={{ filter: 'grayscale(30%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-gold font-semibold text-sm mb-2 uppercase tracking-wider">{card.desc}</p>
                    <p className="text-gray text-sm leading-relaxed font-light">{card.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SEKCJA INFORMACYJNA */}
      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="animated-line">
              <p className="text-elegant-large text-dark leading-relaxed mb-8">
                Od 2026 roku każdy właściciel nieruchomości z numerem NRUA ma obowiązek składać{' '}
                <span className="text-gold">coroczną deklarację wynajmu</span> w hiszpańskim Registro de la
                Propiedad.
              </p>
              <p className="text-lg text-gray leading-relaxed font-light">
                Pamiętaj, że musisz to zrobić w lutym. Brak zgłoszenia oznacza automatyczne
                unieważnienie Twojego numeru i usunięcie ogłoszeń z platform takich jak Airbnb czy
                Booking.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-12">
              <a href="#jak-zlozyc" className="btn-elegant">
                Zobacz proces składania
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESO - 4 KROKI */}
      <section id="jak-zlozyc" className="section-spacing bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-16">
            <h2 className="text-elegant-large text-dark mb-4">Jak złożyć deklarację</h2>
            <p className="text-lg text-gray font-light max-w-2xl">
              Cztery kluczowe kroki do spełnienia obowiązku prawnego
            </p>
          </FadeIn>

          <div className="grid-hero-cards">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="card-elegant p-8 h-full">
                  <div className="number-elegant mb-6">{step.num}</div>
                  <div className="text-gold mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-semibold text-dark mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray font-light leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WAŻNE OSTRZEŻENIA */}
      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Ważne ostrzeżenia</h2>
            <p className="text-lg text-gold font-semibold">
              Przeczytaj koniecznie!
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                title: 'Airbnb i Booking będą blokować ogłoszenia',
                desc: 'Platformy mają obowiązek usunąć Twoją ofertę w ciągu 48h, jeśli Twój numer NRUA zostanie zawieszony z powodu braku rocznego zgłoszenia.',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Reklamujesz się w sieci? Musisz mieć NRUA',
                desc: 'Jeśli Twoja oferta widnieje na jakiejkolwiek platformie internetowej, masz obowiązek posiadać aktywny numer i składać raporty.',
              },
              {
                icon: <Building2 className="w-6 h-6" />,
                title: 'Mieszkanie puste? Też musisz wysłać raport',
                desc: 'Jeśli nieruchomość nie była wynajmowana, musisz zaznaczyć opcję „Sin actividad", aby zachować ważność numeru w rejestrze.',
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: 'Luty to termin ostateczny',
                desc: 'Złożenie raportu po 28 lutego może nie uchronić Cię przed zablokowaniem ogłoszeń przez systemy automatyczne.',
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: 'Jedno zgłoszenie na jeden CRU',
                desc: 'Jeśli masz dwa mieszkania (dwa numery CRU), musisz wysłać dwa osobne formularze.',
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: 'Nie musisz być w Hiszpanii',
                desc: 'Cały proces odbywa się cyfrowo. Twój pełnomocnik lub gestoría może złożyć raport w Twoim imieniu przez system XBRL.',
              },
            ].map((warning, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <div className="card-elegant p-6 h-full border-l-4 border-gold">
                  <div className="text-gold mb-4">{warning.icon}</div>
                  <h3 className="text-lg font-semibold text-dark mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {warning.title}
                  </h3>
                  <p className="text-gray text-sm font-light leading-relaxed">{warning.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* DOKUMENTY DO POBRANIA */}
      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Dokumenty do pobrania</h2>
            <p className="text-lg text-gray font-light">
              Oficjalne instrukcje przetłumaczone na język polski
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Instrukcja instalacji i tworzenia depozytów czynszowych w aplikacji N2',
                desc: 'PDF — Instrukcja krok po kroku',
                link: '/docs/instrukcja-n2.pdf',
              },
              {
                title: 'Podręcznik wprowadzający — Depozyt z tytułu najmu',
                desc: 'PDF — Przewodnik po depozycie',
                link: '/docs/podrecznik-depozyt.pdf',
              },
            ].map((doc, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <a
                  href={doc.link}
                  download
                  className="card-elegant p-8 flex items-start gap-6 group"
                >
                  <div className="w-16 h-16 border border-gold flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-gold">
                    <Download className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-gold transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray font-light mb-4">{doc.desc}</p>
                    <div className="flex items-center gap-2 text-gold text-sm font-medium">
                      Pobierz <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRZYDATNE LINKI */}
      <section id="przydatne-linki" className="section-spacing bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Przydatne linki</h2>
            <p className="text-lg text-gray font-light">
              Oficjalne zasoby i narzędzia
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Sede Registradores',
                desc: 'Składanie elektroniczne',
                link: 'https://sede.registradores.org',
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: 'Real Decreto 1312/2024',
                desc: 'Pełny tekst ustawy (BOE)',
                link: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-22440',
                icon: <Scale className="w-6 h-6" />,
              },
              {
                title: 'Aplikacja N2',
                desc: 'Pobierz oficjalny program',
                link: 'https://sede.registradores.org/sede/app-n2',
                icon: <Download className="w-6 h-6" />,
              },
              {
                title: 'Java (wymagana)',
                desc: 'Pobierz Javę do aplikacji N2',
                link: 'https://www.java.com/pl/download/',
                icon: <ExternalLink className="w-6 h-6" />,
              },
            ].map((link, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-elegant p-8 flex items-start gap-6 group"
                >
                  <div className="w-16 h-16 border border-gold flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-gold">
                    <div className="text-gold group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-gold transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray font-light mb-4">{link.desc}</p>
                    <div className="flex items-center gap-2 text-gold text-sm font-medium">
                      Odwiedź <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION - CON SELECTOR DE CATEGORÍAS */}
      <section id="faq" className="section-spacing bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Najczęściej zadawane pytania</h2>
            <p className="text-lg text-gray font-light">
              Wybierz kategorię, aby zobaczyć pytania i odpowiedzi
            </p>
          </FadeIn>

          {/* SELECTOR DE CATEGORÍAS */}
          <FadeIn delay={100} className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {faqCategories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedFaqCategory(idx)}
                  className={`px-6 py-3 rounded-sm text-sm font-medium uppercase tracking-wider transition-all ${
                    selectedFaqCategory === idx
                      ? 'bg-gold text-white border-gold'
                      : 'bg-white text-dark border border-gray-300 hover:border-gold hover:text-gold'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span>{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* PREGUNTAS DE LA CATEGORÍA SELECCIONADA */}
          <FadeIn delay={200}>
            <div className="bg-white rounded-sm p-8 card-elegant">
              <FAQAccordion category={faqCategories[selectedFaqCategory]} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECCIÓN GDZIE NAS ZNALEŹĆ */}
      <section className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Gdzie nas znaleźć</h2>
            <p className="text-lg text-gray font-light">
              Śledź nas w mediach społecznościowych i odwiedź nasze strony
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="https://www.youtube.com/@BizneswHiszpanii"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Youtube className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark group-hover:text-gold transition-colors">YouTube</h4>
                  <p className="text-sm text-gray font-light">@BizneswHiszpanii</p>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@bizneswhiszpanii"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Globe className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark group-hover:text-gold transition-colors">TikTok</h4>
                  <p className="text-sm text-gray font-light">@bizneswhiszpanii</p>
                </div>
              </a>

              <a
                href="https://www.pgkhiszpania.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors">
                  <ExternalLink className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark group-hover:text-gold transition-colors">PGK w Hiszpanii</h4>
                  <p className="text-sm text-gray font-light">pgkhiszpania.com</p>
                </div>
              </a>

              <a
                href="https://www.podatkihiszpania.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors">
                  <ExternalLink className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark group-hover:text-gold transition-colors">Podatki w Hiszpanii</h4>
                  <p className="text-sm text-gray font-light">podatkihiszpania.com</p>
                </div>
              </a>

              <a
                href="https://www.bizneswhiszpanii.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elegant p-6 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-gold flex items-center justify-center group-hover:bg-gold transition-colors">
                  <ExternalLink className="w-6 h-6 text-gold group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark group-hover:text-gold transition-colors">Biznes w Hiszpanii</h4>
                  <p className="text-sm text-gray font-light">bizneswhiszpanii.com</p>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="section-spacing bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-12">
            <h2 className="text-elegant-large text-dark mb-4">Potrzebujesz pomocy?</h2>
            <p className="text-lg text-gray font-light max-w-2xl mx-auto">
              Skontaktuj się z nami, aby uzyskać profesjonalną pomoc w złożeniu deklaracji NRUA
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 border border-gold mx-auto mb-4 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-dark mb-2">Email</h4>
                <a href="mailto:info@pgkhiszpania.com" className="text-gray hover:text-gold transition-colors font-light">
                  info@pgkhiszpania.com
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 border border-gold mx-auto mb-4 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-lg font-semibold text-dark mb-2">Telefon</h4>
                <a href="tel:+34644106222" className="text-gray hover:text-gold transition-colors font-light">
                  644 106 222
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER ELEGANTE */}
      <footer className="footer-elegant py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/logo.jpeg" 
                  alt="NRUA Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-lg font-semibold text-white">NRUA Hiszpania</span>
              </div>
              <p className="text-sm text-white/70 font-light leading-relaxed">
                Profesjonalne doradztwo dla polskich właścicieli nieruchomości w Hiszpanii
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Nawigacja
              </h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm font-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Kontakt
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-light">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@pgkhiszpania.com">info@pgkhiszpania.com</a>
                </li>
                <li className="flex items-center gap-2 text-sm font-light">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+34644106222">644 106 222</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
                Dokumenty
              </h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openLegalPage('privacy')} className="text-sm font-light hover:text-gold transition-colors">
                    Polityka prywatności
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalPage('terms')} className="text-sm font-light hover:text-gold transition-colors">
                    Regulamin
                  </button>
                </li>
                <li>
                  <button onClick={() => openLegalPage('cookies')} className="text-sm font-light hover:text-gold transition-colors">
                    Polityka cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="divider-elegant" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60 font-light">
            <p>© 2025 NRUA Hiszpania. Wszelkie prawa zastrzeżone.</p>
            <p>Zaprojektowane z dbałością o szczegóły</p>
          </div>
        </div>
      </footer>
    </div>
  )
}