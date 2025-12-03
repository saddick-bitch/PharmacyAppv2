export type StoreType = 'farmacia' | 'libreria';

// Producto individual
export interface Product {
	id: number;
	nombre: string;
	categoria: string;
	precio: number;
	img?: string;
	descripcion?: string;
	stock: boolean;
	tipo: StoreType;
	marca?: string;
	laboratorio?: string;
	// extra optional fields used in constants
	nombreComercial?: string;
	componente?: string;
	sku?: string;
}

export interface Sucursal {
	id: string;
	nombre: string;
	direccion: string;
	whatsapp: string;
	lat: number; // Latitud para GPS
	lng: number; // Longitud para GPS
	horario?: string;
	email?: string;
}

export interface CartItem {
	producto: Product;
	cantidad: number;
}

export interface Usuario {
	id: string;
	nombre: string;
	puntos: number;
	email: string;
}

export interface Promocion {
	id: number;
	titulo: string;
	descripcion: string;
	img: string;
	link: string;
	tipo: StoreType;
}

// Para búsqueda avanzada
export interface SearchFilters {
	query?: string;
	tipo?: StoreType;
	categoria?: string;
	minPrecio?: number;
	maxPrecio?: number;
	stock?: boolean;
}