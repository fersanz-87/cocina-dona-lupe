const schedule = [
  { days: "Lunes a Sábado", hours: "8:00 – 21:00" },
  { days: "Domingo", hours: "9:00 – 17:00" },
];

export default function Location() {
  return (
    <section id="ubicacion" className="bg-cream px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-green-dark sm:text-4xl">
            Encuéntranos
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-terracotta" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Ubicación de Cocina Doña Lupe en Monterrey"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0!2d-100.3161!3d25.6866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQxJzExLjgiTiAxMDDCsDE4JzU4LjAiVw!5e0!3m2!1ses-419!2smx!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-green-dark">
                    Dirección
                  </h3>
                  <p className="mt-1 text-brown-light">
                    Calle Morelos 342, Col. Centro<br />
                    Monterrey, Nuevo León, C.P. 64000
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-green-dark">
                    Teléfono
                  </h3>
                  <p className="mt-1 text-brown-light">
                    <a
                      href="tel:+528112345678"
                      className="transition-colors hover:text-terracotta"
                    >
                      (81) 1234-5678
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-green-dark">
                    Horario
                  </h3>
                  <div className="mt-1 space-y-1">
                    {schedule.map((s) => (
                      <p key={s.days} className="text-brown-light">
                        <span className="font-medium text-brown">
                          {s.days}:
                        </span>{" "}
                        {s.hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
