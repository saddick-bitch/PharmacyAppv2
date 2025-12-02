import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import type { Product } from '../../types';
import { useSearch } from '../../hooks/usersearch';

interface SmartSearchProps {
products: Product[];
}

export default function SmartSearch({ products }: SmartSearchProps) {
const navigate = useNavigate();
const { query, setQuery, results } = useSearch(products);
const searchRef = useRef<HTMLDivElement>(null);
// Cerrar dropdown al hacer clic fuera
useEffect(() => {
function handleClickOutside(event: MouseEvent) {
if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
setQuery('');
}
}
document.addEventListener('mousedown', handleClickOutside);
return () => document.removeEventListener('mousedown', handleClickOutside);
}, [setQuery]);

const handleSelectProduct = (product: Product) => {
navigate(`/producto/${product.id}`);
setQuery(''); // Limpiar búsqueda
};
return (
<div ref={searchRef} className="relative w-full max-w-md">
<div className="relative">
<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
<input
type="text"
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Buscar productos..."
className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
/>
</div>

{query && results.length > 0 && (
<div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
{results.map((product) => (
<button
key={product.id}
onClick={() => handleSelectProduct(product)}
className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b last:border-b-0"
>
<img
src={product.img}
alt={product.nombre}
className="w-12 h-12 object-cover rounded"
/>
<div className="flex-1">
<p className="font-medium text-gray-900">{product.nombre}</p>
<p className="text-sm text-gray-500">{product.categoria}</p>
</div>
<p className="font-semibold text-primary">${product.precio.toFixed(2)}</p>
</button>
))}
</div>
)}
{/* Mensaje cuando no hay resultados */}
{query && results.length === 0 && (
<div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
No se encontraron productos para "{query}"
</div>
)}
</div>
);
}

