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
import CkOne from '../../images/Perfumes Mujer/id_1.png';
import Fantasy from '../../images/Perfumes Mujer/id_2.png';
import BlackOpium from '../../images/Perfumes Mujer/id_3.png';
import LaVieEstBelle from '../../images/Perfumes Mujer/id_4.png';
import LImperatrice from '../../images/Perfumes Mujer/id_5.png';
import HugoDeepRed from '../../images/Perfumes Mujer/id_6.png';
import Paradoxe from '../../images/Perfumes Mujer/id_7.png';
import Sì from '../../images/Perfumes Mujer/id_8.png';
import ChGoodGirl from '../../images/Perfumes Mujer/id_9.png';
import Tous from '../../images/Perfumes Infantiles/id_1.png';
import Saphir from '../../images/Perfumes Infantiles/id_2.png';
import Pusheen from '../../images/Perfumes Infantiles/id_3.png';
import Frozen from '../../images/Perfumes Infantiles/id_4.png';
import HelloKitty from '../../images/Perfumes Infantiles/id_5.png';
import Dina from '../../images/Perfumes Infantiles/id_6.png';



export const Perfumes = () => {

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
    const perfumesMujer = [
        { id: "1", name: "CALVIN KLEIN", descripcion: 'Ck One', src: CkOne, precio: '23,95€' },
        { id: "2", name: "BRITNEY SPEARS", descripcion: 'Fantasy', src: Fantasy, precio: '19,95€' },
        { id: "3", name: "YVES SAINT", descripcion: 'Black Opium', src: BlackOpium, precio: '41,95€' },
        { id: "4", name: "LANCOME", descripcion: 'La Vie Est Belle', src: LaVieEstBelle, precio: '24,95€' },
        { id: "5", name: "DOLCE & GABANNA", descripcion: 'L Imperatrice', src: LImperatrice, precio: '39,95€' },
        { id: "6", name: "HUGO BOSS", descripcion: 'Hugo Deep Red', src: HugoDeepRed, precio: '29,95€' },
        { id: "7", name: "PRADA", descripcion: 'Paradoxe', src: Paradoxe, precio: '44,95€' },
        { id: "8", name: "ARMANI", descripcion: 'Sì', src: Sì, precio: '39,95€' },
        { id: "9", name: "CAROLINA HERRERA", descripcion: 'Ch Good Girl', src: ChGoodGirl, precio: '48,95€' }
    ]
    const perfumesInfantiles = [
        { id: "1", name: "TOUS", descripcion: 'Tous Kids Girl', src: Tous, precio: '29,95€' },
        { id: "2", name: "SAPHIR", descripcion: 'Pink Kids', src: Saphir, precio: '4,95€' },
        { id: "3", name: "PUSHEEN", descripcion: 'Body Mist Rosa', src: Pusheen, precio: '1,99€' },
        { id: "4", name: "FROZEN", descripcion: 'Colonia Sence Froze', src: Frozen, precio: '1,99€' },
        { id: "5", name: "HELLO KITTY", descripcion: 'Unicorn Rainbow', src: HelloKitty, precio: '1,00€' },
        { id: "6", name: "SAPHIR", descripcion: 'Dina', src: Dina, precio: '1,99€' },]



    return (

        <div className='pantalla-principal'>
            <h2 className="title">Perfumes</h2>
            <div className="cards-container">
                {
                    perfumesInfantiles.map((perfume) => (
                        <ProductoPerfumes
                            name={perfume.name}
                            src={perfume.src}
                            precio={perfume.precio}
                            descripcion={perfume.descripcion}
                        />
                    ))
                    
                }
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
                {
                    perfumesMujer.map((perfume) => (
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