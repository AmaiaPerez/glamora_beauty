import React, {useContext} from 'react';
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
import LOREALNu from '../../images/Mascarillas/id_1.png';
import OLAPLEXHi from '../../images/Mascarillas/id_2.png';
import REVOX from '../../images/Mascarillas/id_3.png';
import FANOLARe from '../../images/Mascarillas/id_4.png';
import LOREALCa from '../../images/Mascarillas/id_5.png';
import REVLON from '../../images/Mascarillas/id_6.png';
import JUSTFORMEN from '../../images/Tintes/id_1.png';
import EXCELLENCE from '../../images/Tintes/id_2.png';
import OLIA from '../../images/Tintes/id_3.png';
import CASTINGCREMEGLOSS from '../../images/Tintes/id_4.png';

export const Cabello = () => {

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

	const mascarillas = [
        { id: "1", name: "L'OREAL", descripcion: 'Mascarilla Nutritiva', src: LOREALNu, precio: '19,95€' },
        { id: "2", name: "OLAPLEX", descripcion: 'Mascarilla Hidratante', src: OLAPLEXHi, precio: '19,95€' },
        { id: "3", name: "REVOX", descripcion: 'Macarilla capilar', src: REVOX, precio: '9,95€' },
        { id: "4", name: "FANOLA", descripcion: 'Mascarilla Reestructurante', src: FANOLARe, precio: '4,95€' },
        { id: "5", name: "L'OREAL", descripcion: 'Mascarilla Capilar Cabellos Dañados', src: LOREALCa, precio: '19,95€' },
        { id: "6", name: "REVLON PROFESSIONAL", descripcion: 'Mascarilla para cabello dañado', src: REVLON, precio: '9,95€' },
    ]

	const tintes = [
        { id: "1", name: "JUST FOR MEN", descripcion: 'Colorante En Champú', src: JUSTFORMEN, precio: '10,95€' },
        { id: "2", name: "EXCELLENCE", descripcion: 'Coloración en crema', src: EXCELLENCE, precio: '7,15€' },
        { id: "3", name: "OLIA", descripcion: 'Coloración permanente sin amoniaco', src: OLIA, precio: '6,95€' },
        { id: "4", name: "CASTING CREME GLOSS", descripcion: 'Coloración sin amoniaco', src: CASTINGCREMEGLOSS, precio: '5,95€' },
        ]

    return (

		<div className='pantalla-principal'>
		<h2 className="title">Productos para el cabello</h2>
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
			{
				mascarillas.map((mascarilla) => (
					<ProductoCabello
						name={mascarilla.name}
						src={mascarilla.src}
						precio={mascarilla.precio}
						descripcion={mascarilla.descripcion}
					/>
				))
			}
			{
				tintes.map((tinte) => (
					<ProductoCabello
						name={tinte.name}
						src={tinte.src}
						precio={tinte.precio}
						descripcion={tinte.descripcion}
					/>
				))
			}
		</div>

	</div>
        
    );
}