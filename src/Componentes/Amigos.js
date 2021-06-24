import React from 'react';
import Portada from '../assets/imagenes/Portada.jpg'

const Amigos =({email})=>{
    return(
            <div className="friend-card">
                  <img src={Portada} alt="profile-cover" className="img-responsive cover"/>
                  <div className="card-info">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="user" className="profile-photo-lg"/>
                  <div className="friend-info">
                    <h4 className="profile-link">{email}</h4>
                    <br/>
                    <botton  className="text-green"><b>Solicitar Amistad</b></botton>
                    <br/>
                  </div>
                </div>
            </div>
    );
}

export default Amigos;