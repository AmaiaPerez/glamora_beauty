import React, { useEffect, useState } from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import { ProductosContext } from "./context/ProductosContext";
import { Footer } from "./components/Footer";
import { useProductos } from "./hooks/useProductos";
import { CarritoContext } from './context/CarritoContext';
import { FavoritosContext } from './context/FavoritosContext';

function App() {

    const productos = useProductos();
    const [carrito, setProducto] = useState([]);
    const [favoritos, setProductoFav] = useState([]);

    let añadirAlCarrito = (producto) => {
        carrito.push(producto);
        setProducto(carrito);
        console.log(carrito);
        window.alert('Producto añadido del carrito');
    };
    let añadirAFavoritos = (producto) => {
        favoritos.push(producto);
        setProductoFav(favoritos);
        console.log(favoritos);
        window.alert('Producto guardado como favorito');
    };
    let eliminarDelCarrito = (producto) => {
        let nuevoCarrito = []
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].descripcion != producto.descripcion) {
                nuevoCarrito.push(carrito[i]);
            }
        }
        setProducto(nuevoCarrito);
        window.alert('Producto eliminado del carrito');
    }
    let vaciarCarrito = () => {
        setProducto([]);
    }
    let eliminarProductoFavorito = (producto) => {
        let nuevoArray = []
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i].descripcion != producto.descripcion) {
                nuevoArray.push(favoritos[i]);
            }
        }
        setProductoFav(nuevoArray);
        window.alert('Producto eliminado como favorito');
    }
    return (
        <CarritoContext.Provider value={{ carrito, añadirAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            <FavoritosContext.Provider value={{ favoritos, añadirAFavoritos, eliminarProductoFavorito }}>
                <ProductosContext.Provider value={{ productos }}>
                    <GlobalRouter></GlobalRouter>
                    <Footer />
                </ProductosContext.Provider>
            </FavoritosContext.Provider>
        </CarritoContext.Provider>

    );
}

export default App;
