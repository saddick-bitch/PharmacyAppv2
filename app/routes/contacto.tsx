import { useState } from 'react';
import { Menu, X, MapPin, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { useTheme } from '../../src/context/Themecontext';
import { SUCURSALES } from '../../src/data/constants';

export function meta() {
  return [
    { title: "Contacto - Farmacias San Rafael & Librerías Marcela" },
    { name: "description", content: "Contáctanos para cualquier consulta o información" }
  ];
}

export default function Contacto() {
  const { storeType, setStoreType } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSucursal, setSelectedSucursal] = useState(SUCURSALES[0]);

  const colorPrimario = storeType === 'farmacia' ? '#114b8c' : '#f9d000';
  const colorTexto = storeType === 'farmacia' ? 'white' : '#114b8c';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER - Same structure */}
      <header className="bg-white shadow-md sticky top-0 z-50">
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
              <div className="flex-1 max-w-md"></div>
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
        <h1 className="text-4xl font-bold mb-8" style={{ color: colorPrimario }}>
          Contacto
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Información de Contacto */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: colorPrimario }}>
                Información de Contacto
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" style={{ color: colorPrimario }} />
                  <span>San Salvador, El Salvador</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" style={{ color: colorPrimario }} />
                  <span>+503 1234-5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" style={{ color: colorPrimario }} />
                  <span>info@{storeType === 'farmacia' ? 'sanrafael' : 'marcela'}.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" style={{ color: colorPrimario }} />
                  <span>Lun-Dom: 7:00am - 8:00pm</span>
                </div>
              </div>
            </div>

            {/* Sucursales */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: colorPrimario }}>
                Nuestras Sucursales
              </h2>
              <div className="space-y-3">
                {SUCURSALES.slice(0, 3).map((sucursal) => (
                  <div key={sucursal.id} className="border-b pb-3 last:border-b-0">
                    <h3 className="font-semibold">{sucursal.nombre}</h3>
                    <p className="text-sm text-gray-600">{sucursal.direccion}</p>
                    <p className="text-sm text-gray-600">📞 {sucursal.whatsapp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: colorPrimario }}>
              Envíanos un mensaje
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colorPrimario }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colorPrimario }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Asunto</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colorPrimario }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: colorPrimario }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90"
                style={{ backgroundColor: colorPrimario }}
              >
                Enviar mensaje
              </button>
            </form>
          </div>
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