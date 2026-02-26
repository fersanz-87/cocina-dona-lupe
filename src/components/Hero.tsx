import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop"
        alt="Mesa con platillos de comida mexicana tradicional casera"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-cream drop-shadow-lg sm:text-5xl md:text-7xl">
          Cocina Doña Lupe
        </h1>
        <p className="mt-4 text-lg font-medium text-cream/90 drop-shadow-md sm:text-xl md:text-2xl">
          El sazón de casa, en el corazón de Monterrey
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#menu"
            className="inline-block rounded-full bg-terracotta px-8 py-3 font-body text-base font-semibold text-cream shadow-lg transition-colors hover:bg-terracotta-dark"
          >
            Ver Nuestro Menú
          </a>
          <a
            href="#contacto"
            className="inline-block rounded-full border-2 border-cream px-8 py-3 font-body text-base font-semibold text-cream transition-colors hover:bg-cream hover:text-green-dark"
          >
            Reserva tu Mesa
          </a>
        </div>
      </div>
    </section>
  );
}
