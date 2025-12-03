import { useTheme } from '../context/Themecontext';
export default function Footer() {
const { storeType, colors } = useTheme();
return (
<footer className={`${colors.bgPrimary} text-white mt-12`}>
<div className="container mx-auto px-4 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Columna 1 */}
<div>
<h3 className="font-bold text-lg mb-4">
{storeType === 'farmacia' ? 'Farmacia San Rafael' : 'Librerías Marcela'}
</h3>
<p className="text-sm text-gray-200">
{storeType === 'farmacia'
	? 'Tu salud es nuestra prioridad'
	: 'Inspirando conocimiento y creatividad'
}
</p>
</div>

{/* Columna 2 */}
<div>
<h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
<ul className="space-y-2 text-sm">
<li><a href="/" className="hover:text-gray-200">Inicio</a></li>
<li><a href="/promociones" className="hover:text-gray-200">Promociones</a></li>
<li><a href="/rafapuntos" className="hover:text-gray-200">Rafapuntos</a></li>
<li><a href="/contacto" className="hover:text-gray-200">Contacto</a></li>
</ul>
</div>
{/* Columna 3 */}
<div>
<h4 className="font-semibold mb-4">Contacto</h4>
<ul className="space-y-2 text-sm text-gray-200">
<li>📍 San Salvador, El Salvador</li>
<li>📞 +503 1234-5678</li>
<li>✉️ info@{storeType === 'farmacia' ? 'sanrafael' : 'marcela'}.com</li>
</ul>
</div>
</div>
<div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-200">
<p>© 2024 {storeType === 'farmacia' ? 'Farmacia San Rafael' : 'Librerías Marcela'}. Todos los derechos reservados.</p>
</div>
</div>
</footer>
);
}
