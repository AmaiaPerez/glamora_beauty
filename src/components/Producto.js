import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export const Producto = ({ name, src, link, descripcion }) => {
    return (
     <body>
        <div className="container">
            <div className="card">
                <img src={src}></img>
                <h4>{name}</h4>
                <p>{descripcion}</p>
                <Link to={link}>                
                    <Button className="btn" variant="light">Ver catálogo</Button>
                </Link>
            </div>            
        </div>  
    </body>
    );
}