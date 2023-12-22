import React from "react";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import carrito from "../images/carrito.png";
import corazon from "../images/corazon.png";
import { Dropdown } from "./Dropdown";
export const Header = () => {


    return (
        <header>
            <div className="logo">
                <Link to={`/productos`}>
                    <img src={logo}></img>
                </Link>
                <h2>Glamora</h2>
            </div>
            <Dropdown />
            <div className="imgHeader">
                <Link to={`/carrito`}>
                    <img src={carrito}></img>
                </Link>
                <Link to={`/favoritos`}>
                    <img src={corazon}></img>
                </Link>
            </div>
            <div className="buscador">
                <input type="text" placeholder="Buscar producto.." />
                <button className="btnBuscar">Buscar</button>
            </div>
        </header>
    );
}