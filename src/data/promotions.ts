export interface Promotion {
  id: number;
  title: string;
  description: string;
  days: string;
  price: string;
  highlight?: boolean;
}

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Lunes de Pozole",
    description:
      "Arrancamos la semana con un pozole rojo como el de la abuela. Incluye tostadas, rábano, lechuga y orégano.",
    days: "Todos los lunes",
    price: "$99 MXN",
    highlight: true,
  },
  {
    id: 2,
    title: "Miércoles 2×1 en Enchiladas",
    description:
      "Pide tus enchiladas favoritas — verdes, rojas o de mole — y la segunda orden va por cuenta de la casa.",
    days: "Todos los miércoles",
    price: "2×1",
  },
  {
    id: 3,
    title: "Comida Corrida",
    description:
      "Sopa del día, plato fuerte, agua fresca, postre y tortillas recién hechas. Como comer en casa de mamá.",
    days: "Lunes a sábado",
    price: "$89 MXN",
    highlight: true,
  },
  {
    id: 4,
    title: "Viernes de Mole",
    description:
      "Nuestro mole poblano de receta familiar con pollo, arroz rojo y tortillas hechas a mano. ¡No te lo pierdas!",
    days: "Todos los viernes",
    price: "$119 MXN",
  },
];
