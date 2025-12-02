import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import SmartSearch from '../SmartSearch';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
export default function Header() {
const { storeType, setStoreType, colors } = useTheme();
const { getItemCount } = useCart();
return (
<header className="sticky top-0 z-40 bg-white shadow-md">
{/* Tabs superiores - Farmacia / Librería */}
<div className="flex">
{/* Tab Farmacia */}
<button
onClick={() => setStoreType('farmacia')}
className={`flex-1 py-3 px-6 flex items-center justify-center gap-2 transition-colors ${
storeType === 'farmacia'
? 'bg-primary text-white'
: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
}'} >

<span className="text-2xl">💊</span>
<span className="font-semibold">Farmacia San Rafael</span>
</button>
{/* Tab Librería */}
<button
onClick={() => setStoreType('libreria')}
className={`flex-1 py-3 px-6 flex items-center justify-center gap-2 transition-colors ${
storeType === 'libreria'
? 'bg-secondary text-gray-900'
: 'bg-gray-200 text-gray-600 hover:bg-gray-300'
}'}
>
<span className="text-2xl">📚</span>
<span className="font-semibold">Librerías Marcela</span>
</button>
</div>
{/* Navegación principal */}
<div className={`${colors.bgPrimary} text-white`}>
<div className="container mx-auto px-4 py-3">
<div className="flex items-center justify-between gap-4">
{/* Logo / Nombre */}
<Link to="/" className="flex items-center gap-2 text-xl font-bold">
<span className="text-3xl">{storeType === 'farmacia' ? '💊' : '📚'}</span>
<span className="hidden sm:block">
{storeType === 'farmacia' ? 'San Rafael' : 'Marcela'}
</span>

{/* Buscador */}
<div className="flex-1 max-w-2xl">
<SmartSearch products={products} />
</div>
{/* Iconos de navegación */}
<div className="flex items-center gap-4">
{/* Menú móvil */}
<button className="lg:hidden p-2 hover:bg-white/10 rounded">
<Menu className="w-6 h-6" />
</button>
{/* Carrito */}
<Link
to="/carrito"
className="relative p-2 hover:bg-white/10 rounded transition-colors"
>
<ShoppingCart className="w-6 h-6" />
{getItemCount() > 0 && (
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
{getItemCount()}
</span>
)}
</Link>
</div>
</div>
{/* Links de navegación */}
<nav className="hidden lg:flex items-center gap-6 mt-3 text-sm">
<Link to="/" className="hover:text-gray-200 transition-colors">
Inicio
</Link>
<Link to="/promociones" className="hover:text-gray-200 transition-colors">
Promociones
</Link>
<Link to="/rafapuntos" className="hover:text-gray-200 transition-colors">
Rafapuntos
</Link>
<Link to="/contacto" className="hover:text-gray-200 transition-colors">
Contacto
</Link>
</nav>
</div>
</div>
</header>
);
}
