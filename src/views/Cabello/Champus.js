import React from 'react';
import { ProductoCabello } from '../../components/ProductoCabello';
import OLAPLEX from '../../images/Champus/id_1.png';
import KERASTASEFor from '../../images/Champus/id_2.png';
import HAIRBURST from '../../images/Champus/id_3.png';
import KERASTASEUlt from '../../images/Champus/id_4.png';
import KERASTASEReg from '../../images/Champus/id_5.png';
import CANTU from '../../images/Champus/id_6.png';
import FANOLA from '../../images/Champus/id_7.png';
import REDKEN from '../../images/Champus/id_8.png';
import KERASTASEPur from '../../images/Champus/id_9.png';

export const Champus = () => {

	const champus = [
        { id: "1", name: "OLAPLEX", descripcion: 'Champú reparador', src: OLAPLEX, precio: '19,95€' },
        { id: "2", name: "KERASTINE", descripcion: 'Champú Fortificante Anti-Caída', src: KERASTASEFor, precio: '19,95€' },
        { id: "3", name: "HAIRBURST", descripcion: 'Champú Para Cabello Graso', src: HAIRBURST , precio: '15,95€' },
        { id: "4", name: "KERASTASE", descripcion: 'Champú Ultravioleta Neutralizante', src: KERASTASEUlt, precio: '19,95€' },
        { id: "5", name: "KERASTASE", descripcion: 'Champú Regenerante', src:KERASTASEReg , precio: '19,95€' },
        { id: "6", name: "CANTU", descripcion: 'Champú Cabello Natural', src:CANTU , precio: '6,95€' },
        { id: "7", name: "FANOLA", descripcion: 'Champú Reestructurante', src:FANOLA , precio: '4,95€' },
        { id: "8", name: "REDKEN", descripcion: 'Champú reparador cabello', src: REDKEN, precio: '21,95€' },
        { id: "9", name: "KERASTASE", descripcion: ',Champú Purificante Fortalecedor', src: KERASTASEPur, precio: '19,95€' }
    ]


    return (

		<div className='pantalla-principal'>
		<h2 className="title">Champus</h2>
		<div className="cards-container">
			{
				champus.map((champu) => (
					<ProductoCabello
						name={champu.name}
						src={champu.src}
						precio={champu.precio}
						descripcion={champu.descripcion}
					/>
				))
				
			}
			
		</div>

	</div>
        
    );
}