import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Productos from './pages/Productos/Productos.jsx';
import Contacto from './pages/Contacto/Contacto.jsx'
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/:idProductos" element={<Productos />} />
          <Route path="/contacto/:idContacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App