import React from 'react';
import { ProductoPerfumes } from '../../components/ProductoPerfumes';
import CkOne from '../../images/Perfumes Mujer/id_1.png';
import Fantasy from '../../images/Perfumes Mujer/id_2.png';
import BlackOpium from '../../images/Perfumes Mujer/id_3.png';
import LaVieEstBelle from '../../images/Perfumes Mujer/id_4.png';
import LImperatrice from '../../images/Perfumes Mujer/id_5.png';
import HugoDeepRed from '../../images/Perfumes Mujer/id_6.png';
import Paradoxe from '../../images/Perfumes Mujer/id_7.png';
import Sì from '../../images/Perfumes Mujer/id_8.png';
import ChGoodGirl from '../../images/Perfumes Mujer/id_9.png';



export const PerfumesMujer = () => {


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

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Perfumes - Mujer</h2>
            <div className="cards-container">
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