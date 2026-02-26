export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

export type MenuCategory = "Desayunos" | "Platos Fuertes" | "Antojitos" | "Bebidas";

export const menuCategories: MenuCategory[] = [
  "Desayunos",
  "Platos Fuertes",
  "Antojitos",
  "Bebidas",
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chilaquiles Verdes con Pollo",
    description:
      "Totopos bañados en salsa verde casera, pollo deshebrado, crema, queso fresco y cebolla.",
    price: 95,
    category: "Desayunos",
  },
  {
    id: 2,
    name: "Huevos Rancheros",
    description:
      "Dos huevos estrellados sobre tortilla con salsa ranchera, frijoles refritos y arroz.",
    price: 79,
    category: "Desayunos",
  },
  {
    id: 3,
    name: "Molletes Especiales",
    description:
      "Bolillo con frijoles, queso gratinado, pico de gallo y aguacate. Opción con chorizo.",
    price: 69,
    category: "Desayunos",
  },
  {
    id: 4,
    name: "Enchiladas de Mole Poblano",
    description:
      "Tres enchiladas rellenas de pollo bañadas en mole poblano de la receta de la abuela, con ajonjolí y crema.",
    price: 129,
    category: "Platos Fuertes",
  },
  {
    id: 5,
    name: "Pozole Rojo",
    description:
      "Caldo de maíz cacahuazintle con carne de cerdo, lechuga, rábano, tostadas y orégano.",
    price: 119,
    category: "Platos Fuertes",
  },
  {
    id: 6,
    name: "Chiles Rellenos de Picadillo",
    description:
      "Chiles poblanos capeados rellenos de picadillo, bañados en caldillo de jitomate.",
    price: 115,
    category: "Platos Fuertes",
  },
  {
    id: 7,
    name: "Tacos Dorados de Papa",
    description:
      "Seis tacos crujientes de papa con lechuga, crema, queso cotija y salsa verde.",
    price: 85,
    category: "Antojitos",
  },
  {
    id: 8,
    name: "Tamales Oaxaqueños",
    description:
      "Dos tamales de mole negro con pollo envueltos en hoja de plátano. Servidos con atole.",
    price: 75,
    category: "Antojitos",
  },
  {
    id: 9,
    name: "Quesadillas de Flor de Calabaza",
    description:
      "Tres quesadillas de maíz con flor de calabaza, queso Oaxaca y epazote.",
    price: 89,
    category: "Antojitos",
  },
  {
    id: 10,
    name: "Agua Fresca del Día",
    description:
      "Litro de agua fresca natural: horchata, jamaica, limón con chía o tamarindo.",
    price: 45,
    category: "Bebidas",
  },
  {
    id: 11,
    name: "Café de Olla",
    description:
      "Café preparado en olla de barro con piloncillo, canela y anís estrella.",
    price: 35,
    category: "Bebidas",
  },
  {
    id: 12,
    name: "Atole de Mazapán",
    description:
      "Atole cremoso con sabor a mazapán, preparado con maíz y leche. Especialidad de la casa.",
    price: 40,
    category: "Bebidas",
  },
];
