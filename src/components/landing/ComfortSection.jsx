import React from "react";

export default function ComfortSection() {
  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[28px] md:text-[36px] font-bold mb-10 md:mb-16 leading-tight">
          <span style={{ color: '#1B5E20' }}>Quels avantages à </span>
          <span style={{ color: '#2E7D32' }}>l'isolation des murs extérieurs</span>
          <span style={{ color: '#1B5E20' }}> ?</span>
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
              alt="Isolation thermique extérieure"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#1B5E20' }}>
                70% d'économie sur vos factures de chauffage
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                L'ITE <strong>réduit significativement les déperditions de chaleur</strong> de votre bâtiment. 
                Améliorez l'efficacité énergétique et réduisez vos coûts de chauffage 
                de <strong>jusqu'à 70%</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#1B5E20' }}>
                Valorisation de votre propriété
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Les travaux d'ITE <strong style={{ color: '#4CAF50' }}>augmentent la valeur de votre bien immobilier</strong> en 
                améliorant son classement énergétique. Des <strong>installations modernes</strong> et 
                des murs extérieurs rénovés pour plus de valeur.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3" style={{ color: '#1B5E20' }}>
                Aides de l'État 2025
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-gray-700">
                Profitez des <strong>aides 2025</strong> : MaPrimeRénov' (63 000€), 
                CITE (30% de crédit d'impôt), Éco-PTZ (30 000€). 
                <strong style={{ color: '#2E7D32' }}> Jusqu'à 12 000 euros</strong> financés par les aides de l'État.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Logos - Bottom of Page */}
        <div className="flex justify-center items-center gap-12 md:gap-20 pt-8 md:pt-12 border-t-2 border-gray-200">
          <div className="flex items-center justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694a53c214a8601edd01e0b0/feafc4f2f_Logo_MTE.png"
              alt="Ministère Transition Écologique"
              className="h-[80px] md:h-[120px] object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_67d6fe733e18abac6832bd29/2c943b4aa_design_sans_titre_10.png"
              alt="RGE"
              className="h-[80px] md:h-[120px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}