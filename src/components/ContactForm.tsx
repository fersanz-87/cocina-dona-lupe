"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const reasons = [
  { value: "", label: "Selecciona un motivo" },
  { value: "reservacion", label: "Reservación" },
  { value: "evento", label: "Evento privado" },
  { value: "comentario", label: "Comentario general" },
  { value: "domicilio", label: "Servicio a domicilio" },
];

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <section id="contacto" className="bg-green-dark px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-cream sm:text-4xl">
            Contáctanos
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-gold" />
          <p className="mt-4 text-lg text-cream/80">
            ¿Quieres reservar mesa, organizar un evento o simplemente saludarnos?
            Escríbenos.
          </p>
        </div>

        <form action={formAction} className="mt-10 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cream/90">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              className="mt-1 w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-cream placeholder-cream/40 ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="Tu nombre completo"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cream/90">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-cream placeholder-cream/40 ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="tu@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-cream/90">
              Teléfono{" "}
              <span className="text-cream/50">(opcional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-cream placeholder-cream/40 ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="(81) 1234-5678"
            />
          </div>

          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-cream/90">
              Motivo *
            </label>
            <select
              id="reason"
              name="reason"
              required
              defaultValue=""
              className="mt-1 w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-cream ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-2 focus:ring-gold focus:outline-none"
            >
              {reasons.map((r) => (
                <option
                  key={r.value}
                  value={r.value}
                  disabled={r.value === ""}
                  className="bg-green-dark text-cream"
                >
                  {r.label}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-cream/90">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              rows={4}
              className="mt-1 w-full resize-none rounded-xl border-0 bg-white/10 px-4 py-3 text-cream placeholder-cream/40 ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-2 focus:ring-gold focus:outline-none"
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          {/* Feedback */}
          {state.status !== "idle" && (
            <div
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                state.status === "success"
                  ? "bg-green-light/20 text-green-light"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {state.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-xl bg-terracotta px-6 py-3 text-base font-semibold text-cream shadow-lg transition-colors hover:bg-terracotta-dark disabled:opacity-60"
          >
            {isPending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
