import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("productos-destacados", "routes/productos-destacados.tsx"),
] satisfies RouteConfig;