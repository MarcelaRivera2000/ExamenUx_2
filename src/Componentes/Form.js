import React from 'react';
import firebase from '../firebase'

const Form =({setInputText,setTodos,todo,user})=>{
    let apunte={
        titulo:"",
        descripcion:"",
        likes:0,
        dislikes:0,
        activo:true,
        usuario:user.email
    }

    const submitTodoHandler=(e)=>{
        setInputText(apunte);
        e.preventDefault();
        setTodos([
            ...todo,
            {titulo:apunte.titulo,
            descripcion:apunte.descripcion,
            likes:apunte.likes,
            dislikes:apunte.dislikes,
            activo:apunte.activo,
            usuario:apunte.usuario,
            date:new Date()}]);
            setInputText("");
            
        const todoRef=firebase.database().ref('Apunte');
        todoRef.push(apunte);     
    };

    const inputTitulo=(titulo)=>{
        apunte.titulo=titulo.target.value;
    };
    const inputDescripcion=(Descrip)=>{
        apunte.descripcion=Descrip.target.value;
    };
    return (
        <div className ="wrapper">
            <div  id="AgregarApunte">             
                <h3>NUEVA POST</h3>
                <form action="">
                    <div className="contenedor">
                        <p>Titulo: 
                            <input id= "Vtitulo" type="text"  onChange={inputTitulo}/>
                        </p>
                        <textarea id="Vtext-area" onChange={inputDescripcion}></textarea>
                    </div>
                    <button id="btnGuardar" className="btnGuardar" onClick={submitTodoHandler}>Guardar</button>
                </form>
            </div>
        </div>  
        );  
    }

export default Form;