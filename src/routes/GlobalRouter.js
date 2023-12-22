import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../views/Inicio';
import NotFound from '../views/NotFound';
import {Productos} from "../views/Productos";
import {Header} from "../components/Header";
import {PerfumesHombre} from "../views/Perfumes/PerfumesHombre";
import {PerfumesMujer} from "../views/Perfumes/PerfumesMujer";
import {PerfumesInfantiles} from "../views/Perfumes/PerfumesInfantiles";
import {Perfumes} from "../views/Perfumes/Perfumes";
import {Cabello} from "../views/Cabello/Cabello";
import {Champus} from "../views/Cabello/Champus";
import {Mascarillas} from "../views/Cabello/Mascarillas";
import {Tintes} from "../views/Cabello/Tintes";
import {Cosmeticos} from "../views/Cosmeticos/Cosmeticos";
import {Facial} from "../views/Cosmeticos/Facial";
import {Corporal} from "../views/Cosmeticos/Corporal";
import {Maquillaje} from "../views/Maquillaje/Maquillaje";
import {Ojos} from "../views/Maquillaje/Ojos";
import {Rostro} from "../views/Maquillaje/Rostro";
import {Labios} from "../views/Maquillaje/Labios";
import {Carrito} from "../views/Carrito";
import { Favoritos } from '../views/Favoritos';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Layout><Productos /></Layout>} />                           
                <Route path="/perfumes" element={<Layout><Perfumes/></Layout>} />                 
                <Route path="/perfumesHombre" element={<Layout><PerfumesHombre/></Layout>} />               
                <Route path="/perfumesMujer" element={<Layout><PerfumesMujer/></Layout>} />        
                <Route path="/perfumesInfantiles" element={<Layout><PerfumesInfantiles/></Layout>} />                                                                      
                <Route path="/cabello" element={<Layout><Cabello/></Layout>} />                                                                                    
                <Route path="/champus" element={<Layout><Champus/></Layout>} />                                                                                       
                <Route path="/mascarillas" element={<Layout><Mascarillas/></Layout>} />                                                                                     
                <Route path="/tintes" element={<Layout><Tintes/></Layout>} />                                                                                                     
                <Route path="/cosmeticos" element={<Layout><Cosmeticos/></Layout>} />                                                                                                     
                <Route path="/facial" element={<Layout><Facial/></Layout>} />                                                                                                     
                <Route path="/corporal" element={<Layout><Corporal/></Layout>} />                                                                                                
                <Route path="/maquillaje" element={<Layout><Maquillaje/></Layout>} />                                                                                                     
                <Route path="/ojos" element={<Layout><Ojos/></Layout>} />                                                                                                     
                <Route path="/rostro" element={<Layout><Rostro/></Layout>} />                                                                                                     
                <Route path="/labios" element={<Layout><Labios/></Layout>} />  
                <Route path="/carrito" element={<Layout><Carrito/></Layout>} />                                           
                <Route path="/favoritos" element={<Layout><Favoritos/></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;
