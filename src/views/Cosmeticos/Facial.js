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


export const Facial = () => {

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

    return (

        <div className='pantalla-principal'>
            <h2 className="title">Cosméticos faciales</h2>
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


            </div>

        </div>
    );
}