"use client";

import { useState } from "react";
import { menuItems, menuCategories, type MenuCategory } from "@/data/menu";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "Todos">(
    "Todos"
  );

  const filtered =
    activeCategory === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="bg-cream-dark px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-green-dark sm:text-4xl">
            Nuestro Menú
          </h2>
          <div className="mx-auto mt-2 h-1 w-20 rounded bg-terracotta" />
          <p className="mt-4 text-lg text-brown">
            Platillos preparados con el sazón de siempre
          </p>
        </div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("Todos")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              activeCategory === "Todos"
                ? "bg-terracotta text-cream"
                : "bg-white text-brown hover:bg-terracotta/10"
            }`}
          >
            Todos
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "bg-terracotta text-cream"
                  : "bg-white text-brown hover:bg-terracotta/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-green-dark">
                    {item.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-gold/20 px-2 py-0.5 text-xs font-medium text-gold-dark">
                    {item.category}
                  </span>
                </div>
                <span className="whitespace-nowrap rounded-full bg-terracotta px-3 py-1 text-sm font-bold text-cream">
                  ${item.price} MXN
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brown-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
