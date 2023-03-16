import React from "react";
import './Escena.css';

export default function Inicio(props) {
    const start = () => {

        props.cambiar(false);
       
    };
    
    return (
        <div className="inicio">
        <h1>PAGINA DE INICIO - SPRINT 6 </h1>
        <p>4 pasos para saber qué  hacer</p>
        <button onClick={() => start()}>EMPECEMOS 😉 </button>
        </div>
    );
    }