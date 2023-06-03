import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Servicios from './components/Servicios/Servicios'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Informacion from './components/Informacion/Informacion'

import './App.scss'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Servicios />
      <Informacion />
      <Contact />
      <Footer />
    </>
  )
}

export default App
