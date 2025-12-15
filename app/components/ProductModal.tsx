import React from 'react';
import { X, MessageCircle } from 'lucide-react';
import type { Product, Sucursal } from '../../src/types';

interface ProductModalProps {
  product: Product | null;
  sucursal: Sucursal;
  colorPrimario: string;
  tipo: string;
  onClose: () => void;
}

export function ProductModal({ product, sucursal, colorPrimario, tipo, onClose }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hola, me interesa este producto:\n\n` +
      `📦 ${product.nombre}\n` +
      `${product.componente ? `💊 Componente: ${product.componente}\n` : ''}` +
      `💰 Precio: $${product.precio.toFixed(2)}\n` +
      `📍 Sucursal: ${sucursal.nombre}\n\n` +
      `¿Está disponible?`
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Detalles del Producto</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Image */}
          <div
            className="h-48 flex items-center justify-center text-6xl rounded-lg mb-4"
            style={{ backgroundColor: `${colorPrimario}15` }}
          >
            {product.img ? (
              <img
                src={product.img}
                alt={product.nombre}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span>{tipo === 'farmacia' ? '💊' : '📚'}</span>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.nombre}</h3>
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: colorPrimario }}
              >
                {product.categoria}
              </div>
            </div>

            {product.componente && (
              <p className="text-sm text-blue-600">
                <strong>Componente:</strong> {product.componente}
              </p>
            )}

            {(product.marca || product.laboratorio) && (
              <p className="text-sm text-gray-600">
                <strong>{product.marca ? 'Marca' : 'Laboratorio'}:</strong> {product.marca || product.laboratorio}
              </p>
            )}

            {product.descripcion && (
              <p className="text-sm text-gray-700">
                <strong>Descripción:</strong> {product.descripcion}
              </p>
            )}

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-3xl font-bold" style={{ color: colorPrimario }}>
                  ${product.precio.toFixed(2)}
                </span>
              </div>
              <div className={`flex items-center gap-2 ${product.stock ? 'text-green-600' : 'text-red-600'}`}>
                <div className={`w-3 h-3 rounded-full ${product.stock ? 'bg-green-600' : 'bg-red-600'}`}></div>
                <span className="text-sm font-medium">{product.stock ? 'Disponible' : 'Agotado'}</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-4">
              <a
                href={`https://wa.me/${sucursal.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: colorPrimario }}
              >
                <MessageCircle size={20} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}