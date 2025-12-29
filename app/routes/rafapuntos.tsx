import { useState } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useTheme } from '../../src/context/Themecontext';
import { SUCURSALES } from '../../src/data/constants';

export function meta() {
  return [
    { title: "Rafapuntos - Farmacias San Rafael & Librerías Marcela" },
    { name: "description", content: "Programa de puntos y recompensas" }
  ];
}

export default function Rafapuntos() {
  const { storeType, setStoreType } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSucursal, setSelectedSucursal] = useState(SUCURSALES[0]);

  const colorPrimario = storeType === 'farmacia' ? '#114b8c' : '#f9d000';
  const colorTexto = storeType === 'farmacia' ? 'white' : '#114b8c';

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
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                style={{ color: colorPrimario }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="lg:hidden text-xl font-bold" style={{ color: colorPrimario }}>
                {storeType === 'farmacia' ? '💊' : '📚'}
              </div>
              <div className="flex-1 max-w-md">
                {/* Search could go here */}
              </div>
              <select
                value={selectedSucursal.id}
                onChange={(e) => {
                  const sucursal = SUCURSALES.find(s => s.id === e.target.value);
                  if (sucursal) setSelectedSucursal(sucursal);
                }}
                className="hidden sm:block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none text-gray-900 text-sm"
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
            <nav className="hidden lg:flex items-center gap-6 mt-3 text-sm font-semibold">
              <a href="/" className="hover:opacity-70" style={{ color: colorPrimario }}>Inicio</a>
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
          <div className="fixed top-[180px] left-0 h-[calc(100vh-180px)] w-64 bg-white shadow-lg z-40">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-4" style={{ color: colorPrimario }}>Menú</h3>
              <nav className="space-y-2">
                {['Inicio', 'Promociones', 'Rafapuntos', 'Conócenos', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase().replace(' ', '')}`}
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    style={{ color: colorPrimario }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
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
          Rafapuntos
        </h1>

        {/* Contenido de Rafapuntos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: colorPrimario }}>
              ¿Qué son los Rafapuntos?
            </h2>
            <p className="text-gray-700 mb-6">
              Los Rafapuntos son nuestro programa de fidelización que te permite acumular puntos
              con cada compra y canjearlos por descuentos, productos exclusivos y beneficios especiales.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colorPrimario }}>
                  1
                </div>
                <span>Regístrate en nuestro programa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colorPrimario }}>
                  2
                </div>
                <span>Acumula puntos con cada compra</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: colorPrimario }}>
                  3
                </div>
                <span>Canjea tus puntos por recompensas</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: colorPrimario }}>
              Beneficios
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <span>Descuentos exclusivos en productos seleccionados</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🚚</span>
                <span>Envío gratuito en compras superiores a $50</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎂</span>
                <span>Regalos de cumpleaños y aniversarios</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <span>Acceso anticipado a promociones especiales</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cómo ganar puntos */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colorPrimario }}>
            Cómo ganar Rafapuntos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gray-100">
                🛒
              </div>
              <h3 className="font-bold mb-2">Compras en tienda</h3>
              <p className="text-gray-600 text-sm">Gana 1 punto por cada $1 gastado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gray-100">
                🌐
              </div>
              <h3 className="font-bold mb-2">Compras online</h3>
              <p className="text-gray-600 text-sm">Gana 2 puntos por cada $1 gastado</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl bg-gray-100">
                🎉
              </div>
              <h3 className="font-bold mb-2">Eventos especiales</h3>
              <p className="text-gray-600 text-sm">Puntos extra en fechas especiales</p>
            </div>
          </div>
        </div>

        {/* Registro */}
        <div className="bg-gradient-to-r rounded-xl shadow-md p-8 text-center text-white"
          style={{
            backgroundImage: storeType === 'farmacia'
              ? 'linear-gradient(135deg, #1a5490 0%, #0d3a6b 100%)'
              : 'linear-gradient(135deg, #ffd000 0%, #e6b800 100%)'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            ¡Regístrate ahora!
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Comienza a acumular puntos y disfruta de todos los beneficios
          </p>
          <button
            className="px-8 py-3 bg-white rounded-lg font-semibold hover:scale-105 transition-transform"
            style={{ color: colorPrimario }}
          >
            Registrarme
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: colorPrimario }} className="text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-3">
                {storeType === 'farmacia' ? 'Farmacia San Rafael' : 'Librerías Marcela'}
              </h3>
              <p className="text-sm opacity-90">
                {storeType === 'farmacia'
                  ? 'Tu salud es nuestra prioridad'
                  : 'Inspirando conocimiento y creatividad'}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="/" className="hover:underline">Inicio</a></li>
                <li><a href="/promociones" className="hover:underline">Promociones</a></li>
                <li><a href="/rafapuntos" className="hover:underline">Rafapuntos</a></li>
                <li><a href="/contacto" className="hover:underline">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Nosotros</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="/conocenos" className="hover:underline">Quiénes somos</a></li>
                <li><a href="/sucursales" className="hover:underline">Sucursales</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="/terminos" className="hover:underline">Términos</a></li>
                <li><a href="/privacidad" className="hover:underline">Privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

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