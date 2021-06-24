import './assets/css/App.css';
import React,{useState,useEffect} from 'react';
import Inicio from './Inicio'
import MenuVar from './Componentes/MenuVar'
import TodoList from './Componentes/TodoList'
import Form from './Componentes/Form'
import {Modal} from 'reactstrap';
import firebase from './firebase';
import ListaAmigos from './Componentes/ListaAmigos';

function App() {
  const [user,setUser]=useState ([]);/*Usuario actual*/
  const [todo,setTodos]=useState ([]);/*Publicaciones*/
  const [inputText,setInputText] = useState ("");/*Nuevo Post*/
  const [ingreso,setIngreso]=useState (true);/*Abrir y cerrar Inicio*/
  const [ListaUsuarios,setListaUsuarios]=useState ([]);/*Lista Usuarios*/

  useEffect (()=>{
    const todoRef=firebase.database().ref('User');
    todoRef.on("value",(snapshot)=>{
      const usuarios=snapshot.val();
      const usuariosLista=[];
      for(let id in usuarios ){
        usuariosLista.push(usuarios[id]);
      }
      console.log(usuariosLista);
      setListaUsuarios(usuariosLista);
    });

    const todoReff=firebase.database().ref('Apunte');
    todoReff.on("value",(snapshot)=>{
      const Apuntes=snapshot.val();
      const ApuntesLista=[];
      for(let id in Apuntes){
        ApuntesLista.push(Apuntes[id]);
      }
      console.log(ApuntesLista)
      setTodos(ApuntesLista);
    });
  },[]);

  return (
    <div className="App">
      <header>
        <MenuVar setIngreso={setIngreso}/>
      </header>
      <Modal isOpen={ingreso}>
          <Inicio user={user} setUser={setUser} setIngreso={setIngreso} ListaUsuarios={ListaUsuarios}/>
      </Modal>
      <div id="Aver">
        <div id="Aver2">
          <Form todo={todo} setTodos={setTodos} setInputText={setInputText} inputText={inputText} user={user} />
          <TodoList todo={todo} user={user}/>
        </div>
        <ListaAmigos ListaUsuarios={ListaUsuarios} user={user} />
      </div>
    </div>
  );
}

export default App;
