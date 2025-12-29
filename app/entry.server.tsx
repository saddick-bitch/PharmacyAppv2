import { createRequestHandler } from "@react-router/node";

export default createRequestHandler({
  // @ts-ignore
  build: () => import("../build/server/index.js"),
});