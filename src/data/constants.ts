import { products } from './products';
import type { Product } from '../types';
import type { Sucursal } from '../types';

// Example sucursales (replace with real data as needed)
export const SUCURSALES: Sucursal[] = [
  {
    id: 'srz-1',
    nombre: 'San Rafael Centro',
    direccion: 'Av. Principal #123, Centro',
    lat: 13.69294,
    lng: -89.218191,
    whatsapp: '50370000001',
  },
  {
    id: 'srz-2',
    nombre: 'San Rafael Norte',
    direccion: 'Colonia Norte, Calle 5',
    lat: 13.711,
    lng: -89.203,
    whatsapp: '50370000002',
  },
];

// Example productos (use existing products list as demo)
export const PRODUCTOS_EJEMPLO: Product[] = products;

export default {};
