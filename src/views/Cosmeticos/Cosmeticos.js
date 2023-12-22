import React from 'react';
import { Cosmetico } from '../../components/Cosmetico';
import THEORDINARY from '../../images/Cosmeticos/id_1.png';
import ZIAJA from '../../images/Cosmeticos/id_2.png';
import LANCOME from '../../images/Cosmeticos/id_3.png';
import THEORDINARYS from '../../images/Cosmeticos/id_4.png';
import REVOX from '../../images/Cosmeticos/id_5.png';
import CLINIQUE from '../../images/Cosmeticos/id_6.png';
import GARNIER from '../../images/Cosmeticos/id_7.png';
import CLINIQUECr from '../../images/Cosmeticos/id_8.png';

import FLORDEMAYO from '../../images/Cosmeticos/id_9.png';
import YACEL from '../../images/Cosmeticos/id_10.png';
import CLARINS from '../../images/Cosmeticos/id_11.png';
import REDUMODEL from '../../images/Cosmeticos/id_12.png';
import CLARINSA from '../../images/Cosmeticos/id_13.png';
import SALLYHANSEN from '../../images/Cosmeticos/id_14.png';
import COLLISTAR from '../../images/Cosmeticos/id_15.png';



export const Cosmeticos = () => {

    const facial = [
        { id: "1", name: "THE ORDINARY", descripcion: 'Caffeine Solution', src: THEORDINARY, precio: '9,50€' },
        { id: "2", name: "ZIAJA", descripcion: 'Contorno de ojos antiojeras', src: ZIAJA, precio: '1,95€' },
        { id: "3", name: "LANCOME", descripcion: 'Contorno de ojos iluminador', src: LANCOME, precio: '35,95€' },
        { id: "4", name: "THE ORDINARY", descripcion: 'Serum antiedad', src: THEORDINARYS, precio: '33,95€' },
        { id: "5", name: "REVOX", descripcion: 'Exfoliante', src: REVOX, precio: '7,49€' },
        { id: "6", name: "CLINIQUE", descripcion: 'Gel-crema hidratante', src: CLINIQUE, precio: '22,95€' },
        { id: "7", name: "GARNIER", descripcion: 'Crema fresca', src: GARNIER, precio: '5,50€' },
        { id: "8", name: "CLINIQUE", descripcion: 'Crema hidratante', src: CLINIQUECr, precio: '19,95€' },
    ];

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
            <h2 className="title">Cosméticos</h2>
            <div className="cards-container">
                {
                    facial.map((f) => (
                        <Cosmetico
                            name={f.name}
                            src={f.src}
                            precio={f.precio}
                            descripcion={f.descripcion}
                        />
                    ))

                }
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