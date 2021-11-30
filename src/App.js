import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const fecha = new Date().getFullYear();
  return (
    <>
      <Header
        titulo='TIENDA VITUAL'
        creador='Adrian'
        equipo='EL MAS CAMPEON - BOCA!!'
      />
      <Footer
        fecha={fecha}
      />
    </>
  );
}

export default App;
