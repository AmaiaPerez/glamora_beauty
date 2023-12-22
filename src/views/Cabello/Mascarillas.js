import React, { useContext } from 'react';
import { ProductoCabello } from '../../components/ProductoCabello';
import LOREALNu from '../../images/Mascarillas/id_1.png';
import OLAPLEXHi from '../../images/Mascarillas/id_2.png';
import REVOX from '../../images/Mascarillas/id_3.png';
import FANOLARe from '../../images/Mascarillas/id_4.png';
import LOREALCa from '../../images/Mascarillas/id_5.png';
import REVLON from '../../images/Mascarillas/id_6.png';

export const Mascarillas = () => {


	const mascarillas = [
		{ id: "1", name: "L'OREAL", descripcion: 'Mascarilla Nutritiva', src: LOREALNu, precio: '19,95€' },
		{ id: "2", name: "OLAPLEX", descripcion: 'Mascarilla Hidratante', src: OLAPLEXHi, precio: '19,95€' },
		{ id: "3", name: "REVOX", descripcion: 'Macarilla capilar', src: REVOX, precio: '9,95€' },
		{ id: "4", name: "FANOLA", descripcion: 'Mascarilla Reestructurante', src: FANOLARe, precio: '4,95€' },
		{ id: "5", name: "L'OREAL", descripcion: 'Mascarilla Capilar Cabellos Dañados', src: LOREALCa, precio: '19,95€' },
		{ id: "6", name: "REVLON PROFESSIONAL", descripcion: 'Mascarilla para cabello dañado', src: REVLON, precio: '9,95€' },
	]

	return (

		<div className='pantalla-principal'>
			<h2 className="title">Mascarillas</h2>
			<div className="cards-container">

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

			</div>

		</div>

	);
}