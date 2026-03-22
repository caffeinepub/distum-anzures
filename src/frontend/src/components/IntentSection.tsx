import { Check, Home, TrendingUp, X } from "lucide-react";
import { useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

const WA_NUMBER = "5215521864824";
const WA_MSG = encodeURIComponent(
  "Hola, me interesa conocer más sobre Distum Anzures. ¿Podrían enviarme información sobre disponibilidad y precios?",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const LIVING_BENEFITS_ES = [
  {
    icon: "🌆",
    title: "Vistas panorámicas",
    desc: "25 niveles con vistas 360° de la Ciudad de México",
  },
  {
    icon: "🏋️",
    title: "Sky Gym & Sky Garden",
    desc: "Amenidades exclusivas en las alturas",
  },
  {
    icon: "🛎️",
    title: "Concierge 24/7",
    desc: "Servicio personalizado estilo hotel cinco estrellas",
  },
  {
    icon: "🔐",
    title: "Seguridad total",
    desc: "Sistema de acceso controlado y vigilancia",
  },
];

const LIVING_BENEFITS_EN = [
  {
    icon: "🌆",
    title: "Panoramic views",
    desc: "25 levels with 360° views of Mexico City",
  },
  {
    icon: "🏋️",
    title: "Sky Gym & Sky Garden",
    desc: "Exclusive amenities at altitude",
  },
  {
    icon: "🛎️",
    title: "24/7 Concierge",
    desc: "Personalized five-star hotel style service",
  },
  {
    icon: "🔐",
    title: "Total security",
    desc: "Controlled access and surveillance system",
  },
];

const INVEST_BENEFITS_ES = [
  { text: "Plusvalía documentada 17.48% anual en Anzures" },
  { text: "Cap rate 4.77% renta tradicional real" },
  { text: "Renta Airbnb estimada 8.2% anual" },
  { text: "Entrega inmediata — renta desde el mes 1" },
  { text: "Administración integral disponible" },
];

const INVEST_BENEFITS_EN = [
  { text: "Documented 17.48% annual appreciation in Anzures" },
  { text: "4.77% real traditional rental cap rate" },
  { text: "Estimated 8.2% annual Airbnb yield" },
  { text: "Immediate delivery — income from month 1" },
  { text: "Full property management available" },
];

export default function IntentSection() {
  const { lang, t } = useLang();
  const [modal, setModal] = useState<"living" | "investment" | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();

  const benefits = lang === "es" ? LIVING_BENEFITS_ES : LIVING_BENEFITS_EN;
  const investBenefits =
    lang === "es" ? INVEST_BENEFITS_ES : INVEST_BENEFITS_EN;

  return (
    <section
      ref={sectionRef}
      id="calculator"
      className="reveal py-20 md:py-28 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest gold-text mb-3">
            {t("TU DECISIÓN", "YOUR CHOICE")}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            {t("¿Qué estás buscando?", "What are you looking for?")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => setModal("living")}
            data-ocid="intent.primary_button"
            className="bg-card rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 border border-transparent"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(201,162,91,0.15)" }}
            >
              <Home size={26} className="gold-text" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {t("Vivir", "Living")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Encuentra tu hogar ideal en el corazón de CDMX con todas las amenidades de lujo.",
                "Find your ideal home in the heart of CDMX with all luxury amenities.",
              )}
            </p>
            <span className="inline-block mt-4 text-xs font-bold tracking-wider gold-text">
              {t("VER BENEFICIOS →", "VIEW BENEFITS →")}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setModal("investment")}
            data-ocid="intent.secondary_button"
            className="bg-card rounded-2xl p-8 text-left transition-all duration-300 hover:scale-105 border border-transparent"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(201,162,91,0.15)" }}
            >
              <TrendingUp size={26} className="gold-text" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {t("Invertir", "Investment")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Maximiza tu patrimonio con una inversión en el mercado inmobiliario más dinámico.",
                "Maximize your wealth with an investment in the most dynamic real estate market.",
              )}
            </p>
            <span className="inline-block mt-4 text-xs font-bold tracking-wider gold-text">
              {t("CALCULAR ROI →", "CALCULATE ROI →")}
            </span>
          </button>
        </div>
      </div>

      {/* Living Modal */}
      {modal === "living" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          data-ocid="intent.modal"
        >
          <div
            role="presentation"
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.75)" }}
            onClick={() => setModal(null)}
            onKeyDown={(e) => e.key === "Escape" && setModal(null)}
          />
          <div className="glass-modal-bg relative w-full max-w-lg p-8 z-10">
            <button
              type="button"
              onClick={() => setModal(null)}
              data-ocid="intent.close_button"
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X size={20} />
            </button>
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(201,162,91,0.15)" }}
            >
              <Home size={22} className="gold-text" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              {t("Vivir en Distum Anzures", "Living at Distum Anzures")}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {t(
                "Experimenta el lujo y la comodidad en el corazón de la ciudad.",
                "Experience luxury and comfort in the heart of the city.",
              )}
            </p>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <span className="text-2xl">{b.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {b.title}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => {
                  setModal(null);
                  document
                    .querySelector("#properties")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="intent.confirm_button"
                className="btn-gold w-full py-3 rounded-lg text-xs font-bold tracking-wider"
              >
                {t("VER PROPIEDADES", "VIEW PROPERTIES")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Investment Modal — benefits + link to full calculator */}
      {modal === "investment" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          data-ocid="calculator.modal"
        >
          <div
            role="presentation"
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.75)" }}
            onClick={() => setModal(null)}
            onKeyDown={(e) => e.key === "Escape" && setModal(null)}
          />
          <div className="glass-modal-bg relative w-full max-w-lg p-8 z-10">
            <button
              type="button"
              onClick={() => setModal(null)}
              data-ocid="calculator.close_button"
              className="absolute top-4 right-4 text-muted-foreground hover:text-white"
            >
              <X size={20} />
            </button>

            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: "rgba(201,162,91,0.15)" }}
            >
              <TrendingUp size={22} className="gold-text" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-1">
              {t("Invertir en Distum Anzures", "Invest in Distum Anzures")}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {t(
                "Datos reales de la zona. Sin especulación.",
                "Real area data. No speculation.",
              )}
            </p>

            <div className="space-y-3 mb-8">
              {investBenefits.map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201,162,91,0.2)" }}
                  >
                    <Check size={10} className="gold-text" />
                  </span>
                  <span className="text-white/85 text-sm leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <button
                type="button"
                onClick={() => {
                  setModal(null);
                  setTimeout(() => {
                    document
                      .querySelector("#investment")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                data-ocid="calculator.confirm_button"
                className="btn-gold w-full py-3 rounded-lg text-xs font-bold tracking-wider"
              >
                {t(
                  "VER CALCULADORA DE INVERSIÓN →",
                  "VIEW INVESTMENT CALCULATOR →",
                )}
              </button>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="calculator.secondary_button"
                className="flex items-center justify-center w-full py-3 rounded-lg text-xs font-bold tracking-wider text-white/70 hover:text-white transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {t("HABLAR CON UN ASESOR", "TALK TO AN ADVISOR")}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
