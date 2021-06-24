import React from 'react'

const MenuVar=({setIngreso})=>{
        const cerrar=()=>{
            setIngreso(true);
        }
        return (
            <div className ="wrapper">
                <p id="NameEmpresa">Menexx News</p>
                <nav>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#"  type="button">Notifications</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                    <a href="#"  type="button" onClick={cerrar}>Log Out</a>
                </nav>
        
            </div>
        );
    
}

export default MenuVar;