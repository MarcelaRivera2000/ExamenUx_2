import React,{useState} from 'react';
import {Modal} from 'reactstrap';
import Login from './Componentes/LoginWithGoogle';
import './assets/css/PInicio.css'
import firebase from './firebase'

const Inicio=({setUser,setIngreso,ListaUsuarios})=>{
    const userr={
        email:"",
        pass:"",
        amigo:[0],
        post:[0],
        solicitudes:[0]
    }

    const[abrir,setAbrir]= useState(true);
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setUser(userr);
        setAbrir(false);
        setIngreso(true);
        const todoRef=firebase.database().ref('User');
        todoRef.push(userr);
    };
    const inputEmail=(titulo)=>{
        userr.email=titulo.target.value;
    };
    const inputPass=(Descrip)=>{
        userr.pass=Descrip.target.value;
    };

    const Validacion =()=>{
        var aux=false;
        for(let id in ListaUsuarios ){
            // eslint-disable-next-line eqeqeq
            if((ListaUsuarios[id].email==userr.email) &&(ListaUsuarios[id].pass==userr.pass)){
                setUser(userr);
                setAbrir(false);
                aux=true;
            }
        }
        // eslint-disable-next-line eqeqeq
        if(aux==false){
            alert("Email / Contrasena Incorrecta");
        }
    }
    
    return (
        <div>
        <Modal isOpen={abrir} id="PantallaInicioFondo">
                <div id="PantallaIncio">
                    <h2>Sing in to MeNexx</h2>
                    <h4>Email Address</h4>
                    <input type="text" onChange={inputEmail}/>
                    <h4>Password</h4>
                    <input type="password" onChange={inputPass}/>
                    <div id="ConjuntoBtn">
                        <button id="btnSingIn" className="btn" onClick={Validacion}>Sing In</button>
                        <button id="btnRegistrar" className="btn" onClick={submitTodoHandler}>Sing Up</button>
                    </div>
                    <Login/>
                </div>
        </Modal>
        </div>
    );
}
export default Inicio;