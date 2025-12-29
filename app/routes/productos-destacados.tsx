import React, { useState } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone, Search } from 'lucide-react';
import { useTheme } from '../../src/context/Themecontext';
import { SUCURSALES, PRODUCTOS_EJEMPLO } from '../../src/data/constants';
import SmartSearch from '../../src/Layout/ui/smartsearch';
import type { Product } from '../../src/types';
export function meta() {
return [
{ title: "Productos Destacados - San Rafael & Marcela" },
{ name: "description", content: "Descubre nuestros productos más populares" }
];
}
export default function ProductosDestacados() {
const { storeType, setStoreType } = useTheme();
const [menuOpen, setMenuOpen] = useState(false);
const [selectedSucursal, setSelectedSucursal] = useState(SUCURSALES[0]);
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [searchQuery, setSearchQuery] = useState('');
const [iconErrors, setIconErrors] = useState<{[key: string]: boolean}>({});

const handleIconError = (iconType: string) => {
  setIconErrors(prev => ({ ...prev, [iconType]: true }));
};
const colorPrimario = storeType === 'farmacia' ? '#114b8c' : '#f9d000';
const colorTexto = storeType === 'farmacia' ? 'white' : '#114b8c';
// Filtrar productos destacados por tipo
const productosDestacados = PRODUCTOS_EJEMPLO
.filter(p => String(p.tipo).toLowerCase() === storeType)
.slice(0, 2); // Los 2 principales destacados
// Más productos (grid de 6)
const masProductos = PRODUCTOS_EJEMPLO
.filter(p => String(p.tipo).toLowerCase() === storeType)
.slice(2, 8);

// Filtrar por búsqueda
const productosFiltrados = searchQuery.trim()
? masProductos.filter(p =>
p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
(p.categoria && p.categoria.toLowerCase().includes(searchQuery.toLowerCase()))
)
: masProductos;
const handleConsultar = (producto: Product) => {
const message = encodeURIComponent(
`Hola, me interesa este producto:\n\n` +
`📦 ${producto.nombre}\n` +
`${producto.componente ? `💊 Componente: ${producto.componente}\n` : ''}` +
`💰 Precio: $${producto.precio.toFixed(2)}\n` +
`📍 Sucursal: ${selectedSucursal.nombre}\n\n` +
`¿Está disponible?`
);
window.open(`https://wa.me/${selectedSucursal.whatsapp}?text=${message}`, '_blank');
};

const handleCategoryFilter = (categoria: string) => {
setSearchQuery(categoria);
};

const clearFilter = () => {
setSearchQuery('');
};
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
{!iconErrors.farmacia ? (
  <img src="/icons/farmacia.png" alt="Farmacia" className="w-8 h-8" onError={() => handleIconError('farmacia')} />
) : (
  <div className="text-2xl">💊</div>
)}
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
{!iconErrors.libreria ? (
  <img src="/icons/libreria.png" alt="Librería" className="w-8 h-8" onError={() => handleIconError('libreria')} />
) : (
  <div className="text-2xl">📚</div>
)}
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
<button
onClick={() => setMenuOpen(!menuOpen)}
className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
style={{ color: colorPrimario }}
>
{menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>

<div className="lg:hidden text-xl font-bold flex items-center gap-2" style={{ color: colorPrimario }}>
{!iconErrors[storeType] ? (
  <img src={storeType === 'farmacia' ? '/icons/farmacia.png' : '/icons/libreria.png'} alt={storeType === 'farmacia' ? 'Farmacia' : 'Librería'} className="w-6 h-6" onError={() => handleIconError(storeType)} />
) : (
  <span className="text-2xl">{storeType === 'farmacia' ? '💊' : '📚'}</span>
)}
<span>{storeType === 'farmacia' ? 'San Rafael' : 'Marcela'}</span>
</div>
<div className="flex-1 max-w-md">
<SmartSearch products={PRODUCTOS_EJEMPLO} tipo={storeType} />
</div>
<select
value={selectedSucursal.id}
onChange={(e) => {
const sucursal = SUCURSALES.find(s => s.id === e.target.value);
if (sucursal) setSelectedSucursal(sucursal);
}}
className="block sm:block px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 text-sm w-full sm:w-auto mt-2 sm:mt-0"
style={{ borderColor: colorPrimario }}
>
{SUCURSALES.map(sucursal => (
<option key={sucursal.id} value={sucursal.id}>
📍 {sucursal.nombre}
</option>
))}
</select>
</div>
{/* Menú Desktop */}
<nav className="hidden lg:flex items-center justify-center gap-6 mt-3 text-sm font-semibold">
<a href="/" className="hover:opacity-70" style={{ color: colorPrimario }}>Inicio</a>
<a href="/productos-destacados" className="hover:opacity-70" style={{ color: colorPrimario }}>Productos Destacados</a>
<a href="/categorias" className="hover:opacity-70" style={{ color: colorPrimario }}>Categorías</a>
<a href="/promociones" className="hover:opacity-70" style={{ color: colorPrimario }}>Promociones</a>
<a href="/rafapuntos" className="hover:opacity-70" style={{ color: colorPrimario }}>Rafapuntos</a>
<a href="/conocenos" className="hover:opacity-70" style={{ color: colorPrimario }}>Conócenos</a>
<a href="/contacto" className="hover:opacity-70" style={{ color: colorPrimario }}>Contacto</a>
</nav>
</div>
</div>
</header>
{/* Menú Lateral Móvil */}
{menuOpen && (
<>
<div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setMenuOpen(false)} />
<div className="fixed top-[200px] sm:top-[180px] left-0 h-[calc(100vh-200px)] sm:h-[calc(100vh-180px)] w-64 bg-white shadow-lg z-40">
<div className="p-6">
<h3 className="font-bold text-lg mb-4" style={{ color: colorPrimario }}>Menú</h3>
<nav className="space-y-2">
{[
  { name: 'Inicio', href: '/' },
  { name: 'Productos Destacados', href: '/productos-destacados' },
  { name: 'Categorías', href: '/categorias' },
  { name: 'Promociones', href: '/promociones' },
  { name: 'Rafapuntos', href: '/rafapuntos' },
  { name: 'Conócenos', href: '/conocenos' },
  { name: 'Contacto', href: '/contacto' }
].map((item) => (
<a
key={item.name}
href={item.href}
className="block px-4 py-2 rounded-lg hover:bg-gray-100"
style={{ color: colorPrimario }}
onClick={() => setMenuOpen(false)}
>
{item.name}
</a>
))}
</nav>
</div>
</div>
</>
)}
{/* MAIN CONTENT */}
<main className="max-w-7xl mx-auto px-4 py-8">
{/* Título */}
<h1 className="text-4xl font-bold mb-8" style={{ color: colorPrimario }}>
Productos Destacados
</h1>
{/* Productos Principales (2 grandes) */}
<div className="grid md:grid-cols-2 gap-8 mb-12">
{productosDestacados.map((producto) => (
<div key={producto.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
{/* Imagen */}
<div
className="h-64 flex items-center justify-center"
style={{ backgroundColor: `${colorPrimario}15` }}
>
{producto.img ? (
<img src={producto.img} alt={producto.nombre} className="h-full w-full object-contain p-8" />
) : (
<img src={storeType === 'farmacia' ? '/icons/farmacia.png' : '/icons/libreria.png'} alt={storeType === 'farmacia' ? 'Farmacia' : 'Librería'} className="w-24 h-24" />
)}
</div>
{/* Contenido */}
<div className="p-6">
<h2 className="text-2xl font-bold mb-3" style={{ color: colorPrimario }}>
{producto.nombre}
</h2>
{producto.componente && (
<p className="text-sm text-blue-600 mb-2">{producto.componente}</p>
)}

{producto.descripcion && (
<p className="text-gray-600 text-sm mb-4 line-clamp-3">
{producto.descripcion}
</p>
)}
{producto.marca && (
<p className="text-xs text-gray-500 mb-4">Marca: {producto.marca}</p>
)}
{producto.laboratorio && (
<p className="text-xs text-gray-500 mb-4">Laboratorio: {producto.laboratorio}</p>
)}
<div className="text-sm text-gray-500 mb-4">
Con Rafapex, tú salud al mejor precio que siempre sí ✨
</div>
{producto.categoria && (
<button
onClick={() => handleCategoryFilter(producto.categoria)}
className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 hover:opacity-80 transition-opacity"
style={{ backgroundColor: `${colorPrimario}20`, color: colorPrimario }}
>
{producto.categoria}
</button>
)}
{/* Precio y botón */}
<div className="flex items-center justify-between">
<span className="text-3xl font-bold" style={{ color: colorPrimario }}>
${producto.precio.toFixed(2)}
</span>
<button
onClick={() => handleConsultar(producto)}
className="px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
style={{ backgroundColor: colorPrimario }}
>
Pedir al instante
</button>
</div>
</div>
</div>
))}
</div>
{/* Más Productos (grid de 6) */}
<div className="mb-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-3xl font-bold" style={{ color: colorPrimario }}>
Más Productos destacados
</h2>
{/* Buscador interno */}
<div className="relative w-64">
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
<input
type="text"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
placeholder="Buscar producto"
className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-gray-900 text-sm"
style={{ borderColor: colorPrimario }}
/>
{searchQuery && (
<button
onClick={clearFilter}
className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
>
<X size={16} />
</button>
)}
</div>
</div>
{/* Indicador de filtro */}
{searchQuery && (
<div className="mb-4 flex items-center justify-between">
<span className="text-sm text-gray-600">
Mostrando productos relacionados con: <strong>"{searchQuery}"</strong>
</span>
<button
onClick={clearFilter}
className="text-xs px-3 py-1 rounded-full hover:bg-gray-100 transition-colors"
style={{ color: colorPrimario }}
>
Limpiar filtro
</button>
</div>
)}
{/* Grid de productos */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
{productosFiltrados.map((producto) => (
<div
key={producto.id}
className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
onClick={() => setSelectedProduct(producto)}
>
<div
className="h-40 flex items-center justify-center"
style={{ backgroundColor: `${colorPrimario}15` }}
>
{producto.img ? (
<img src={producto.img} alt={producto.nombre} className="h-full w-full object-contain p-4" />
) : (
<img src={storeType === 'farmacia' ? '/icons/farmacia.png' : '/icons/libreria.png'} alt={storeType === 'farmacia' ? 'Farmacia' : 'Librería'} className="w-12 h-12" />
)}
</div>
<div className="p-4">
<h3 className="font-bold text-sm mb-2 line-clamp-2">{producto.nombre}</h3>
{producto.categoria && (
<button
onClick={(e) => {
e.stopPropagation(); // Prevent card click when clicking category
handleCategoryFilter(producto.categoria);
}}
className="inline-block px-2 py-1 text-xs font-medium rounded-full mb-2 hover:opacity-80 transition-opacity"
style={{ backgroundColor: `${colorPrimario}20`, color: colorPrimario }}
>
{producto.categoria}
</button>
)}
<p className="text-xl font-bold" style={{ color: colorPrimario }}>
${producto.precio.toFixed(2)}
</p>
</div>
</div>
))}
</div>
{productosFiltrados.length === 0 && (
<div className="text-center py-12">
<div className="text-6xl mb-4">🔍</div>
<p className="text-gray-600">No se encontraron productos</p>
</div>
)}
</div>
{/* Contactanos */}
<div className="bg-white rounded-xl shadow-md p-8 mb-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex-1">
<h2 className="text-2xl font-bold mb-2" style={{ color: colorPrimario }}>
Contáctanos
</h2>
<p className="text-gray-600 mb-4">
Si tienes alguna consulta sobre nuestros productos, nuestro equipo está listo para ayudarte.
</p>
</div>
<div className="flex gap-3">
<button
onClick={() => window.open(`https://wa.me/${selectedSucursal.whatsapp}`, '_blank')}
className="px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90"
style={{ backgroundColor: colorPrimario }}
>
WhatsApp
</button>
<button
onClick={() => window.location.href = '/contacto'}
className="px-6 py-3 rounded-lg border-2 font-semibold hover:bg-gray-50"
style={{ borderColor: colorPrimario, color: colorPrimario }}
>
Call center
</button>
</div>
</div>
</div>
</main>
{/* FOOTER */}
<footer style={{ backgroundColor: colorPrimario }} className="text-white">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h3 className="font-bold mb-3">Inicio</h3>
<ul className="space-y-2 text-sm opacity-90">
<li><a href="/">Home</a></li>
<li><a href="/productos">Productos</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-3">Soporte</h3>
<ul className="space-y-2 text-sm opacity-90">
<li><a href="/ayuda">Ayuda</a></li>
<li><a href="/contacto">Contacto</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-3">Nosotros</h3>
<ul className="space-y-2 text-sm opacity-90">
<li><a href="/conocenos">Quiénes somos</a></li>
<li><a href="/sucursales">Sucursales</a></li>
</ul>
</div>
<div>
<h3 className="font-bold mb-3">Legal</h3>
<ul className="space-y-2 text-sm opacity-90">
<li><a href="/terminos">Términos</a></li>
<li><a href="/privacidad">Privacidad</a></li>
</ul>
</div>
</div>
</div>
</footer>
{/* Modal de Producto */}
{selectedProduct && (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
<div className="bg-white rounded-xl max-w-2xl w-full shadow-2xl overflow-auto max-h-[90vh]">
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h2 className="text-2xl font-bold" style={{ color: colorPrimario }}>
{selectedProduct.nombre}
</h2>
<button
onClick={() => setSelectedProduct(null)}
className="text-gray-500 hover:text-gray-700"
>
<X size={24} />
</button>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div
className="flex items-center justify-center bg-gray-100 rounded-lg p-8"
style={{ minHeight: '300px' }}
>
{selectedProduct.img ? (
<img src={selectedProduct.img} alt={selectedProduct.nombre} className="max-h-72 object-contain" />
) : (
<img src={storeType === 'farmacia' ? '/icons/farmacia.png' : '/icons/libreria.png'} alt={storeType === 'farmacia' ? 'Farmacia' : 'Librería'} className="w-24 h-24" />
)}
</div>
<div>
<p className="text-3xl font-bold mb-4" style={{ color: colorPrimario }}>
${selectedProduct.precio.toFixed(2)}
</p>
{selectedProduct.componente && (
<p className="text-sm text-blue-600 mb-2">
<strong>Componente:</strong> {selectedProduct.componente}
</p>
)}
{selectedProduct.marca && (
<p className="text-sm text-gray-600 mb-2">
<strong>Marca:</strong> {selectedProduct.marca}
</p>
)}
{selectedProduct.laboratorio && (
<p className="text-sm text-gray-600 mb-2">
<strong>Laboratorio:</strong> {selectedProduct.laboratorio}
</p>
)}
{selectedProduct.descripcion && (
<p className="text-gray-700 mt-4 mb-6">{selectedProduct.descripcion}</p>
)}
<button
onClick={() => handleConsultar(selectedProduct)}
className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
style={{ backgroundColor: '#25D366' }}
>
<MessageCircle size={20} />
Consultar por WhatsApp
</button>
</div>
</div>
</div>
</div>
</div>
)}
{/* Botones Flotantes */}
<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
<a
href={`https://wa.me/${selectedSucursal.whatsapp}`}
target="_blank"
rel="noopener noreferrer"
className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
style={{ backgroundColor: '#25D366' }}
>
<MessageCircle size={28} className="text-white" />
</a>
<a
href={`tel:${selectedSucursal.whatsapp}`}
className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
style={{ backgroundColor: colorPrimario }}
>
<Phone size={28} className="text-white" />
</a>
</div>
</div>
);
}






