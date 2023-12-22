import React from 'react';
import { Cosmetico } from '../../components/Cosmetico';
import FLORDEMAYO from '../../images/Cosmeticos/id_9.png';
import YACEL from '../../images/Cosmeticos/id_10.png';
import CLARINS from '../../images/Cosmeticos/id_11.png';
import REDUMODEL from '../../images/Cosmeticos/id_12.png';
import CLARINSA from '../../images/Cosmeticos/id_13.png';
import SALLYHANSEN from '../../images/Cosmeticos/id_14.png';
import COLLISTAR from '../../images/Cosmeticos/id_15.png';



export const Corporal = () => {

    const corporal = [
        { id: "1", name: "FLOR DE MAYO", descripcion: 'Alcohol para masaje corporal', src: FLORDEMAYO, precio: '0,99€' },
        { id: "2", name: "YACEL", descripcion: 'Gel reafirmante', src: YACEL, precio: '9,95€' },
        { id: "3", name: "CLARINS", descripcion: 'Crema reafirmante', src: CLARINS, precio: '30,95€' },
        { id: "4", name: "REDUMODEL", descripcion: 'Crema anti celulítica', src: REDUMODEL, precio: '7,99€' },
        { id: "5", name: "CLARINS", descripcion: 'Aceite corporal', src: CLARINSA, precio: '31,95€' },
        { id: "6", name: "SALLY HANSEN", descripcion: 'Agua bronceadora', src: SALLYHANSEN, precio: '12,95€' },
        { id: "7", name: "COLLISTAR", descripcion: 'Crema Termal Anticelulítica', src: COLLISTAR, precio: '41,30€' },
    ];

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Cosméticos corporales</h2>
            <div className="cards-container">                
                {
                    corporal.map((c) => (
                        <Cosmetico
                            name={c.name}
                            src={c.src}
                            precio={c.precio}
                            descripcion={c.descripcion}
                        />
                    ))
                }

            </div>

        </div>
    );
}