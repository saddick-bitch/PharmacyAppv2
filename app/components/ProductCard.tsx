import { MessageCircle } from 'lucide-react';
import type { Product, Sucursal, StoreType } from '../../src/types';

interface ProductCardProps {
  producto: Product;
  sucursal: Sucursal;
  colorPrimario: string;
  tipo: StoreType;
}

export function ProductCard({ producto, sucursal, colorPrimario, tipo, onOpen }: ProductCardProps & { onOpen?: (p: Product) => void }) {
  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa este producto:\n\n` +
      `📦 *${producto.nombre}*\n` +
      `${producto.componente ? `💊 *Componentes:* ${producto.componente}\n` : ''}` +
      `� Precio: $${producto.precio.toFixed(2)}\n` +
      `📍 Sucursal: ${sucursal.nombre}\n\n` +
      `¿Está disponible?`
  );

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Imagen del producto */}
      <div
        className="h-48 flex items-center justify-center text-6xl relative overflow-hidden"
        style={{ backgroundColor: `${colorPrimario}15` }}
        onClick={() => onOpen?.(producto)}
      >
        {producto.img ? (
          <img
            src={producto.img}
            alt={producto.nombre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <span className="group-hover:scale-110 transition-transform duration-300">
            {tipo === 'farmacia' ? '💊' : '📚'}
          </span>
        )}
        {/* Badge de categoría */}
        <div
          className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-semibold"
          style={{ backgroundColor: colorPrimario, color: 'white' }}
        >
          {producto.categoria}
        </div>
      </div>
      {/* Información del producto */}
      <div className="p-4">
        {/* Nombre */}
        <h3 className="font-bold text-lg mb-1 text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {producto.nombre}
        </h3>
        {/* Componente (solo farmacia) */}
        {producto.componente && (
          <p className="text-xs text-blue-600 mb-2"><span className="font-bold">Componentes:</span> {producto.componente}</p>
        )}
        {/* Marca/Laboratorio */}
        {(producto.marca || producto.laboratorio) && (
          <p className="text-xs text-gray-500 mb-3">{producto.marca || producto.laboratorio}</p>
        )}
        {/* Descripción corta */}
        {producto.descripcion && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{producto.descripcion}</p>
        )}
        {/* Info Adicional */}
        <div className="text-xs text-gray-700 space-y-1 mb-3">
          {producto.indicaciones && (
            <p><span className="font-bold">Indicaciones:</span> {producto.indicaciones}</p>
          )}
          {producto.contraindicaciones && (
            <p><span className="font-bold">Contraindicaciones:</span> {producto.contraindicaciones}</p>
          )}
          {producto.requiereReceta !== undefined && (
            <p className="font-semibold">
              {producto.requiereReceta
                ? 'Requiere receta médica'
                : 'Venta libre'}
            </p>
          )}
        </div>
        {/* Precio y botón de WhatsApp */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold" style={{ color: colorPrimario }}>
              ${producto.precio.toFixed(2)}
            </span>
          </div>
          <a
            href={`https://wa.me/${sucursal.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-all hover:scale-110 flex items-center gap-2"
            style={{ backgroundColor: colorPrimario }}
            title="Consultar por WhatsApp"
            onClick={(e) => e.stopPropagation()}
          >
            <MessageCircle size={20} className="text-white" />
          </a>
        </div>
        {/* Estado de stock */}
        <div
          className={`mt-3 flex items-center justify-center gap-1 text-sm ${
            producto.stock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${producto.stock ? 'bg-green-600' : 'bg-red-600'}`}
          ></div>
          {producto.stock ? 'Disponible' : 'Agotado'}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
