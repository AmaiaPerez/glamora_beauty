import React, { useContext } from 'react';
import { ProductoCabello } from '../../components/ProductoCabello';
import JUSTFORMEN from '../../images/Tintes/id_1.png';
import EXCELLENCE from '../../images/Tintes/id_2.png';
import OLIA from '../../images/Tintes/id_3.png';
import CASTINGCREMEGLOSS from '../../images/Tintes/id_4.png';

export const Tintes = () => {


	const tintes = [
		{ id: "1", name: "JUST FOR MEN", descripcion: 'Colorante En Champú', src: JUSTFORMEN, precio: '10,95€' },
		{ id: "2", name: "EXCELLENCE", descripcion: 'Coloración en crema', src: EXCELLENCE, precio: '7,15€' },
		{ id: "3", name: "OLIA", descripcion: 'Coloración permanente sin amoniaco', src: OLIA, precio: '6,95€' },
		{ id: "4", name: "CASTING CREME GLOSS", descripcion: 'Coloración sin amoniaco', src: CASTINGCREMEGLOSS, precio: '5,95€' },
	]

	return (

		<div className='pantalla-principal'>
			<h2 className="title">Tintes</h2>
			<div className="cards-container">
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