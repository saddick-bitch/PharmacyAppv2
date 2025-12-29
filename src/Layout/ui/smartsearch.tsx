import { useState, useMemo, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import Fuse from 'fuse.js';
import type { Product, StoreType } from '../../types';

interface SmartSearchProps {
	products: Product[];
	tipo?: StoreType;
	onSelectProduct?: (product: Product) => void;
}

export default function SmartSearch({ products, tipo, onSelectProduct }: SmartSearchProps) {
	const effectiveTipo: StoreType = tipo ?? (products && products.length ? products[0].tipo : 'farmacia');
const [query, setQuery] = useState('');
const [showResults, setShowResults] = useState(false);
const searchRef = useRef<HTMLDivElement>(null);
// Filtrar productos por tipo
const productsFiltered = useMemo(
	() => products.filter(p => String(p.tipo).toLowerCase() === String(effectiveTipo).toLowerCase()),
	[products, effectiveTipo]
);
// Configurar Fuse.js para búsqueda difusa (fuzzy search)
const fuse = useMemo(() => {
return new Fuse(productsFiltered, {
keys: [
{ name: 'nombre', weight: 2 }, // Prioridad alta
{ name: 'nombreComercial', weight: 2 }, // Prioridad alta
{ name: 'componente', weight: 1.8 }, // Prioridad alta
{ name: 'categoria', weight: 1 },
{ name: 'descripcion', weight: 0.8 },
{ name: 'marca', weight: 1.2 },
{ name: 'laboratorio', weight: 1.2 },
{ name: 'sku', weight: 1.5 }
],
threshold: 0.4, // 0.0 = exacto, 1.0 = cualquier cosa
distance: 100, // Distancia máxima para coincidencias
minMatchCharLength: 2, // Mínimo 2 caracteres para buscar
includeScore: true, // Incluir puntuación de relevancia
ignoreLocation: true, // No importa dónde aparezca el término
useExtendedSearch: false, // Búsqueda simple (más rápido)
shouldSort: true, // Ordenar por relevancia
});
}, [productsFiltered]);
// Realizar búsqueda con debounce
const results = useMemo(() => {
	if (!query.trim() || query.length < 2) {
		return [];
	}
	const searchResults = fuse.search(query);
		return searchResults
			.slice(0, 8) // Máximo 8 resultados
			.map(result => ({
				product: result.item as Product,
				score: result.score || 0
			}));
}, [query, fuse]);
// Cerrar al hacer clic fuera
useEffect(() => {
function handleClickOutside(event: MouseEvent) {
if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
setShowResults(false);
}
}
document.addEventListener('mousedown', handleClickOutside);
return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);
// Resaltar texto coincidente
const highlightMatch = (text: string, query: string) => {
if (!query) return text;
const parts = text.split(new RegExp(`(${query})`, 'gi'));
return (
<span>
{parts.map((part, i) =>
part.toLowerCase() === query.toLowerCase() ? (
<mark key={i} className="bg-yellow-200 font-semibold">
{part}
</mark>
) : (
<span key={i}>{part}</span>
)
)}
</span>
);
};

const handleSelectProduct = (product: Product) => {
setQuery('');
setShowResults(false);
if (onSelectProduct) {
  onSelectProduct(product);
} else {
  // Aquí puedes agregar navegación o modal con detalles
  console.log('Producto seleccionado:', product);
}
};
return (
<div ref={searchRef} className="relative w-full">
<div className="relative">
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
<input
type="text"
value={query}
onChange={(e) => {
setQuery(e.target.value);
setShowResults(true);
}}
onFocus={() => setShowResults(true)}
placeholder={`Buscar en ${effectiveTipo === 'farmacia' ? 'farmacia' : 'librería'}...`}
className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
/>
</div>
{/* Resultados de búsqueda */}
{showResults && query.length >= 2 && results.length > 0 && (
<div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 sm:max-h-96 overflow-y-auto">
{results.map(({ product }) => (
	<button
		key={product.id}
		onClick={() => handleSelectProduct(product)}
className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 flex items-center gap-2 sm:gap-3 border-b last:border-b-0 transition-colors"
>
{/* Icono del producto */}
<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
{effectiveTipo === 'farmacia' ? '💊' : '📚'}
</div>
{/* Información del producto */}
<div className="flex-1 min-w-0">
<p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
{highlightMatch(product.nombre, query)}
</p>
{/* Mostrar componente si existe */}
{product.componente && (
	<p className="text-xs text-blue-600">
		{highlightMatch(product.componente, query)}
	</p>
)}
{/* Categoría y marca */}
<div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
	<span>{product.categoria}</span>
	{product.marca && (
		<>
			<span>•</span>
			<span>{product.marca}</span>
		</>
	)}
</div>
{/* Descripción corta si coincide con búsqueda */}
{product.descripcion && product.descripcion.toLowerCase().includes(query.toLowerCase()) && (
	<p className="text-xs text-gray-400 mt-1 line-clamp-1">
		{highlightMatch(product.descripcion, query)}
	</p>
)}
</div>
{/* Precio */}
		<div className="flex flex-col items-end flex-shrink-0">
			<p className="font-bold text-blue-600 text-sm sm:text-lg">
				${product.precio.toFixed(2)}
			</p>
			{/* Indicador de relevancia (solo para debug)
			<p className="text-xs text-gray-400">{Math.round((1 - score) * 100)}% match</p>
			*/}
		</div>
	</button>
))}
</div>
)}
{/* Mensaje cuando no hay resultados */}
{showResults && query.length >= 2 && results.length === 0 && (
 <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-4 sm:p-6 text-center">
<div className="text-3xl sm:text-4xl mb-2">🔍</div>
<p className="text-gray-700 font-semibold mb-1 text-sm sm:text-base">
No se encontraron productos
</p>
<p className="text-xs sm:text-sm text-gray-500">
Intenta con otro término de búsqueda
</p>
{/* Sugerencias */}
<div className="mt-3 sm:mt-4 text-left bg-gray-50 p-2 sm:p-3 rounded">
<p className="text-xs font-semibold text-gray-600 mb-2">💡 Sugerencias:</p>
<ul className="text-xs text-gray-600 space-y-1">
<li>• Verifica la ortografía</li>
<li>• Intenta con el nombre genérico (ej: "ibuprofeno")</li>
<li>• Busca por categoría (ej: "medicamentos")</li>
<li>• Prueba con la marca del producto</li>
</ul>
</div>
</div>
)}
{/* Mensaje de mínimo caracteres */}
{showResults && query.length > 0 && query.length < 2 && (
<div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl p-3 sm:p-4 text-center">
<p className="text-xs sm:text-sm text-gray-500">
Escribe al menos 2 caracteres para buscar
</p>
</div>
)}
</div>
);
}   