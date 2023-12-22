import React, {useContext} from "react";
import basura from "../images/basura.png"
import { CarritoContext } from "../context/CarritoContext";

export const ProductoCarrito = ({ name, tipo, descripcion, precio, cantidad, producto}) => {
    
    const { eliminarDelCarrito } = useContext(CarritoContext);
    return (
        <tbody>
        <tr>
            <td>{name}</td>
            <td>{tipo}</td>
            <td>{descripcion}</td>
            <td>{precio}</td>
            <td>{cantidad}</td>
            <td><button onClick={() => eliminarDelCarrito(producto)}><img className="imgBasura" src={basura}></img></button></td>
        </tr>
    </tbody>
    );
}