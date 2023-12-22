import React, { useState , useContext} from "react";
import Button from 'react-bootstrap/Button';
import { CarritoContext } from "../context/CarritoContext";
import { FavoritosContext } from "../context/FavoritosContext";


export const ProductoCabello = ({ name, src, precio, descripcion }) => {

    
    const {carrito, añadirAlCarrito} = useContext(CarritoContext);
    const {favoritos, añadirAFavoritos} = useContext(FavoritosContext);
    return (
     <body>
        <div className="container">
            <div className="card">
                <img className="imgPer" src={src}></img>
                <h4>{name}</h4>
                <p>{precio}</p>
                <p>{descripcion}</p>           
                <Button className="btn" variant="light" onClick={() => añadirAlCarrito({name: name, tipo: 'Cabello', descripcion: descripcion, precio: precio, cantidad: '1'}) }>Añadir al carrito</Button>                 
                <Button className="btn" variant="light" onClick={() => añadirAFavoritos({name: name, src: src, descripcion: descripcion, precio: precio})}>Guardar como favorito</Button>               
            </div>            
        </div>  
    </body>
    );
}