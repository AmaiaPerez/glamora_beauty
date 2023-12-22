import React, {useContext} from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import X from '../images/x.png';
export const Favorito = ({ name, src, descripcion, precio, producto}) => {
    
    const {eliminarProductoFavorito} = useContext(FavoritosContext);
    return (
     <body>
        <div className="container">
            <div className="card">
                <img src={src}></img>
                <h4>{name}</h4>
                <p>{descripcion}</p>
                <p>{precio}</p>
                <button className="btn" onClick={() => eliminarProductoFavorito(producto)}><img className="x" src={X}></img></button>
            </div>            
        </div>  
    </body>
    );
}