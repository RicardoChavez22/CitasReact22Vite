import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoBitacoras from "./components/ListadoBitacoras";

function App() {

  const [bitacoras, setBitacoras] = useState([]);
  const [bitacora, setBitacora] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      //Convertimos de un string a un arreglo con JSON.parse
      const bitacorasLS = JSON.parse(localStorage.getItem('bitacoras')) ?? [];
      bitacorasLS?.length > 0 && setBitacoras(bitacorasLS); //Se agrega por el modo strci del main.
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('bitacoras', JSON.stringify(bitacoras));
  }, [bitacoras]);

  const eliminarBitacora = id => {
    const bitacorasActualizados = bitacoras.filter(bitacora => bitacora.id !== id);
    setBitacoras(bitacorasActualizados);
  }
  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex ">
        <Formulario
          bitacoras={bitacoras}
          setBitacoras={setBitacoras}
          bitacora={bitacora}
          setBitacora={setBitacora}
        />
        <ListadoBitacoras
          bitacoras={bitacoras}
          setBitacora={setBitacora}
          eliminarBitacora={eliminarBitacora}
        />
      </div>

    </div>
  )
}

export default App
