import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Productos from './components/Productos.jsx';

function App() {
  // creamos una lista de productos

  // const {persona, setPersona} = useState();

  const [productos] = useState([
    { id: 1, nombre: 'Camisa de Boca', precio: 50 },
    { id: 2, nombre: 'Camisa de Racing', precio: 100 },
    { id: 3, nombre: 'Camisa de River', precio: 150 },
    { id: 4, nombre: 'Camisa de Independiente', precio: 200 }
  ]);

  const fecha = new Date().getFullYear();

  return (
    <>
      <div className="container text-center">
        <Header
          titulo='TIENDA VITUAL'
        />
        <h2>Lista de Productos</h2>
        {
          productos.map(producto => (
            <Productos
              key={producto.id}
              productos={producto}
            />
          ))
        }
        <Footer
          year={fecha}
        />
      </div>
    </>
  );
}

export default App;
