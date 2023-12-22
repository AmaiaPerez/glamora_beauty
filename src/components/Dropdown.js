import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => {

    return (
        <nav>
            <div className="dropdown">
                <Link to={`/cabello`}>
                    <button className="dropbtn" >Cabello</button>
                </Link>
                <div className="dropdown-content">
                    <Link to={`/champus`}>
                        <a>Champus</a>
                    </Link><Link to={`/mascarillas`}>
                        <a>Mascarillas</a>
                    </Link>
                    <Link to={`/tintes`}>
                        <a>Tintes</a>
                    </Link>
                </div>
            </div>
            <div className="dropdown">
                <Link to={`/cosmeticos`}>
                    <button className="dropbtn">Cosmética</button>
                </Link>
                <div className="dropdown-content">
                    <Link to={`/facial`}>
                        <a>Facial</a>
                    </Link>
                    <Link to={`/corporal`}>
                        <a>Corporal</a>
                    </Link>
                </div>
            </div>
            <div className="dropdown">
                <Link to={`/maquillaje`}>
                    <button className="dropbtn">Maquillaje</button>
                </Link>
                <div className="dropdown-content">
                    <Link to={`/rostro`}>
                        <a>Rostro</a>
                    </Link>
                    <Link to={`/ojos`}>
                        <a>Ojos</a>
                    </Link>
                    <Link to={`/labios`}>
                        <a>Labios</a>
                    </Link>
                </div>
            </div>
            <div className="dropdown">
                <Link to={`/perfumes`}>
                    <button className="dropbtn">Perfumes</button>
                </Link>
                <div className="dropdown-content">
                    <Link to={`/perfumesHombre`}>
                        <a>Perfumes Hombre</a>
                    </Link>
                    <Link to={`/perfumesMujer`}>
                        <a>Perfumes Mujer</a>
                    </Link>
                    <Link to={`/perfumesInfantiles`}>
                        <a>Perfumes Infantiles</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}