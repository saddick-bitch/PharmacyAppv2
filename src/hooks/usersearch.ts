import { useState, useMemo, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import Fuse from 'fuse.js';
import { type Product } from '../types';
export function useDebounce<T>(value: T, delay: number): T {
const [debouncedValue, setDebouncedValue] = useState<T>(value);
useEffect(() => {
const handler = setTimeout(() => {
setDebouncedValue(value);
}, delay);
return () => {
clearTimeout(handler);
};
}, [value, delay]);
return debouncedValue;
}
export function useSearch(products: Product[]): { query: string; setQuery: Dispatch<SetStateAction<string>>; results: Product[] } {
const [query, setQuery] = useState('');
const debouncedQuery = useDebounce(query, 300);
// Configurar Fuse.js con useMemo para optimizar rendimiento
const fuse = useMemo(() => {
return new Fuse(products, {
keys: ['nombre', 'categoria', 'descripcion', 'marca', 'laboratorio'],
threshold: 0.4, // Tolerancia a errores (0.0 = exacto, 1.0 = cualquier cosa)
includeScore: true,
minMatchCharLength: 2
});
}, [products]);
// Realizar búsqueda
const results = useMemo(() => {
if (!debouncedQuery.trim()) {
return [];
}
const searchResults = fuse.search(debouncedQuery);
return searchResults.map(result => result.item);
}, [debouncedQuery, fuse]);
return { query, setQuery, results };
}