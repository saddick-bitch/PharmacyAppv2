import type {ReactNode } from 'react';
import {createContext, useContext, useState, useEffect} from 'react';
import { Product, type CartItem } from '../types';
interface CartContextType{
items: CartItem[];
addToCart: (producto: Product)=> void;
removeFromCart: (productoId:number) => void;
clearCart:() => void;
getTotal:() => number;
getItemCount: () => number;


}

const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: { children: ReactNode }) {
const [items, setItems] = useState<CartItem[]>(() => {
// Cargar carrito desde localStorage al iniciar
const saved = localStorage.getItem('cart');
return saved ? JSON.parse(saved) : [];
});
// Guardar en localStorage cada vez que cambie el carrito
useEffect(() =>
    localStorage.setItem('cart', JSON.stringify(items));},
[items]);

const addToCart = (producto: Product) => {
setItems(prevItems => {
const existingItem = prevItems.find(item => item.producto.id === producto.id);
if (existingItem) {
// Si ya existe, incrementar cantidad
return prevItems.map(item =>
item.producto.id === producto.id
? { ...item, cantidad: item.cantidad + 1 }
: item);

}else{ // Si no existe, agregar nuevo
return [...prevItems, { producto, cantidad: 1 }];
}
});
};

const removeFromCart = (productoId: number) => {
setItems(prevItems => {
const existingItem = prevItems.find(item => item.producto.id === productoId);
if (existingItem && existingItem.cantidad > 1) {
// Si tiene más de 1, decrementar cantidad
return prevItems.map(item =>
item.producto.id === productoId
? { ...item, cantidad: item.cantidad - 1 }
: item
);
} else {
// Si tiene 1, eliminar del carrito
return prevItems.filter(item => item.producto.id !== productoId);
}
});
};

const clearCart = () => {
setItems([]);
};
const getTotal = () => {
return items.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0);
};

const getItemCount = () => {
return items.reduce((count, item) => count + item.cantidad, 0);
};
return (
<CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, getTotal, getItemCount }}>
{children}
</CartContext.Provider>
);
}

export function useCart() {
const context = useContext(CartContext);
if (!context) {
throw new Error('useCart debe usarse dentro de CartProvider');
}
return context;
}

