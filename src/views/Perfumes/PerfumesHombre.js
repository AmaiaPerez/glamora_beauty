import React from 'react';
import { ProductoPerfumes } from '../../components/ProductoPerfumes';
import redTobacco from "../../images/Perfumes Hombre/id_1.png";
import VetiverSensuel from "../../images/Perfumes Hombre/id_2.png";
import OscentWhite from "../../images/Perfumes Hombre/id_3.png";
import CarthusiaUomo from "../../images/Perfumes Hombre/id_4.png";
import FixExtasy from "../../images/Perfumes Hombre/id_5.png";
import SilverBlue from "../../images/Perfumes Hombre/id_6.png";
import EauDeParfum from "../../images/Perfumes Hombre/id_7.png";
import IndianDream from "../../images/Perfumes Hombre/id_8.png";
import AquaWood from "../../images/Perfumes Hombre/id_9.png";


export const PerfumesHombre = () => {


    const perfumesHombre = [
        { id: "1", name: "MANCERA PARIS", descripcion: 'Red Tobacco', src: redTobacco, precio: '104,95€' },
        { id: "2", name: "MANCERA PARIS", descripcion: 'Vetiver Sensuel', src: VetiverSensuel, precio: '94,95€' },
        { id: "3", name: "ALEXANDRE. J", descripcion: 'Oscent White', src: OscentWhite, precio: '141,95€' },
        { id: "4", name: "CARTHUSIA", descripcion: 'Carthusia Uomo', src: CarthusiaUomo, precio: '149,95€' },
        { id: "5", name: "MANCERA PARIS", descripcion: 'Fix Extasy', src: FixExtasy, precio: '144,95€' },
        { id: "6", name: "MANCERA PARIS", descripcion: 'Silver Blue', src: SilverBlue, precio: '94,95€' },
        { id: "7", name: "CARTHUSIA", descripcion: '1681 Eau De Parfum', src: EauDeParfum, precio: '149,95€' },
        { id: "8", name: "MANCERA PARIS", descripcion: 'Indian Dream', src: IndianDream, precio: '89,95€' },
        { id: "9", name: "MANCERA PARIS", descripcion: 'Aqua Wood', src: AquaWood, precio: '89,95€' }
    ]

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Perfumes - Hombre</h2>

            <div className="cards-container">
                {
                    perfumesHombre.map((perfume) => (
                        <ProductoPerfumes
                            name={perfume.name}
                            src={perfume.src}
                            precio={perfume.precio}
                            descripcion={perfume.descripcion}
                        />
                    ))

                }
            </div>


        </div>
    );
}