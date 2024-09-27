
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/index.tsx")),
  "component---src-pages-layout-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/layout.tsx")),
  "component---src-pages-productos-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/productos.tsx")),
  "component---src-pages-quienes-somos-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/quienesSomos.tsx")),
  "component---src-pages-servicios-tsx": preferDefault(require("/Users/juanpablo/copygraphos/src/pages/servicios.tsx"))
}

