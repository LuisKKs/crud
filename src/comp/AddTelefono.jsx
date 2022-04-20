import React from 'react';
import {useForm} from 'react-hook-form'
const AddTelefono = (props) => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data,e) => {
        console.log(data)
        props.addTelefono(data)
        e.target.reset();
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Marca</label>
                <input type="text" name="marca" {...register("marca",{ required: { value: true, message: 'Campo Requerido' }})} />
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
                <button>Registrar</button>
            </form>
        </div>
    );
}
export default AddTelefono;