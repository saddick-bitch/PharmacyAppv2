import React, { useState, useEffect } from 'react';
import { Menu, X, Search, MapPin, MessageCircle } from 'lucide-react';
import type { Product, Sucursal, StoreType } from '../../src/types';
import { useGeolocation } from '../../src/hooks/useGeolocation';
import SmartSearch from '../../src/Layout/ui/smartsearch';
import ProductCard from '../components/ProductCard';
import { SUCURSALES, PRODUCTOS_EJEMPLO } from '../../src/data/constants';
import { useTheme } from '../../src/context/Themecontext';
export function meta() {
return [

  { title: "Farmacias San Rafael & Librerías Marcela" },
{ name: "description", content: "Tu farmacia y librería de confianza en El Salvador" },
];
}
export default function Home() {
const { storeType, setStoreType } = useTheme();
const activeTab: StoreType = storeType;
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [menuOpen, setMenuOpen] = useState(false);
const [selectedSucursal, setSelectedSucursal] = useState<Sucursal>(SUCURSALES[0]);
const [selectedCategory, setSelectedCategory] = useState('todos');

const [productos, setProductos] = useState<Product[]>(PRODUCTOS_EJEMPLO);
const { location } = useGeolocation();
// Encontrar sucursal más cercana automáticamente
useEffect(() => {
if (location) {
const nearest = findNearestSucursal(location.lat, location.lng, SUCURSALES);
setSelectedSucursal(nearest);
}
}, [location]);
//En el futuro: cargar productos desde API
useEffect(() => {
// TODO: Fetch productos desde tu API
// const loadProductos = async () => {
// const data = await fetch('/api/productos').then(r => r.json());
// setProductos(data);
// };
// loadProductos();
}, []);

const categoriasFarmacia = ['Todos', 'Medicamentos', 'Vitaminas', 'Cuidado Personal', 'Primeros Auxilios', 'Bebé y Mamá'];
const categoriasLibreria = ['Todos', 'Útiles Escolares', 'Papelería', 'Libros', 'Arte y Manualidades', 'Oficina'];

const categorias = activeTab === 'farmacia' ? categoriasFarmacia : categoriasLibreria;
const productosFiltrados = productos.filter(p => {
  const matchTipo = String(p.tipo).toLowerCase() === activeTab;
  const matchCategoria = selectedCategory === 'todos' || p.categoria === selectedCategory;
  return matchTipo && matchCategoria;
});

const colorPrimario = activeTab === 'farmacia' ? '#114b8c' : '#f9d000';
const colorTexto = activeTab === 'farmacia' ? 'white' : '#114b8c';
return (
<div className="min-h-screen bg-gray-50">
{/* Header con Tabs */}
<header className="bg-white shadow-md sticky top-0 z-50">
<div className="flex">
{/* Tab Farmacia */}
<button
onClick={() => {setStoreType('farmacia');
setSelectedCategory('todos');
setMenuOpen(false);
}}
className="flex-1 py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3"
style={{backgroundColor: activeTab === 'farmacia' ? '#114b8c' : '#f5f5f5',
color: activeTab === 'farmacia' ? 'white' : '#666'
}}
>
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
<div className="text-2xl">💊</div>
</div>
<div className="text-left">
<div className="font-bold text-sm">FARMACIAS</div>
<div className="font-bold text-lg">SAN RAFAEL</div>
</div>
</button>
{/* Tab Librería */}
<button
onClick={() => {
setStoreType('libreria');
setSelectedCategory('todos');
setMenuOpen(false);
}}
className="flex-1 py-4 px-6 transition-all duration-300 flex items-center justify-center gap-3"
style={{
backgroundColor: activeTab === 'libreria' ? '#f9d000' : '#f5f5f5',
color: activeTab === 'libreria' ? '#114b8c' : '#666'
}}
>
  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
<div className="text-2xl">📚</div>
</div>
<div className="text-left">
<div className="font-bold text-sm">LIBRERÍAS</div>
<div className="font-bold text-lg">MARCELA</div>
</div>
</button>
</div>

{/* Barra de navegación */}
<div className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
{/* Menú Hamburguesa */}
<button
onClick={() => setMenuOpen(!menuOpen)}
className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
style={{ color: colorPrimario }}
>
{menuOpen ? <X size={24} /> : <Menu size={24} />}
</button>

{/* Buscador */}
<div className="flex-1 max-w-md">
<SmartSearch products={productos} />
</div>

{/* Selector de Sucursal */}
<select
value={selectedSucursal.id}
onChange={(e) => {
const sucursal = SUCURSALES.find(s => s.id === e.target.value);
if (sucursal) setSelectedSucursal(sucursal);
}}
className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 text-gray-900"
style={{ borderColor: colorPrimario }}
>

  {SUCURSALES.map(sucursal => (
<option key={sucursal.id} value={sucursal.id}>
📍 {sucursal.nombre}
</option>
))}
</select>
</div>
</div>
</header>

{/* Menú Lateral de Categorías */}
<div
className={`fixed top-[180px] left-0 h-[calc(100vh-180px)] w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
menuOpen ? 'translate-x-0' : '-translate-x-full'

}`}
>
<div className="p-6">
<h3 className="font-bold text-lg mb-4" style={{ color: colorPrimario }}>
Categorías
</h3>
<div className="space-y-2">
{categorias.map((cat) => (
<button
key={cat}
onClick={() => {
setSelectedCategory(cat.toLowerCase());
setMenuOpen(false);
}}
className="w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-gray-100"
style={{
backgroundColor: selectedCategory === cat.toLowerCase() ? colorPrimario : 'transparent',
color: selectedCategory === cat.toLowerCase() ? 'white' : '#666'
}}
>
{cat}
</button>
))}
</div>
</div>
</div>

{/* Overlay */}
{menuOpen && (
<div
className="fixed inset-0 bg-black bg-opacity-50 z-30"
onClick={() => setMenuOpen(false)}
/>
)}
{/* Contenido Principal */}

<main className="max-w-7xl mx-auto px-4 py-8">
{/* Banner de Sucursal */}
<div className="mb-8 p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: colorPrimario }}>
<div className="flex items-center gap-3" style={{ color: colorTexto }}>
<MapPin size={24} />
<div>
<div className="font-bold">{selectedSucursal.nombre}</div>
<div className="text-sm opacity-90">{selectedSucursal.direccion}</div>
</div>
</div>
<a

href={`https://wa.me/${selectedSucursal.whatsapp}?text=Hola, necesito información desde ${activeTab === 'farmacia' ? 'Farmacias San Rafael' : 'Librerías Marcela'}`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
style={{ color: colorPrimario }}
>
<MessageCircle size={20} />
WhatsApp
</a>
</div>
{/* Grid de Productos */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
{productosFiltrados.map((producto) => (
<ProductCard
key={producto.id}
producto={producto}
sucursal={selectedSucursal}
colorPrimario={colorPrimario}
tipo={activeTab}
  onOpen={(p) => setSelectedProduct(p)}
  />
))}
</div>

{productosFiltrados.length === 0 && (
<div className="text-center py-16">
<div className="text-6xl mb-4">🔍</div>
<h3 className="text-xl font-bold text-gray-600">No se encontraron productos</h3>
<p className="text-gray-500 mt-2">Intenta con otra búsqueda o categoría</p>
</div>
)}

{/* Modal / Full product view */}
{selectedProduct && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <div className="bg-white rounded-lg max-w-3xl w-full shadow-xl overflow-auto">
      <div className="p-4 flex justify-between items-start">
        <h2 className="text-xl font-bold">{selectedProduct.nombre}</h2>
        <button className="text-gray-500" onClick={() => setSelectedProduct(null)}>Cerrar</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex items-center justify-center bg-gray-100">
          {selectedProduct.img ? (
            <img src={selectedProduct.img} alt={selectedProduct.nombre} className="max-h-96 object-contain" />
          ) : (
            <div className="text-6xl">{activeTab === 'farmacia' ? '💊' : '📚'}</div>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold" style={{ color: colorPrimario }}>${selectedProduct.precio.toFixed(2)}</p>
          {selectedProduct.componente && <p className="text-sm text-blue-600">{selectedProduct.componente}</p>}
          {selectedProduct.marca && <p className="text-sm text-gray-500">{selectedProduct.marca}</p>}
          {selectedProduct.descripcion && <p className="mt-4 text-gray-700">{selectedProduct.descripcion}</p>}
          <div className="mt-6">
            <a
              className="inline-block px-4 py-2 bg-green-500 text-white rounded"
              href={`https://wa.me/${selectedSucursal.whatsapp}?text=${encodeURIComponent(`Hola, quisiera información sobre ${selectedProduct.nombre}`)}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

</main>
{/* Botón flotante de WhatsApp */}
<a
href={`https://wa.me/${selectedSucursal.whatsapp}?text=Hola, necesito ayuda desde ${activeTab === 'farmacia' ? 'Farmacias San Rafael' : 'Librerías Marcela'}`}
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
style={{ backgroundColor: '#25D366' }}
>
<MessageCircle size={32} className="text-white" />
</a>
</div>

);
}
// Utilidad para calcular distancia
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
const R = 6371;
const dLat = (lat2 - lat1) * Math.PI / 180;
const dLon = (lon2 - lon1) * Math.PI / 180;
const a =
Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
Math.sin(dLon/2) * Math.sin(dLon/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
return R * c;
}
function findNearestSucursal(userLat: number, userLng: number, sucursales: Sucursal[]): Sucursal {
let nearest = sucursales[0];
let minDistance = calculateDistance(userLat, userLng, nearest.lat, nearest.lng);
sucursales.forEach(sucursal => {
const distance = calculateDistance(userLat, userLng, sucursal.lat, sucursal.lng);
if (distance < minDistance) {
minDistance = distance;
nearest = sucursal;
}
});
return nearest;
}