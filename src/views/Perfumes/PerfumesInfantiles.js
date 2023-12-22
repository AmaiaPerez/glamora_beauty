import React from 'react';
import { ProductoPerfumes } from '../../components/ProductoPerfumes';
import Tous from '../../images/Perfumes Infantiles/id_1.png';
import Saphir from '../../images/Perfumes Infantiles/id_2.png';
import Pusheen from '../../images/Perfumes Infantiles/id_3.png';
import Frozen from '../../images/Perfumes Infantiles/id_4.png';
import HelloKitty from '../../images/Perfumes Infantiles/id_5.png';
import Dina from '../../images/Perfumes Infantiles/id_6.png';



export const PerfumesInfantiles = () => {



    const perfumesInfantiles = [
        { id: "1", name: "TOUS", descripcion: 'Tous Kids Girl', src: Tous, precio: '29,95€' },
        { id: "2", name: "SAPHIR", descripcion: 'Pink Kids', src: Saphir, precio: '4,95€' },
        { id: "3", name: "PUSHEEN", descripcion: 'Body Mist Rosa', src: Pusheen, precio: '1,99€' },
        { id: "4", name: "FROZEN", descripcion: 'Colonia Sence Froze', src: Frozen, precio: '1,99€' },
        { id: "5", name: "HELLO KITTY", descripcion: 'Unicorn Rainbow', src: HelloKitty, precio: '1,00€' },
        { id: "6", name: "SAPHIR", descripcion: 'Dina', src: Dina, precio: '1,99€' },]



    return (

        <div className='pantalla-principal'>
            <h2 className="title">Perfumes - Infantiles</h2>
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
            </div>

        </div>
    );
}