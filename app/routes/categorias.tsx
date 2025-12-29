import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone, Search } from 'lucide-react';
import { useTheme } from '../../src/context/Themecontext';
import { SUCURSALES, PRODUCTOS_EJEMPLO } from '../../src/data/constants';
import SmartSearch from '../../src/Layout/ui/smartsearch';
import ProductCard from '../components/ProductCard';
import { ProductModal } from '../components/ProductModal';
import type { Product } from '../../src/types';
import { useSearchParams } from 'react-router-dom';

export function meta() {
  return [
    { title: "Categorías - San Rafael & Marcela" },
    { name: "description", content: "Explora nuestras categorías de productos" }
  ];
}

export default function Categorias() {
  const { storeType, setStoreType, colors } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSucursal, setSelectedSucursal] = useState(SUCURSALES[0]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const colorPrimario = colors.primary;
  const colorTexto = storeType === 'farmacia' ? 'white' : colors.secondary;

  // Obtener categorías únicas por tipo
  const categorias = Array.from(
    new Set(
      PRODUCTOS_EJEMPLO
        .filter(p => String(p.tipo).toLowerCase() === storeType)
        .map(p => p.categoria)
    )
  ).filter(Boolean);

  // Productos filtrados por categoría seleccionada
  const productosFiltrados = selectedCategory
    ? PRODUCTOS_EJEMPLO
        .filter(p => String(p.tipo).toLowerCase() === storeType && p.categoria === selectedCategory)
        .filter(p =>
          searchQuery.trim()
            ? p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (p.categoria && p.categoria.toLowerCase().includes(searchQuery.toLowerCase()))
            : true
        )
    : [];

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        {/* Tabs superiores - Farmacia / Librería */}
        <div className="flex">
          {/* Tab Farmacia */}
          <button
            onClick={() => {
              setStoreType('farmacia');
              setSelectedCategory(null);
              setMenuOpen(false);
            }}
            className="flex-1 py-3 px-6 flex items-center justify-center gap-2 transition-colors"
            style={{
              backgroundColor: storeType === 'farmacia' ? '#114b8c' : '#f5f5f5',
              color: storeType === 'farmacia' ? 'white' : '#666'
            }}
          >
            <span className="text-2xl">💊</span>
            <span className="font-semibold">Farmacia San Rafael</span>
          </button>
          {/* Tab Librería */}
          <button
            onClick={() => {
              setStoreType('libreria');
              setSelectedCategory(null);
              setMenuOpen(false);
            }}
            className="flex-1 py-3 px-6 flex items-center justify-center gap-2 transition-colors"
            style={{
              backgroundColor: storeType === 'libreria' ? '#f9d000' : '#f5f5f5',
              color: storeType === 'libreria' ? '#114b8c' : '#666'
            }}
          >
            <span className="text-2xl">📚</span>
            <span className="font-semibold">Librerías Marcela</span>
          </button>
        </div>

        {/* Navegación principal */}
        <div style={{ backgroundColor: colorPrimario, color: colorTexto }}>
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo / Nombre */}
              <a href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="text-3xl">{storeType === 'farmacia' ? '💊' : '📚'}</span>
                <span className="hidden sm:block">
                  {storeType === 'farmacia' ? 'San Rafael' : 'Marcela'}
                </span>
              </a>

              {/* Buscador */}
              <div className="flex-1 max-w-sm sm:max-w-md lg:max-w-2xl">
                <SmartSearch products={PRODUCTOS_EJEMPLO.filter(p => String(p.tipo).toLowerCase() === storeType)} tipo={storeType} />
              </div>

              {/* Selector de Sucursal */}
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

              {/* Iconos de navegación */}
              <div className="flex items-center gap-4">
                {/* Menú móvil */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden p-2 hover:bg-white/10 rounded"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menú Horizontal (Desktop) */}
            <nav className="hidden lg:flex items-center justify-center gap-6 mt-3 text-sm font-semibold">
              <a href="/" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Inicio
              </a>
              <a href="/productos-destacados" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Productos Destacados
              </a>
              <a href="/categorias" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Categorías
              </a>
              <a href="/promociones" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Promociones
              </a>
              <a href="/rafapuntos" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Rafapuntos
              </a>
              <a href="/conocenos" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Conócenos
              </a>
              <a href="/contacto" className="hover:opacity-70 transition-opacity" style={{ color: colorTexto }}>
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Menú Lateral (Móvil) */}
      <div
        className={`fixed top-[200px] sm:top-[180px] left-0 h-[calc(100vh-200px)] sm:h-[calc(100vh-180px)] w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h3 className="font-bold text-lg mb-4" style={{ color: colorPrimario }}>
            Menú
          </h3>
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
                className="block py-2 px-4 rounded hover:bg-gray-100 transition-colors"
                style={{ color: colorPrimario }}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {!selectedCategory ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-8" style={{ color: colorPrimario }}>
              Categorías de {storeType === 'farmacia' ? 'Farmacia' : 'Librería'}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => {
                    setSelectedCategory(categoria);
                    setSearchParams({ categoria });
                  }}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
                >
                  <div className="text-4xl mb-2">
                    {storeType === 'farmacia' ? '💊' : '📚'}
                  </div>
                  <h3 className="font-semibold" style={{ color: colorPrimario }}>
                    {categoria}
                  </h3>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchParams({});
                }}
                className="px-4 py-2 rounded-lg text-white font-semibold"
                style={{ backgroundColor: colorPrimario }}
              >
                ← Volver a Categorías
              </button>
              <h1 className="text-3xl font-bold" style={{ color: colorPrimario }}>
                {selectedCategory}
              </h1>
            </div>

            {/* Buscador adicional */}
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar en esta categoría..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {productosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productosFiltrados.map((producto) => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                    sucursal={selectedSucursal}
                    colorPrimario={colorPrimario}
                    tipo={storeType}
                    onOpen={setSelectedProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
              </div>
            )}
          </>
        )}
      </main>

      {/* Modal del producto */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          sucursal={selectedSucursal}
          colorPrimario={colorPrimario}
          tipo={storeType}
        />
      )}

      {/* Overlay para cerrar menú móvil */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
}