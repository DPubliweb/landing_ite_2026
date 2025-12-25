import React from "react";

export default function AdvantagesSection() {
  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView({ behavior: 'smooth' });
  };
console.log("LOADED AdvantagesSection.jsx");

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#E8F5E9' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Main Highlight */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold leading-tight">
            <span style={{ color: '#1B5E20' }}>Jusqu'à </span>
            <span style={{ color: '#2E7D32', fontSize: '48px' }}>70 %</span>
            <span style={{ color: '#1B5E20' }}> d'économie</span>
            <br />
            <span style={{ color: '#1B5E20' }}>sur vos factures de chauffage</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="max-w-[800px] mx-auto">
          {/* Info Blocks */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#2E7D32' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B5E20' }}>
                Réduction des déperditions de chaleur
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                L'ITE permet de <strong>réduire significativement</strong> les pertes thermiques de votre bâtiment, 
                améliorant ainsi son efficacité énergétique et <strong>réduisant les coûts de chauffage</strong> 
                jusqu'à <strong>70%</strong>. Travaux réalisés par des <strong>artisans locaux certifiés RGE</strong>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4" style={{ borderColor: '#66BB6A' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B5E20' }}>
                Aides de l'État 2025
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Bénéficiez des <strong>aides 2025</strong> pour la transition écologique : 
                <strong>MaPrimeRénov'</strong> (jusqu'à 63 000€), <strong>CITE</strong> (30% de crédit d'impôt), 
                <strong>Éco-PTZ</strong> (jusqu'à 30 000€), et <strong>primes CEE</strong>. 
                Jusqu'à <strong style={{ color: '#4CAF50' }}>12 000€</strong> d'aides selon éligibilité.
              </p>
            </div>

            {/* CTA Button between the two blocks */}
            <div className="flex justify-center py-4">
              <button
                onClick={scrollToForm}
                className="px-8 md:px-12 py-4 md:py-5 text-white text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#4CAF50',
                  borderRadius: '10px',
                  fontFamily: 'Rubik, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
              >
                Je calcule mes aides
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2" style={{ borderColor: '#4CAF50' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#4CAF50' }}>
                    <span className="text-white text-2xl font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#1B5E20' }}>
                    Confort optimal toute l'année
                  </h4>
                  <p className="text-base text-gray-700">
                    En isolant par l'extérieur, vous éliminez les ponts thermiques et 
                    <strong> augmentez le confort intérieur</strong> en été comme en hiver, 
                    tout en <strong>préservant votre espace intérieur</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#2E7D32' }}>
              12 000€
            </p>
            <p className="text-lg font-semibold" style={{ color: '#1B5E20' }}>
              Aides 2025 maximales
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#2E7D32' }}>
              70%
            </p>
            <p className="text-lg font-semibold" style={{ color: '#1B5E20' }}>
              Économie sur votre facture
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-4xl font-extrabold mb-2" style={{ color: '#2E7D32' }}>
              63 000€
            </p>
            <p className="text-lg font-semibold" style={{ color: '#1B5E20' }}>
              MaPrimeRénov' maximum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}