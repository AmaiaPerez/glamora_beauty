import React, {useContext} from 'react';
import '../styles/styles.css';
import {Producto} from "../components/Producto";
import {ProductosContext} from "../context/ProductosContext";
import {LinearProgress} from "@mui/material";

export const Productos = () => {

    const { productos } = useContext(ProductosContext);
    return (
        <div className='pantalla-principal'>
            <h2 className="title">Productos</h2>
            <div className="cards-container">                
                {
                    productos.length > 0 ? (
                        productos.map((producto, index) => (
                            <Producto
                                key={index}
                                id={producto.id}
                                name={producto.name}
                                src={producto.src}
                                link={producto.link}
                                descripcion={producto.descripcion}
                            />
                        ))
                    ) : (
                        <LinearProgress color="primary"/>
                    )
                }
                {}
            </div>
        </div>
    );
}