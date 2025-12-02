export type StoreType='Farmacia'| 'Libreria';
//Producto individual

export interface Product{ 
    id: number;
    nombre: string; 
    categoria: string; 
    precio: number;
    img: string;
    descripcion: string;
    stock: Boolean; 
    tipo: StoreType;
    marca?: string;
    laboratorio?: string;
}

export interface CartItem {
    producto: Product;
    cantidad: number;
}

export interface Usuario{ 
    id: string;
    nombre: string;
    puntos: number;
    email: string;
}

export interface Promocion{
id: number;
titulo: string;
descripcion: string;
img: string;
link: string;
tipo: StoreType;
}
