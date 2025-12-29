import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("productos-destacados", "routes/productos-destacados.tsx"),
  route("categorias", "routes/categorias.tsx"),
  route("promociones", "routes/promociones.tsx"),
  route("rafapuntos", "routes/rafapuntos.tsx"),
  route("contacto", "routes/contacto.tsx"),
  route("conocenos", "routes/conocenos.tsx"),
] satisfies RouteConfig;