export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Don Roberto Garza",
    text: "Tenía años buscando unos chilaquiles como los que hacía mi madre. Los de Doña Lupe son igualitos — me transportan a la cocina de mi infancia. Vengo cada sábado sin falta.",
    rating: 5,
  },
  {
    id: 2,
    name: "María Elena Treviño",
    text: "El mole de Doña Lupe es una cosa seria. Se nota que es receta de familia, no de sobre. Además el trato es tan cálido que uno se siente como en casa de la abuelita.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Adrián Villarreal",
    text: "La comida corrida es la mejor relación calidad-precio de toda la zona. Por $89 pesos comes como rey. Se lo recomiendo a todos mis compañeros de trabajo.",
    rating: 4,
  },
  {
    id: 4,
    name: "Lupita Rodríguez",
    text: "Pedimos el servicio para un bautizo de 50 personas y todo salió perfecto. Los tamales y el pozole estaban deliciosos. Doña Lupe se encargó de todo con mucho cariño.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jorge Martínez Cantú",
    text: "El café de olla y los tamales oaxaqueños son mi combo favorito para el desayuno del domingo. Un lugar con sazón auténtico que ya no se encuentra fácilmente.",
    rating: 5,
  },
];
