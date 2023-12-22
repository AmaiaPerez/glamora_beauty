import React from 'react';
import { ProductoMaquillaje } from '../../components/ProductoMaquillaje';

import CLINIQUEBr from  '../../images/Maquillaje/id_14.png';
import MAYBELLINEPi from  '../../images/Maquillaje/id_15.png';
import ESSENCEBr from  '../../images/Maquillaje/id_16.png';
import CATRICE from  '../../images/Maquillaje/id_17.png';

export const Labios = () => {

    const labios = [
        { id: "1", name: "CLINIQUE", descripcion: 'Brillo de Labios', src: CLINIQUEBr, precio: '16,95€' },
        { id: "2", name: "MAYBELLINE NEW YORK", descripcion: 'Pintalabios mate de larga duración', src: MAYBELLINEPi, precio: '6,95€' },
        { id: "3", name: "ESSENCE", descripcion: 'Brillo de labios voluminizador', src: ESSENCEBr, precio: '2,25€' },
        { id: "4", name: "CATRICE", descripcion: 'Gloss', src: CATRICE, precio: '8,95€' },
    ]

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Maquillaje - Labios</h2>
            <div className="cards-container">                
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