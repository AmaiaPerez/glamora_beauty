import {useEffect, useState} from "react";
import perfumes from "../images/permufes.jpg"
import maquillaje from "../images/maquillaje.png"
import cosmetica from "../images/cosmeticos.png"
import cabello from "../images/cabello.png"

export const useProductos = () => {

    const [productos, setProductos] = useState([]);
   
    useEffect(() => {
        setTimeout(() => {
            setProductos([
                {id: "1", name: "Cabello", descripcion: '¡ Cuida tu cabello con los mejores productos !' ,src: cabello, link: `/cabello`},                
                {id: "2", name: "Cosmética", descripcion: '¡ Obten los mejores productos de cosmética para tu cuidado de piel !', src: cosmetica, link: `/cosmeticos`},                              
                {id: "3", name: "Maquillaje", descripcion: '¡ Consulta el mejor catálogo de maquillaje !', src: maquillaje, link: `/maquillaje`},
                {id: "4", name: "Perfumes", descripcion: '¡ Consulta la mejor gama de perfumes !', src: perfumes, link: `/perfumes`}
            ]);
        }, 7000);
    }, []);

    return productos;
}