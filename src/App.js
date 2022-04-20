import React, { useState } from 'react';
import TablaTelefonos from './comp/TablaTelefonos'
import AddTelefono from './comp/AddTelefono'
import EditTelefono from './comp/EditTelefono'
import {v4 as uuid} from 'uuid'
function App() {
  const telefonosData = [
    {id: uuid(), marca: 'Apple', modelo: 'iPhone 5', precio: '4000', mem_int: '32', mem_ram: '2', cam_prin: '12', cam_fron: '5', nota: 'Ya no esta tan caro'}
  ]
  const [telefonos,setTelefonos] = useState(telefonosData)
  const [telactual, setTelAct] = useState({
    id: null , marca: '', modelo: '', precio: '', mem_int: '', mem_ram: '', cam_prin: '', cam_fron: '', nota: ''
  })
  const edro = (te) => {
    setEdit(true)
    setTelAct({
      id: te.id, marca: te.marca, modelo: te.modelo, precio: te.precio, mem_int: te.mem_int,
      mem_ram: te.mem_ram, cam_prin: te.cam_prin, cam_fron: te.cam_fron, nota: te.nota
    })
  } 
  
  const addTelefono = (telefono) => {
    telefono.id = uuid()
    setTelefonos([
      ...telefonos,
      telefono
    ])
  }
  const updTel = (id,updtdTel) => {
    setEdit(null)
    setTelefonos(telefonos.map(telefono => (telefono.id === id ? updtdTel : telefono)))
  }

  const delTelefono = id => {
    const xd = telefonos.filter(telefono => telefono.id !== id)
    setTelefonos(xd) 
  }
  const [edit, setEdit] = useState(false);

  return (
    <div className="App">
      <div className='flex-row'>
        <div className='flex-small'>
          {
            edit ? (
              <div>
                <h3>Edicion</h3>
                <EditTelefono telactual={telactual} updTel={updTel}/>
                {/* 
                    asegurate que mandas los props necesarios en cada componente,
                    en el caso de editar fijate que mando dos telactual para señalar 
                    el campo a editar, y updTel para mandar la const que va a servir
                    la tabla principal

                    Si algun componente te señala que por ejemplo en la accion de un botón
                    la accion no es de tipo metodo checa que estes mandando bien las 
                    props que debe recibir ese componente para que funcione bien.
                */}
              </div>
            ):(
              <div>
                <h3>Registro</h3>
                <AddTelefono addTelefono={addTelefono}/>
              </div>
            )
          }
        </div>
        <div className='flex-small'>
          <h3>Listado</h3>
          <TablaTelefonos telefonos={telefonos} delTelefono={delTelefono} setEdit={setEdit} edro={edro}/>
        </div>
      </div>
    </div>
  );
}

export default App;
