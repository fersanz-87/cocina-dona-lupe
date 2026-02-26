import { promotions } from "@/data/promotions";

export default function Promotions() {
  return (
    <section id="promociones" className="bg-green-dark px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Promociones y Especiales
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-gold" />
          <p className="mt-4 text-lg text-cream/80">
            Porque en Cocina Doña Lupe siempre hay un buen pretexto para venir a comer
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1 ${
                promo.highlight
                  ? "bg-terracotta text-cream"
                  : "bg-cream text-brown"
              }`}
            >
              {promo.highlight && (
                <div className="absolute right-0 top-0 rounded-bl-xl bg-gold px-3 py-1 text-xs font-bold text-green-dark">
                  Popular
                </div>
              )}
              <h3 className="font-heading text-xl font-bold">{promo.title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  promo.highlight ? "text-cream/90" : "text-brown-light"
                }`}
              >
                {promo.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`text-xs font-medium ${
                    promo.highlight ? "text-cream/70" : "text-brown-light"
                  }`}
                >
                  {promo.days}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${
                    promo.highlight
                      ? "bg-cream/20 text-cream"
                      : "bg-terracotta/10 text-terracotta"
                  }`}
                >
                  {promo.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
