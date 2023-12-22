import React from 'react';
import { Link } from "react-router-dom";
import useRedirection from "../hooks/useRedirection";
import logo from "../images/logo.png";
import { Spinner } from '../components/Spinner';

function Inicio() {

    useRedirection("/productos", 5000); // Redireccionamos a la vista de restaurantes en 3 segundos

    return (
        <div>
            <div className="inicio">
                    <h1>Glamora <img src={logo}></img></h1>
                    <Spinner/>                
            </div>
        </div>


    );
}

export default Inicio;
