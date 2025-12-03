import { type Product, type Promocion } from '../types';
export const products: Product[] = [
// Productos de Farmacia
{
id: 1,
nombre: "Vitamina C 1000mg",
categoria: "Vitaminas",
precio: 12.99,
img: "/productos/vitamina-c.jpg",
descripcion: "Suplemento de vitamina C para reforzar el sistema inmunológico",
stock: true,
tipo: 'farmacia',
laboratorio: "Bayer"
},
{
id: 2,
nombre: "Ibuprofeno 800mg",
categoria: "Analgésicos",
precio: 3.99,
img: "/productos/ibuprofeno.jpg",
descripcion: "Antiinflamatorio y analgésico para dolor moderado",
stock: true,
tipo: 'farmacia',
laboratorio: "Pfizer"
},
{
id: 3,
nombre: "Pañales Huggies 30u",
categoria: "Bebé y Mama",
precio: 17.99,
img: "/productos/panales.jpg",
descripcion: "Pañales ultra comfort para bebés",
stock: true,
tipo: 'farmacia',
marca: "Huggies"
},

{
id: 4,
nombre: "Papel A4 100 hojas",
categoria: "Oficina",
precio: 4.50,
img: "/productos/papel-a4.jpg",
descripcion: "Resma de papel tamaño carta, ideal para impresiones",
stock: true,
tipo: 'libreria',
marca: "Chamex"
},
{
id: 5,
nombre: "Lápices de colores",
categoria: "Escolares",
precio: 8.99,
img: "/productos/lapices.jpg",
descripcion: "Set de 24 lápices de colores",
stock: true,
tipo: 'libreria',
marca: "Faber-Castell"
},


{
id: 6,
nombre: "Cuaderno Universitario",
categoria: "Escolares",
precio: 2.50,
img: "/productos/cuaderno.jpg",
descripcion: "Cuaderno de 100 hojas rayado",
stock: true,
tipo: 'libreria',
marca: "Norma"
}
];

export const promociones: Promocion[] = [
{
id: 1,
titulo: "Promos Navideñas",
descripcion: "Rebajas de hasta 50% sin descuento",
img: "/promos/navidad.jpg",
link: "/promociones",
tipo: 'farmacia'
},
{
id: 2,
titulo: "35% OFF",
descripcion: "Al hacer tus compras en la web",
img: "/promos/web-discount.jpg",
link: "/promociones",
tipo: 'libreria'
}
];
// Productos destacados para los carruseles
export const productosDestacadosFarmacia = products.filter(p => p.tipo === 'farmacia').slice(0, 4);
export const productosDestacadosLibreria = products.filter(p => p.tipo === 'libreria').slice(0, 4);