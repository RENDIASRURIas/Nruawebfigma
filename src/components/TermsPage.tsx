import { ArrowLeft, Scale, Mail, Phone, MapPin } from 'lucide-react'

interface TermsPageProps {
  onBack: () => void
}

export default function TermsPage({ onBack }: TermsPageProps) {
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
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif text-dark mb-1">Nota Prawna</h1>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Aviso Legal - Condiciones de uso de la página web</p>
          </div>
        </div>

        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">1.</span> Dane Identificacyjne Właściciela Strony
            </h2>
            <div className="bg-cream/50 p-6 rounded-sm border border-gold/10 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gold mb-1">Nazwa / Razón Social</span>
                  <span className="font-medium text-dark">Polska Grupa Konsultingowa</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gold mb-1">NIF / CIF</span>
                  <span className="font-medium text-dark">B22682827</span>
                </div>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold mb-1">Adres / Domicilio Social</span>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                  <span className="font-medium text-dark">Calle Matilde Peñaranda, 27, 03183 Torrevieja (Alicante), Hiszpania</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gold mb-1">Email / Correo Electrónico</span>
                  <a href="mailto:info@pgkhiszpania.com" className="flex items-center gap-2 font-medium text-dark hover:text-gold transition-colors">
                    <Mail className="w-4 h-4 text-gold" />
                    info@pgkhiszpania.com
                  </a>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gold mb-1">Telefon / Teléfono</span>
                  <a href="tel:+34644106222" className="flex items-center gap-2 font-medium text-dark hover:text-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                    644 106 222
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">2.</span> Cel i Zakres Strony
            </h2>
            <p>
              Niniejsza Nota Prawna reguluje dostęp i korzystanie ze strony internetowej <span className="text-dark font-medium">www.nruahiszpania.com</span>, w tym treści i usług udostępnianych użytkownikom za jej pośrednictwem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">3.</span> Warunki Dostępu i Użytkowania
            </h2>
            <p>
              Dostęp do strony internetowej nadaje status użytkownika i oznacza pełną i bezwarunkową akceptację wszystkich warunków zawartych w niniejszej Nocie Prawnej. Użytkownik zobowiązuje się do korzystania ze strony, jej usług i treści w sposób zgodny z prawem, staranny, poprawny oraz zgodny z moralnością i porządkiem publicznym.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">4.</span> Własność Intelektualna i Przemysłowa
            </h2>
            <p>
              Wszelkie prawa własności intelektualnej i przemysłowej do treści tej strony internetowej należą do Polska Grupa Konsultingowa lub jej licencjodawców. Wyraźnie zabrania się reprodukcji, dystrybucji i komunikacji publicznej, w tym udostępniania całości lub części treści tej strony internetowej w celach komercyjnych, na jakimkolwiek nośniku i za pomocą jakichkolwiek środków technicznych, bez zgody Polska Grupa Konsultingowa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">5.</span> Wyłączenie Gwarancji i Odpowiedzialności
            </h2>
            <p>
              Polska Grupa Konsultingowa nie ponosi odpowiedzialności w żadnym przypadku za szkody jakiejkolwiek natury, które mogą wynikać m.in. z: błędów lub pominięć w treściach, braku dostępności portalu lub transmisji wirusów czy złośliwego oprogramowania w treściach, mimo podjęcia wszelkich niezbędnych środków technologicznych w celu ich uniknięcia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">6.</span> Polityka Prywatności i Ochrona Danych
            </h2>
            <p>
              Informacje na temat przetwarzania danych osobowych są szczegółowo opisane w Polityce Prywatności tej strony.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">7.</span> Polityka Cookies
            </h2>
            <p>
              Ta strona używa plików cookies własnych i podmiotów trzecich w celu poprawy doświadczenia przeglądania i oferowania interesujących treści.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">8.</span> Prawo Właściwe i Jurysdykcja
            </h2>
            <p>
              Niniejsza Nota Prawna podlega we wszystkich swoich aspektach prawu hiszpańskiemu. W celu rozwiązania wszelkich sporów, które mogą powstać, strony poddają się sądom i trybunałom w Torrevieja (Alicante), chyba że prawo stanowi inaczej.
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