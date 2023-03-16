import React from "react";
import './Escena.css';

export default function Inicio(props) {
    const start = () => {

        props.cambiar(false);
       
    };
    
    return (
        <div className="inicio">
        <h1>PAGINA DE INICIO ITACADEMY - SPRINT 6 </h1>
        <p>Tutorial básico de consejos de utilización de la página de gestión</p>
        <button onClick={() => start()}>EMPECEMOS 😉 </button>
        </div>
    );
    }