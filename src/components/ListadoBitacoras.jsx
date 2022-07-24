import {useEffect} from 'react'
import Bitacora from './Bitacora'


const ListadoBitacoras = ({ bitacoras, setBitacora, eliminarBitacora}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5  '>
      {bitacoras && bitacoras.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>
            Listado de Bitacoras
          </h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus{' '}
            <span className='text-indigo-600 font-bold'>Bitacora</span>
          </p>
          <div className='mb-5 md:h-screen overflow-y-auto'>
            {bitacoras.map((bitacora) => {
              return (
                <Bitacora
                  key={bitacora.id}
                  bitacora={bitacora}
                  setBitacora={setBitacora}
                  eliminarBitacora={eliminarBitacora}
                />
              )
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>
            No hay Servicios
          </h2>
          
        </>
      )}

    </div>
  )
}

export default ListadoBitacoras