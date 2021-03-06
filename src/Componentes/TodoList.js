import React from 'react';
import News from './News';

const TodoList =({todo,user})=>{  
    return(
        <div id="Aver3">
            {todo.map(todo=>(
               <News 
                   titulo={todo.titulo}
                   descripcion={todo.descripcion}
                   likes={todo.likes}
                   dislikes={todo.dislikes}
                   activo={todo.activo}
                   user={todo.usuario}
                   date={todo.date}
                   useruser={user.email}
                /> 
            ))}          
        </div>
    );
}

export default TodoList;