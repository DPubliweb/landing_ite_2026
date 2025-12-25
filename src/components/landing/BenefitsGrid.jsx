import React from "react";
import { TrendingDown, Zap, Leaf, Sun, TrendingUp, BadgeDollarSign } from "lucide-react";

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Jusqu'à 70% d'économies",
      description: "Réduisez votre facture de chauffage jusqu'à 70% grâce à l'isolation thermique extérieure."
    },
    {
      icon: Zap,
      title: "Réduction des déperditions",
      description: "L'ITE réduit significativement les pertes thermiques et améliore l'efficacité énergétique."
    },
    {
      icon: Sun,
      title: "Confort toute l'année",
      description: "Éliminez les ponts thermiques pour un confort optimal été comme hiver."
    },
    {
      icon: TrendingUp,
      title: "Valorisez votre patrimoine",
      description: "Augmentez la valeur de votre bien en améliorant son classement énergétique."
    },
    {
      icon: Leaf,
      title: "Préservation de l'espace",
      description: "Améliorez l'isolation sans réduire l'espace habitable intérieur."
    },
    {
      icon: BadgeDollarSign,
      title: "Aides de l'État 2025",
      description: "Bénéficiez des aides régionales et nationales : jusqu'à 12 000€."
    }
  ];

  const scrollToForm = () => {
    document.getElementById('eligibility-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#F1F8E9' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-[36px] md:text-[42px] font-bold mb-16 leading-tight">
          <span style={{ color: '#1B5E20' }}>Pourquoi isoler votre maison </span>
          <span style={{ color: '#2E7D32' }}>par l'extérieur (ITE) ?</span>
        </h2>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ borderColor: '#c2d5eb' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: '#E8F5E9' }}
              >
                <benefit.icon className="w-8 h-8" style={{ color: '#2E7D32' }} />
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: '#1B5E20' }}>
                {benefit.title}
              </h3>
              
              <p className="text-base leading-relaxed text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
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
            Vérifier mon éligibilité
          </button>
        </div>
      </div>
    </section>
  );
}