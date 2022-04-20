import React from 'react';
const TablaTelefonos = (props) => {
    console.log(props.telefonos)
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Precio</th>
                    <th>ROM</th>
                    <th>RAM</th>
                    <th>Cam(Principal)</th>
                    <th>Cam(Frontal)</th>
                    <th>Nota</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {   
                    props.telefonos.map(telefonos =>(
                        <tr key={telefonos.id}>
                            <td>{telefonos.marca}</td>
                            <td>{telefonos.modelo}</td>
                            <td>{telefonos.precio}</td>
                            <td>{telefonos.mem_int}</td>
                            <td>{telefonos.mem_ram}</td>
                            <td>{telefonos.cam_prin}</td>
                            <td>{telefonos.cam_fron}</td>
                            <td>{telefonos.nota}</td>
                            <td>
                                {/* Fijate que andes mandando bien todas las props dentro de los botones*/}
                                <button className='button muted-button' onClick={ () => props.edro(telefonos) }>Editar</button>
                                <button className='button muted-button' onClick={ () => props.delTelefono(telefonos.id) }>Borrar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>    
    );
}
export default TablaTelefonos;