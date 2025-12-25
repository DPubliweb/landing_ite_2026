import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que l'Isolation Thermique Extérieure (ITE) ?",
      answer: "L'ITE consiste à envelopper votre maison d'une couche isolante par l'extérieur. Cette technique élimine les ponts thermiques, améliore significativement l'efficacité énergétique et préserve votre espace intérieur contrairement à l'isolation par l'intérieur."
    },
    {
      question: "Quelles sont les aides disponibles en 2025 ?",
      answer: "En 2025, vous pouvez bénéficier de MaPrimeRénov' (jusqu'à 63 000€), du CITE - Crédit d'Impôt pour la Transition Énergétique (30% de déduction), de l'Éco-PTZ (jusqu'à 30 000€), et des primes CEE. Les aides peuvent atteindre jusqu'à 12 000€ selon votre éligibilité."
    },
    {
      question: "Quels sont les critères d'éligibilité ?",
      answer: "Vous devez être propriétaire d'une maison individuelle. Le logement doit être construit depuis plus de 2 ans. Les travaux doivent être réalisés par un artisan certifié RGE (Reconnu Garant de l'Environnement). Les aides varient selon vos revenus et la performance énergétique atteinte."
    },
    {
      question: "Quelle économie puis-je réaliser ?",
      answer: "Vous pouvez réaliser jusqu'à 70% d'économie sur votre facture de chauffage. L'ITE réduit significativement les déperditions thermiques et améliore le confort toute l'année. Avec la hausse du prix de l'énergie, ces économies deviennent encore plus importantes."
    },
    {
      question: "L'ITE réduit-elle mon espace habitable ?",
      answer: "Non ! Contrairement à l'isolation par l'intérieur, l'ITE préserve totalement votre espace habitable. L'isolation est posée sur les murs extérieurs, vous ne perdez aucun mètre carré à l'intérieur de votre maison."
    },
    {
      question: "Comment l'ITE valorise-t-elle mon bien ?",
      answer: "L'ITE augmente la valeur de votre bien immobilier en améliorant significativement son classement énergétique (DPE). Des murs extérieurs rénovés et une meilleure performance énergétique rendent votre propriété plus attractive et augmentent sa valeur de revente."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[900px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-4" style={{ color: '#1B5E20' }}>
          Questions fréquentes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Tout ce que vous devez savoir sur l'ITE et les aides 2025
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 rounded-xl overflow-hidden transition-all duration-300"
              style={{ 
                borderColor: openIndex === index ? '#2E7D32' : '#E0E0E0',
                backgroundColor: openIndex === index ? '#E8F5E9' : 'white'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300"
              >
                <span 
                  className="text-lg font-bold pr-4"
                  style={{ color: openIndex === index ? '#2E7D32' : '#1B5E20' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: openIndex === index ? '#2E7D32' : '#1B5E20' }}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-base leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 rounded-2xl" style={{ backgroundColor: '#F1F8E9' }}>
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#1B5E20' }}>
            Vous avez d'autres questions ?
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Notre équipe d'experts est là pour vous répondre
          </p>
          <button
            onClick={() => document.getElementById('eligibility-form').scrollIntoView()}
            className="px-10 py-4 text-white text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{
              backgroundColor: '#4CAF50',
              borderRadius: '10px',
              fontFamily: 'Rubik, sans-serif'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#388E3C'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Nous contacter
          </button>
        </div>
      </div>
    </section>
  );
}