import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ProductoCarrito } from '../components/ProductoCarrito';

export const Carrito = () => {

    const { carrito, añadirAlCarrito, vaciarCarrito } = useContext(CarritoContext);

    return (
        <div className='pantalla-principal'>
            <h2 className="title">Carrito</h2>
            <div className='tabla'>
                <table className='content-table'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    {
                        carrito.length > 0 ? (
                            carrito.map((producto) => (
                                <ProductoCarrito
                                    name={producto.name}
                                    tipo={producto.tipo}
                                    precio={producto.precio}
                                    descripcion={producto.descripcion}
                                    cantidad={producto.cantidad}
                                    producto={producto}
                                />
                            ))
                        ) : (
                            <a>Carrito vacío</a>
                        )
                    }
                </table>
                <Link to={`/productos`}>                
                    <Button className="btn" variant="light" >Comprar</Button>
                </Link>
                <Button className="btn" variant="light" onClick={() => vaciarCarrito()}>Vaciar cesta</Button>
            </div>
        </div>
    )
}