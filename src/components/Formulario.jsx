import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ bitacoras, setBitacoras, bitacora , setBitacora}) => {
  //Nuestros State
  const [cliente, setCliente] = useState('');
  const [fecha, setFecha] = useState();
  const [contacto, setContacto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState('');

  //Arreglo para guardar los errores
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(bitacora).length > 0) {//Comprobar si un arreglo esta vacio o no
      setCliente(bitacora.cliente);
      setFecha(bitacora.fecha);
      setContacto(bitacora.contacto);
      setTelefono(bitacora.telefono);
      setServicio(bitacora.servicio);
    }
  }, [bitacora]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if ([cliente, fecha, contacto, telefono, servicio].includes('')) {
      setError(true);
      return;
    }
    setError(false);

    //Objeto de Bitacoras
    const objetoBitacora = {
      cliente,
      fecha,
      contacto,
      telefono,
      servicio
    }

    if (bitacora.id) {
      //Editando el registro
      objetoBitacora.id = bitacora.id
      const  bitacoraActualizada = bitacoras.map(bitacoraState =>bitacoraState.id === bitacora.id ? objetoBitacora : bitacoraState)

      setBitacoras(bitacoraActualizada);
      setBitacora({}) //Limpia el arreglo
    } else {
      //Nuevo registro
      objetoBitacora.id = generarId();
      setBitacoras([...bitacoras, objetoBitacora]);
    }

    //Reiniciar el Form
    setCliente('');
    setFecha('');
    setContacto('');
    setTelefono('');
    setServicio('');

  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Citas del Dia</h2>
      <p className='text-lg mt-5 text-center mb-10 uppercase'>Añade los Servicios {' '}
        <span className='text-indigo-600 font-bold '>Realizados en el día</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && <Error><p>Todos los campos son Obligatorios</p></Error>}

        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='cliente'>Cliente
          </label>
          <input
            id="cliente"
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            type="text"
            placeholder='Cliente'
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='alta'>Fecha Realizada
          </label>
          <input
            id="alta"
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            type="date"
            value={fecha || ''}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='contacto'>Contacto
          </label>
          <input
            id="contacto"
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            type="text"
            placeholder='Nombre quien atendio'
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='numTelefonico'>Numero Telefonico
          </label>
          <input
            id="numTelefonico"
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            type="number"
            placeholder='Nombre quien atendio'
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            className='block text-gray-700 uppercase font-bold'
            htmlFor='servicio'>Servicio Realizado
          </label>
          <textarea
            id="servicio"
            className='border-2 w-full p-2 mt-2 placeholder:gray-400 rounded-md'
            type="number"
            placeholder='servicio realizado'
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          />
        </div>

        <input type="submit" className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md' value={bitacora.id ? 'Editar Bitacora' : 'Agregar Bitacora'} />
      </form>
    </div>
  )
}

export default Formulario