import React from 'react';
import { ProductoMaquillaje } from '../../components/ProductoMaquillaje';

import MAYBELLINE from  '../../images/Maquillaje/id_1.png';
import ESSENCE from  '../../images/Maquillaje/id_2.png';
import CLINIQUE from  '../../images/Maquillaje/id_3.png';
import YVESSAINTLAURENT from  '../../images/Maquillaje/id_4.png';
import ESSENCEOj from  '../../images/Maquillaje/id_5.png';
import MAGICSTUDIO from  '../../images/Maquillaje/id_6.png';
import GOT2B from  '../../images/Maquillaje/id_7.png';

import ITCOSMETICS from  '../../images/Maquillaje/id_8.png';
import LOREAL from  '../../images/Maquillaje/id_9.png';
import SENSAI from  '../../images/Maquillaje/id_10.png';
import ESEENCECo from  '../../images/Maquillaje/id_11.png';
import RIMMEL from  '../../images/Maquillaje/id_12.png';
import WET from  '../../images/Maquillaje/id_13.png';


import CLINIQUEBr from  '../../images/Maquillaje/id_14.png';
import MAYBELLINEPi from  '../../images/Maquillaje/id_15.png';
import ESSENCEBr from  '../../images/Maquillaje/id_16.png';
import CATRICE from  '../../images/Maquillaje/id_17.png';

export const Maquillaje = () => {

    const ojos = [
        { id: "1", name: "MAYBELLINE NEW YORK", descripcion: 'Máscara de pestañas', src: MAYBELLINE, precio: '8,95€' },
        { id: "2", name: "ESSENCE", descripcion: 'Máscara de pestañas efecto volumen', src: ESSENCE, precio: '2,75€' },
        { id: "3", name: "CLINIQUE", descripcion: 'Máscara de pestañas voluminizadora', src: CLINIQUE, precio: '19,95€' },
        { id: "4", name: "YVES SAINT LAURENT", descripcion: 'Máscara de pestañas efecto volumen', src: YVESSAINTLAURENT, precio: '19,95€' },
        { id: "5", name: "ESSENCE", descripcion: 'Paleta de sombras de ojos', src: ESSENCEOj, precio: '3,95€' },
        { id: "6", name: "MAGIC STUDIO", descripcion: 'Paleta de sombras de ojos', src: MAGICSTUDIO, precio: '1,95€' },
        { id: "7", name: "GOT2B", descripcion: 'Gel fijador cejas', src: GOT2B, precio: '5,95€' },
        ]

    const rostro =  [
        { id: "1", name: "IT COSMETICS", descripcion: 'Base de maquillaje cobertura total', src: ITCOSMETICS, precio: '22,95€' },
        { id: "2", name: "L'OREAL PARIS", descripcion: 'Serum con color', src: LOREAL, precio: '13,95€' },
        { id: "3", name: "SENSAI", descripcion: 'Base de maquillaje antiedad', src: SENSAI, precio: '65,00€' },
        { id: "4", name: "ESSENCE", descripcion: 'Colorete en barra', src: ESEENCECo, precio: '3,95€' },
        { id: "5", name: "RIMMEL LONDON", descripcion: 'Colorete en stick', src: RIMMEL, precio: '5,95€' },
        { id: "6", name: "WET N WILD", descripcion: 'Stick para resaltar y contornear', src: WET, precio: '5,95€' },

    ]

    const labios = [
        { id: "1", name: "CLINIQUE", descripcion: 'Brillo de Labios', src: CLINIQUEBr, precio: '16,95€' },
        { id: "2", name: "MAYBELLINE NEW YORK", descripcion: 'Pintalabios mate de larga duración', src: MAYBELLINEPi, precio: '6,95€' },
        { id: "3", name: "ESSENCE", descripcion: 'Brillo de labios voluminizador', src: ESSENCEBr, precio: '2,25€' },
        { id: "4", name: "CATRICE", descripcion: 'Gloss', src: CATRICE, precio: '8,95€' },
    ]

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Maquillaje</h2>
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
                {
                    labios.map((labio) => (
                        <ProductoMaquillaje
                            name={labio.name}
                            src={labio.src}
                            precio={labio.precio}
                            descripcion={labio.descripcion}
                        />
                    ))
                }
            </div>
        </div>
    );
}