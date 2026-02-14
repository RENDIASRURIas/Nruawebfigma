import { ArrowLeft, Cookie } from 'lucide-react'

interface CookiesPageProps {
  onBack: () => void
}

export default function CookiesPage({ onBack }: CookiesPageProps) {
  return (
    <div className="pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-gold font-medium mb-8 hover:text-dark transition-colors"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Powrót do strony głównej
      </button>

      <div className="bg-white p-8 sm:p-12 shadow-sm border border-gray-100 rounded-sm">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
          <div className="w-12 h-12 flex items-center justify-center bg-cream rounded-full text-gold">
            <Cookie className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif text-dark mb-1">Polityka Cookies</h1>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Política de Cookies</p>
          </div>
        </div>

        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">1.</span> Czym są pliki cookies?
            </h2>
            <p>
              Pliki cookies (ciasteczka) to małe pliki tekstowe, które są przechowywane na Twoim urządzeniu (komputerze, tablecie, smartfonie) podczas odwiedzania stron internetowych. Służą one do zapewnienia poprawnego działania strony, zapamiętywania preferencji użytkownika oraz zbierania anonimowych statystyk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">2.</span> Rodzaje wykorzystywanych cookies
            </h2>
            <ul className="space-y-4">
              <li className="bg-cream/30 p-4 rounded-sm">
                <strong className="text-dark block mb-1">Niezbędne</strong>
                Są konieczne do prawidłowego funkcjonowania strony i umożliwiają korzystanie z podstawowych funkcji.
              </li>
              <li className="bg-cream/30 p-4 rounded-sm">
                <strong className="text-dark block mb-1">Analityczne</strong>
                Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają ze strony, co pozwala na jej ulepszanie.
              </li>
              <li className="bg-cream/30 p-4 rounded-sm">
                <strong className="text-dark block mb-1">Funkcjonalne</strong>
                Pozwalają stronie zapamiętać wybory dokonywane przez użytkownika (np. język).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">3.</span> Zarządzanie plikami cookies
            </h2>
            <p>
              Możesz w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej. Pamiętaj jednak, że wyłączenie niektórych plików cookies może wpłynąć na funkcjonalność strony.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
            Ostatnia aktualizacja: Styczeń 2025
          </div>
        </div>
      </div>
    </div>
  )
}