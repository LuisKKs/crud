import React from 'react'
import {useForm} from 'react-hook-form' //Fijate que hayas hecho este import para los dos formularios
const EditTelefono = (props) => {
    const {register, handleSubmit, formState:{errors}, setValue} = useForm({
        defaultValues: props.telactual
    });
    //los set value son solo necesarios en editar
    setValue('marca',props.telactual.marca)
    setValue('modelo',props.telactual.modelo)
    setValue('precio',props.telactual.precio)
    setValue('mem_int',props.telactual.mem_int)
    setValue('mem_ram',props.telactual.mem_ram)
    setValue('cam_prin',props.telactual.cam_prin)
    setValue('cam_fron',props.telactual.cam_fron)
    setValue('nota',props.telactual.nota)
    const onSubmit = (data,e) => {
        console.log(data)
        data.id = props.telactual.id
        props.updTel(props.telactual.id, data)
        e.target.reset();
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Marca</label>            {/* toda esta parte de abajo del register es lo que vas a cambiar y poner bien en tu codigo
                                                    de esta manera es como funciona por que cambio por la version de las bibliotecas y del react*/}
                <input type="text" name="marca" {...register("marca",{ required: { value: true, message: 'Campo Requerido' }})} />
                     {/* Igual con esta linea de abajo es para que haga la requisicion de los datos obligatorios */}
                <div>{errors.marca?.type==='required'&&'Campo Requerido'}</div>
                <label>Modelo</label>
                <input type="text" name="modelo" {...register("modelo",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.modelo?.type==='required'&&'Campo Requerido'}</div>
                <label>Pecio</label>
                <input type="text" name="precio" {...register("precio",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.precio?.type==='required'&&'Campo Requerido'}</div>
                <label>ROM</label>
                <input type="text" name="mem_int" {...register("mem_int",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.mem_int?.type==='required'&&'Campo Requerido'}</div>
                <label>RAM</label>
                <input type="text" name="mem_ram" {...register("mem_ram",{ required: { value:true , message: 'Campo Requerido' }})} />
                <div>{errors.mem_ram?.type==='required'&&'Campo Requerido'}</div>
                <label>Camara(Principal)</label>
                <input type="text" name="cam_prin" {...register("cam_prin",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.cam_prin?.type==='required'&&'Campo Requerido'}</div>
                <label>Camara(Frontal)</label>
                <input type="text" name="cam_fron" {...register("cam_fron",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.cam_fron?.type==='required'&&'Campo Requerido'}</div>
                <label>Nota</label>
                <input type="text" name="nota" {...register("nota",{ required: { value: true, message: 'Campo Requerido' }})} />
                <div>{errors.nota?.type==='required'&&'Campo Requerido'}</div>
                <button>Editar Telefono</button>
            </form>
            {/* Los dos comentarios dentro de la etiqueta de la form aplican para cada input, la primera nota es para señalar que es requerido
                la segunda nota en linea 28 es para señalar donde se va a renderizar el mensaje ed que el campo es requerido si es que no se puso
            */}
        </div>
    );
}
export default EditTelefono;