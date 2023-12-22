import React from 'react';
import { ProductoMaquillaje } from '../../components/ProductoMaquillaje';

import ITCOSMETICS from  '../../images/Maquillaje/id_8.png';
import LOREAL from  '../../images/Maquillaje/id_9.png';
import SENSAI from  '../../images/Maquillaje/id_10.png';
import ESEENCECo from  '../../images/Maquillaje/id_11.png';
import RIMMEL from  '../../images/Maquillaje/id_12.png';
import WET from  '../../images/Maquillaje/id_13.png';


export const Rostro = () => {

    const rostro =  [
        { id: "1", name: "IT COSMETICS", descripcion: 'Base de maquillaje cobertura total', src: ITCOSMETICS, precio: '22,95€' },
        { id: "2", name: "L'OREAL PARIS", descripcion: 'Serum con color', src: LOREAL, precio: '13,95€' },
        { id: "3", name: "SENSAI", descripcion: 'Base de maquillaje antiedad', src: SENSAI, precio: '65,00€' },
        { id: "4", name: "ESSENCE", descripcion: 'Colorete en barra', src: ESEENCECo, precio: '3,95€' },
        { id: "5", name: "RIMMEL LONDON", descripcion: 'Colorete en stick', src: RIMMEL, precio: '5,95€' },
        { id: "6", name: "WET N WILD", descripcion: 'Stick para resaltar y contornear', src: WET, precio: '5,95€' },

    ]
    return (

        <div className='pantalla-principal'>
            <h2 className="title">Maquillaje - Rostro</h2>
            <div className="cards-container">               
                {
                    rostro.map((r) => (
                        <ProductoMaquillaje
                            name={r.name}
                            src={r.src}
                            precio={r.precio}
                            descripcion={r.descripcion}
                        />
                    ))
                }
            </div>
        </div>
    );
}