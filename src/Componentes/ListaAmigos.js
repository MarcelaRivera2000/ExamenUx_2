import React from 'react';
import '../assets/css/Friends.css'
import Amigos from './Amigos'

const ListaAmigos =({ListaUsuarios,user})=>{
    return(
        <div className="friend-list amiwos">
            <h4>Personas que quiza conozcas...</h4>
            {ListaUsuarios.map(ListaUsuarios=>(
               <Amigos email={ListaUsuarios.email} user={user}/> 
            ))}
        </div>
    );
}

export default ListaAmigos;