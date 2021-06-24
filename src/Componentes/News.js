import React from 'react';
import Like from '../assets/imagenes/like.png';
import dislike from '../assets/imagenes/dislike.png';

const News =({titulo,descripcion,likes,dislikes,user,useruser})=>{
        return (
            <div id="Contenido-Contener">
                <h4 id="Titulo">{user}<br/>{titulo}</h4>
                <div id="Contenido-Tarea">
                    <p id="Descripcion">{descripcion}</p>
                    <div id="Tarea-Interacciones">
                        {likes}<img src={Like} className="tamano" alt=""/>
                        {dislikes}<img src={dislike} className="tamano" alt=""/>
                    </div>
                </div>
                    <button id="btnEliminar">Eliminar</button>
               
            </div>
        );
}

export default News;