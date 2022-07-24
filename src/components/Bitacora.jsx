
const Bitacora = ({ bitacora, setBitacora, eliminarBitacora }) => {
    const { cliente, fecha, contacto, telefono, servicio, id } = bitacora;

    const handleEliminar=()=>{
        const respuesta = confirm('Deseas eliminar este paciente');
        if(respuesta){
            eliminarBitacora(id);
        }
    }
    return (
        <>
            <div className="mx-3 bg-white shadow-md px-5 py-10 rounded-xl mb-5">
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                    <span className='font-normal normal-case'>{cliente}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha: {''}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Contacto: {''}
                    <span className='font-normal normal-case'>{contacto}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Numero Telefonico: {''}
                    <span className='font-normal normal-case'>{telefono}</span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Servicio: {''}
                    <span className='font-normal normal-case'>{servicio}</span>
                </p>
                <div className='flex justify-between mt-10'>
                    <button
                        className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg' type='button'
                        onClick={() => setBitacora(bitacora)}
                    >Editar</button>
                    <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                        type='button'
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
        </>

    )
}

export default Bitacora