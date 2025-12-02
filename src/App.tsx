import './App.css'
import Header from './Layout/Header'
import Footer from './Layout/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Inicio</h1>
        <p className="text-gray-700">Contenido de ejemplo — el encabezado contiene el buscador inteligente.</p>
      </main>
      <Footer />
    </>
  )
}

export default App
