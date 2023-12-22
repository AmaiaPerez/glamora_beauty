import React, {useContext} from 'react';
import { FavoritosContext } from '../context/FavoritosContext';
import { Favorito } from '../components/Favorito';

export const Favoritos = () => {

    const {favoritos, añadirAFavoritos} = useContext(FavoritosContext);
 

    return (
        <div className='pantalla-principal'>
            <h2 className="title">Favoritos</h2>
            <div className="cards-container">   
            {
                favoritos.length > 0 ? (
                    favoritos.map((producto) => (
                        <Favorito
                            name={producto.name}
                            src={producto.src}
                            precio={producto.precio}
                            descripcion={producto.descripcion}
                            producto = {producto}

                        />
                    ))
                ) : (
                    <p>Lista de favoritos vacía</p>
                )
            } 
            </div>     
        </div>
    )
}