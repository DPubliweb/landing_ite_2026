import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";

// ---- LOG LOCAL + QODDI ----
const logLead = (leadData) => {
  console.group("📨 NOUVEAU LEAD REÇU");
  console.table(leadData);
  console.log("🕒 Date :", new Date().toLocaleString());
  console.groupEnd();

  fetch("/log-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "lead_form",
      data: leadData,
      received_at: new Date().toISOString()
    }),
  }).catch((err) => {
    console.error("❌ Erreur log local :", err);
  });
};

// ---- ENVOI AU SERVEUR (TON APP) ----
const sendToServer = async (leadData) => {
  // 🔁 À MODIFIER : ton URL + ta route
  const ENDPOINT = "https://oepnjcmswu.eu08.qoddiapp.com/leads_ite";

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    });

    // si ton backend renvoie du JSON
    const contentType = response.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : await response.text();

    console.log("📬 Réponse serveur :", response.status, payload);
  } catch (error) {
    console.error("❌ Erreur serveur :", error);
  }
};

export default function EligibilityForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    propertyType: '',
    propertySize: '',
    heatingSystem: ''
  });
  const [hiddenFields, setHiddenFields] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    code: '',
    code_postal: '',
    utm_source: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Extract hidden fields from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    setHiddenFields({
      civilite: urlParams.get('civilite') || '',
      nom: urlParams.get('nom') || '',
      prenom: urlParams.get('prenom') || '',
      email: urlParams.get('email') || '',
      telephone: urlParams.get('telephone') || '',
      code: urlParams.get('code') || '',
      code_postal: urlParams.get('code_postal') || '',
      utm_source: urlParams.get('utm_source') || ''
    });
  }, []);

  const questions = [
    {
      id: 1,
      question: "Quel est votre type de logement ?",
      options: [
        { value: 'house', label: 'Maison', emoji: '✅' },
        { value: 'apartment', label: 'Appartement', emoji: '❌' }
      ],
      key: 'propertyType'
    },
    {
      id: 2,
      question: "Vous êtes ?",
      options: [
        { value: 'owner', label: 'Propriétaire', emoji: '✅' },
        { value: 'tenant', label: 'Locataire', emoji: '❌' }
      ],
      key: 'ownershipStatus'
    }
  ];

  const currentQuestion = questions[step - 1];


  const handleAnswer = async (value) => {
    const updated = { ...answers, [currentQuestion.key]: value };
    setAnswers(updated);

    if (step < questions.length) {
      setTimeout(() => setStep(step + 1), 250);
      return;
    }

    // Dernière question → envoi
    setIsSubmitting(true);

    const leadData = {
      ...hiddenFields,
      property_type: updated.propertyType,
      ownership_status: updated.ownershipStatus,
      timestamp: new Date().toISOString(),
      page: window.location.href,
    };

    // Log local
    logLead(leadData);

    // Envoi vers ton backend
    sendToServer(leadData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
    }, 600);
  };

  return (
    <Card className="bg-white border-2 shadow-xl max-w-3xl mx-auto" style={{ borderColor: '#2E7D32', borderRadius: '15px' }}>
      <CardHeader className="text-center pb-3 md:pb-6 p-3 md:p-6" style={{ backgroundColor: '#F8F9FA', borderTopLeftRadius: '13px', borderTopRightRadius: '13px' }}>
        <div className="flex justify-center gap-2 md:gap-3 mt-2 md:mt-4">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg transition-all duration-300"
              style={{
                backgroundColor: num <= step || isComplete ? '#2E7D32' : '#E0E0E0'
              }}
            >
              {num < step || isComplete ? <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6" /> : num}
            </div>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-3 md:p-8">
        {!isComplete ? (
          <>
            {isSubmitting ? (
              <div className="text-center py-8 md:py-12">
                <Loader2 className="w-12 h-12 md:w-16 md:h-16 mx-auto animate-spin mb-3 md:mb-4" style={{ color: '#2E7D32' }} />
                <p className="text-base md:text-lg font-semibold" style={{ color: '#1B5E20' }}>
                  Traitement de votre demande...
                </p>
              </div>
            ) : (
              <div className="space-y-3 md:space-y-6">
                <h3 className="text-base md:text-xl font-bold text-center mb-3 md:mb-8" style={{ color: '#1B5E20' }}>
                  {currentQuestion.question}
                </h3>
                
                <div className="grid gap-2 md:gap-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="p-3 md:p-5 text-left border-2 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                      style={{
                        borderColor: answers[currentQuestion.key] === option.value ? '#2E7D32' : '#E0E0E0',
                        backgroundColor: answers[currentQuestion.key] === option.value ? '#E8F5E9' : 'white',
                        borderRadius: '12px'
                      }}
                    >
                      <span className="text-sm md:text-lg font-semibold" style={{ color: '#1B5E20' }}>
                        {option.label} {option.emoji && <span className="ml-2">{option.emoji}</span>}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-4 md:py-8">
            <div className="mb-3 md:mb-6">
              <CheckCircle2 className="w-12 h-12 md:w-20 md:h-20 mx-auto" style={{ color: '#4CAF50' }} />
            </div>
            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4" style={{ color: '#4CAF50' }}>
              Félicitations !
            </h3>
            <p className="text-base md:text-xl" style={{ color: '#1B5E20' }}>
              Vous êtes éligible aux aides de l'État pour votre installation.
            </p>
            <p className="text-xs md:text-sm mt-4 md:mt-6 text-gray-600">
              Un conseiller vous contactera dans les 24h
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}