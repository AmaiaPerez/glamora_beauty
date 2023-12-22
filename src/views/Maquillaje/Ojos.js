import React from 'react';
import { ProductoMaquillaje } from '../../components/ProductoMaquillaje';

import MAYBELLINE from '../../images/Maquillaje/id_1.png';
import ESSENCE from '../../images/Maquillaje/id_2.png';
import CLINIQUE from '../../images/Maquillaje/id_3.png';
import YVESSAINTLAURENT from '../../images/Maquillaje/id_4.png';
import ESSENCEOj from '../../images/Maquillaje/id_5.png';
import MAGICSTUDIO from '../../images/Maquillaje/id_6.png';
import GOT2B from '../../images/Maquillaje/id_7.png';


export const Ojos = () => {

    const ojos = [
        { id: "1", name: "MAYBELLINE NEW YORK", descripcion: 'Máscara de pestañas', src: MAYBELLINE, precio: '8,95€' },
        { id: "2", name: "ESSENCE", descripcion: 'Máscara de pestañas efecto volumen', src: ESSENCE, precio: '2,75€' },
        { id: "3", name: "CLINIQUE", descripcion: 'Máscara de pestañas voluminizadora', src: CLINIQUE, precio: '19,95€' },
        { id: "4", name: "YVES SAINT LAURENT", descripcion: 'Máscara de pestañas efecto volumen', src: YVESSAINTLAURENT, precio: '19,95€' },
        { id: "5", name: "ESSENCE", descripcion: 'Paleta de sombras de ojos', src: ESSENCEOj, precio: '3,95€' },
        { id: "6", name: "MAGIC STUDIO", descripcion: 'Paleta de sombras de ojos', src: MAGICSTUDIO, precio: '1,95€' },
        { id: "7", name: "GOT2B", descripcion: 'Gel fijador cejas', src: GOT2B, precio: '5,95€' },
    ]
    return (

        <div className='pantalla-principal'>
            <h2 className="title">Maquillaje - Ojos</h2>
            <div className="cards-container">
                {
                    ojos.map((ojo) => (
                        <ProductoMaquillaje
                            name={ojo.name}
                            src={ojo.src}
                            precio={ojo.precio}
                            descripcion={ojo.descripcion}
                        />
                    ))
                }

            </div>
        </div>
    );
}