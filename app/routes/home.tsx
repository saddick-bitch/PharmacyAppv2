import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useTheme } from '../../src/context/Themecontext';
import { SUCURSALES, PRODUCTOS_EJEMPLO } from '../../src/data/constants';
import SmartSearch from '../../src/Layout/ui/smartsearch';
import ProductCard from '../components/ProductCard';
export function meta() {
return [
{ title: "Farmacias San Rafael & Librerías Marcela" },
{ name: "description", content: "Tu farmacia y librería de confianza en El Salvador" }
];
}
export default function Home() {
const { storeType, setStoreType } = useTheme();
const [menuOpen, setMenuOpen] = useState(false);
const [selectedSucursal, setSelectedSucursal] = useState(SUCURSALES[0]);
const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
const colorPrimario = storeType === 'farmacia' ? '#114b8c' : '#f9d000';
const colorTexto = storeType === 'farmacia' ? 'white' : '#114b8c';
// Datos de promociones por tipo
const promociones = storeType === 'farmacia'
? [
{ id: 1, titulo: 'Promos Navideñas', subtitulo: 'Rebajas de hasta 50%', img: '/promo-navidad.jpg' },
{ id: 2, titulo: 'Black Friday', subtitulo: 'Descuentoespeciales', img: '/promo-black.jpg' },
{ id: 3, titulo: 'Día de la Salud', subtitulo: 'Cuida tu bienestar', img: '/promo-salud.jpg' }
]
: [

  { id: 1, titulo: '35% OFF', subtitulo: 'Al hacer tus compras en la web', img: '/promo-web.jpg' },
{ id: 2, titulo: 'Regreso a Clases', subtitulo: 'Todo lo que necesitas', img: '/promo-escolar.jpg' },
{ id: 3, titulo: 'Arte y Creatividad', subtitulo: 'Inspírate', img: '/promo-arte.jpg' }
];

// Productos destacados filtrados por tipo
const productosDestacados = PRODUCTOS_EJEMPLO
.filter(p => String(p.tipo).toLowerCase() === storeType)
.slice(0, 4);
// Auto-advance slideshow
useEffect(() => {
const interval = setInterval(() => {
setCurrentPromoIndex((prev) => (prev + 1) % promociones.length);
}, 5000);
return () => clearInterval(interval);
}, [promociones.length]);
return (
<div className="min-h-screen bg-gray-50">
{/* HEADER */}
<header className="bg-white shadow-md sticky top-0 z-50">
{/* Tabs Farmacia / Librería */}
<div className="flex">
<button
onClick={() => { setStoreType('farmacia'); setMenuOpen(false); }}
className="flex-1 py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3"
style={{
backgroundColor: storeType === 'farmacia' ? '#114b8c' : '#f5f5f5',
color: storeType === 'farmacia' ? 'white' : '#666'
}}
>
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">

<div className="text-2xl">💊</div>
</div>
<div className="text-left hidden sm:block">
<div className="font-bold text-sm">FARMACIAS</div>
<div className="font-bold text-lg">SAN RAFAEL</div>
</div>
</button>
<button
onClick={() => { setStoreType('libreria'); setMenuOpen(false); }}
className="flex-1 py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3"
style={{
backgroundColor: storeType === 'libreria' ? '#f9d000' : '#f5f5f5',
color: storeType === 'libreria' ? '#114b8c' : '#666'
}}
>
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
<div className="text-2xl">📚</div>
</div>
<div className="text-left hidden sm:block">
<div className="font-bold text-sm">LIBRERÍAS</div>
<div className="font-bold text-lg">MARCELA</div>
</div>
</button>
</div>
{/* Barra de navegación */}
<div className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 py-3">
<div className="flex items-center justify-between gap-4">

{/* Menú Hamburguesa (Móvil) */}
<button
onClick={() => setMenuOpen(!menuOpen)}
className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
style={{ color: colorPrimario }}

>
{menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>
{/* Logo (solo móvil) */}
<div className="lg:hidden text-xl font-bold" style={{ color: colorPrimario }}>
{storeType === 'farmacia' ? '💊' : '📚'}
</div>
{/* Buscador */}
<div className="flex-1 max-w-md">
<SmartSearch products={PRODUCTOS_EJEMPLO} tipo={storeType} />
</div>
{/* Selector de Sucursal */}
<select
value={selectedSucursal.id}
onChange={(e) => {
const sucursal = SUCURSALES.find(s => s.id === e.target.value);
if (sucursal) setSelectedSucursal(sucursal);
}}
className="hidden sm:block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-gray-900 text-sm"
style={{ borderColor: colorPrimario }}
>
{SUCURSALES.map(sucursal => (
<option key={sucursal.id} value={sucursal.id}>
📍 {sucursal.nombre}
</option>
))}
</select>
</div>
{/* Menú Horizontal (Desktop) */}
<nav className="hidden lg:flex items-center gap-6 mt-3 text-sm font-semibold">
<a href="/" className="hover:opacity-70 transition-opacity" style={{ color: colorPrimario }}>
Inicio
</a>
<a href="/promociones" className="hover:opacity-70 transition-opacity" style={{ color: colorPrimario }}>
Promociones
</a>
<a href="/rafapuntos" className="hover:opacity-70 transition-opacity" style={{ color: colorPrimario }}>
Rafapuntos
</a>
<a href="/conocenos" className="hover:opacity-70 transition-opacity" style={{ color: colorPrimario }}>
Conócenos
</a>
<a href="/contacto" className="hover:opacity-70 transition-opacity" style={{ color: colorPrimario }}>
Contacto
</a>
</nav>
</div>
</div>
</header>
{/* Menú Lateral (Móvil) */}
<div
className={`fixed top-[180px] left-0 h-[calc(100vh-180px)] w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
menuOpen ? 'translate-x-0' : '-translate-x-full'
}`}
>

<div className="p-6">
<h3 className="font-bold text-lg mb-4" style={{ color: colorPrimario }}>
Menú
</h3>
<nav className="space-y-2">
{['Inicio', 'Promociones', 'Rafapuntos', 'Conócenos', 'Contacto'].map((item) => (
<a
key={item}
href={`/${item.toLowerCase()}`}
className="block px-4 py-2 rounded-lg transition-colors hover:bg-gray-100"
style={{ color: colorPrimario }}
onClick={() => setMenuOpen(false)}
>
{item}
</a>
))}
</nav>
</div>
</div>

{/* Overlay */}
{menuOpen && (
<div
className="fixed inset-0 bg-black bg-opacity-50 z-30"
onClick={() => setMenuOpen(false)}
/>
)}
{/* MAIN CONTENT */}
<main className="max-w-7xl mx-auto px-4 py-8">
{/* SLIDESHOW DE PROMOCIONES */}
<section className="mb-12">
<h2 className="text-3xl font-bold mb-6" style={{ color: colorPrimario }}>
PROMOCIONES
</h2>
<div className="relative h-64 sm:h-80 bg-gradient-to-r rounded-xl overflow-hidden shadow-xl"
style={{
backgroundImage: storeType === 'farmacia'
? 'linear-gradient(135deg, #1a5490 0%, #0d3a6b 100%)'
: 'linear-gradient(135deg, #ffd000 0%, #e6b800 100%)'
}}>

<div className="absolute inset-0 flex items-center justify-center text-white p-8">
<div className="text-center">
<h3 className="text-4xl font-bold mb-2"
style={{ color: storeType === 'libreria' ? '#114b8c' : 'white' }}>
{promociones[currentPromoIndex].titulo}
</h3>
<p className="text-xl"
style={{ color: storeType === 'libreria' ? '#114b8c' : 'white' }}>
{promociones[currentPromoIndex].subtitulo}
</p>
<a
href="/promociones"
className="inline-block mt-6 px-8 py-3 bg-white rounded-lg font-semibold hover:scale-105 transition-transform"
style={{ color: colorPrimario }}
>
Ver promociones
</a>
</div>
</div>

{/* Indicadores */}
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
{promociones.map((_, index) => (
<button
key={index}
onClick={() => setCurrentPromoIndex(index)}
className={`w-3 h-3 rounded-full transition-all ${
index === currentPromoIndex ? 'bg-white scale-125' : 'bg-white/50'
}`}
/>
))}
</div>
</div>
</section>

{/* PRODUCTOS DESTACADOS */}
<section className="mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-bold" style={{ color: colorPrimario }}>
Productos Destacados
</h2>
<a
href="/productos-destacados"
className="text-sm font-semibold hover:underline"
style={{ color: colorPrimario }}
>
Ver todos →
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{productosDestacados.map((producto) => (
<ProductCard
key={producto.id}
producto={producto}
sucursal={selectedSucursal}
colorPrimario={colorPrimario}
tipo={storeType}
/>
))}
</div>
</section>

{/* CONOCE LOS RAFAPUNTOS */}
<section className="mb-12 bg-white rounded-xl shadow-md p-8">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl font-bold mb-4" style={{ color: colorPrimario }}>
Conoce los Rafapuntos
</h2>
<p className="text-gray-700 mb-6">
Gana puntos en cada compra y canjéalos por increíbles descuentos y productos exclusivos.
</p>
<a
href="/rafapuntos"
className="inline-block px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
style={{ backgroundColor: colorPrimario }}
>
Saber más
</a>
</div>
<div className="text-8xl text-center">
🎁
</div>
</div>
</section>
{/* ACERCA DE NOSOTROS */}
<section className="mb-12">
<h2 className="text-3xl font-bold mb-6" style={{ color: colorPrimario }}>
Acerca de nosotros
</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl shadow-md overflow-hidden">
<div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
<span className="text-6xl">🏥</span>
</div>
<div className="p-6">
<h3 className="font-bold text-xl mb-2">La salud cercana</h3>
<p className="text-gray-600 text-sm">
Nuestra misión es brindar salud y bienestar a cada familia salvadoreña con calidad y calidez.
</p>
</div>
</div>
<div className="bg-white rounded-xl shadow-md overflow-hidden">

<div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
<span className="text-6xl">🏪</span>
</div>
<div className="p-6">
<h3 className="font-bold text-xl mb-2">Nuestras sucursales</h3>
<p className="text-gray-600 text-sm">
Estamos presentes en múltiples ubicaciones para estar cerca de ti cuando nos necesites.
</p>
</div>
</div>
</div>
</section>
{/* COMENTARIOS */}
<section className="mb-12">
<h2 className="text-3xl font-bold mb-6" style={{ color: colorPrimario }}>
Comentarios
</h2>
<div className="grid md:grid-cols-3 gap-6">
{[
{ nombre: 'Carlos Ramírez', comentario: 'Excelente atención y productos de calidad.' },
{ nombre: 'Ana Mendoza', comentario: 'Los mejores precios y siempre encuentro lo que busco.' },
{ nombre: 'Roberto López', comentario: 'Muy buena experiencia, personal amable.' }
].map((testimonio, index) => (
<div key={index} className="bg-white rounded-xl shadow-md p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
<span className="text-2xl">👤</span>
</div>
<div>
<p className="font-semibold">{testimonio.nombre}</p>
<div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
</div>
</div>
<p className="text-gray-600 text-sm">{testimonio.comentario}</p>
</div>
))}
</div>
</section>
</main>
{/* FOOTER */}
<footer style={{ backgroundColor: colorPrimario }} className="text-white mt-12">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h3 className="font-bold text-lg mb-4">
{storeType === 'farmacia' ? 'Farmacia San Rafael' : 'Librerías Marcela'}
</h3>
<p className="text-sm opacity-90">
{storeType === 'farmacia'
? 'Tu salud es nuestra prioridad'
: 'Inspirando conocimiento y creatividad'}
</p>
</div>
<div>
<h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
<ul className="space-y-2 text-sm opacity-90">
<li><a href="/" className="hover:underline">Inicio</a></li>
<li><a href="/promociones" className="hover:underline">Promociones</a></li>
<li><a href="/rafapuntos" className="hover:underline">Rafapuntos</a></li>
<li><a href="/contacto" className="hover:underline">Contacto</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Contacto</h4>
<ul className="space-y-2 text-sm opacity-90">
<li>📍 {selectedSucursal.direccion}</li>
<li>📞 {selectedSucursal.whatsapp}</li>
<li>✉️ info@{storeType === 'farmacia' ? 'sanrafael' : 'marcela'}.com</li>
</ul>
</div>
</div>
<div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-75">
<p>© 2024 {storeType === 'farmacia' ? 'Farmacia San Rafael' : 'Librerías Marcela'}. Todos los derechos reservados.</p>
</div>
</div>
</footer>
{/* BOTONES FLOTANTES */}
<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
{/* Botón de Chat */}
<a
href={`https://wa.me/${selectedSucursal.whatsapp}?text=Hola, necesito ayuda desde ${storeType === 'farmacia' ? 'Farmacias San Rafael' : 'Librerías Marcela'}`}
target="_blank"
rel="noopener noreferrer"
className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
style={{ backgroundColor: '#25D366' }}
title="Chat por WhatsApp"
>
<MessageCircle size={28} className="text-white" />
</a>

{/* Botón de Llamada */}
<a
href={`tel:${selectedSucursal.whatsapp}`}
className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
style={{ backgroundColor: colorPrimario }}
title="Llamar al Call Center"
>
<Phone size={28} className="text-white" />
</a>
</div>
</div>
);
}


