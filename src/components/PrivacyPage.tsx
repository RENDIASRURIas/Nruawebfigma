import { ArrowLeft, Shield, CheckCircle2, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react'

interface PrivacyPageProps {
  onBack: () => void
}

export default function PrivacyPage({ onBack }: PrivacyPageProps) {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-serif text-dark mb-1">RODO (GDPR)</h1>
            <p className="text-gray-500 text-sm uppercase tracking-wider">Reglamento General de Protección de Datos</p>
          </div>
        </div>

        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">1.</span> Wprowadzenie do RODO
            </h2>
            <p>
              Ogólne Rozporządzenie o Ochronie Danych (RODO), znane w Polsce jako GDPR (General Data Protection Regulation), to norma Unii Europejskiej, która ujednolica ochronę danych dla wszystkich osób fizycznych na terenie UE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">2.</span> Administrator Danych
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
              <span className="text-gold">3.</span> Zasady Przetwarzania według RODO
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Zgodność z prawem, rzetelność i przejrzystość</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Ograniczenie celu</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Minimalizacja danych</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Prawidłowość</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Ograniczenie przechowywania</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Integralność i poufność</p>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-gold mt-1 shrink-0" />
                <p>Rozliczalność</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">4.</span> Prawa Osoby, której dane dotyczą
            </h2>
            <ul className="space-y-2 list-disc pl-5 marker:text-gold">
              <li>Prawo dostępu</li>
              <li>Prawo do sprostowania</li>
              <li>Prawo do usunięcia (prawo do bycia zapomnianym)</li>
              <li>Prawo do ograniczenia przetwarzania</li>
              <li>Prawo do przenoszenia danych</li>
              <li>Prawo do sprzeciwu</li>
              <li>Prawo do niepodlegania zautomatyzowanym decyzjom indywidualnym</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">5.</span> Jak skorzystać z praw?
            </h2>
            <p className="bg-gray-50 p-6 rounded-sm border-l-4 border-gold">
              Możesz skorzystać ze swoich praw, wysyłając pismo do <strong className="text-dark">Polska Grupa Konsultingowa</strong> na adres pocztowy: <span className="italic">Calle Matilde Peñaranda, 27, 03183 Torrevieja (Alicante), Hiszpania</span>, lub na adres e-mail: <a href="mailto:info@pgkhiszpania.com" className="text-gold hover:underline">info@pgkhiszpania.com</a>, załączając kserokopię dowodu osobistego lub równoważnego dokumentu tożsamości.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-dark mb-4 flex items-center gap-2">
              <span className="text-gold">6.</span> Prawo do wniesienia skargi
            </h2>
            <div className="flex gap-4 p-4 border border-red-100 bg-red-50/30 rounded-sm">
              <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
              <p>
                Jeśli uważasz, że przetwarzanie Twoich danych osobowych narusza przepisy, masz prawo wnieść skargę do Hiszpańskiej Agencji Ochrony Danych (AEPD).
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-100 text-sm text-gray-400 text-center">
            Ostatnia aktualizacja: Styczeń 2025
          </div>
        </div>
      </div>
    </div>
  )
}