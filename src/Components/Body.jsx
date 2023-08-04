import React from "react";
import "../styles/Body.css";

export default function Body() {

    return (
        <div className="body">
            <h1> Web Recordatorio de Java</h1>
            <p> Web utilizada para recordatorios y ejemplos de uso del lenguaje de Java.</p>
            
            <div className="category category_teory" >
                <h2>Teoría</h2>
            </div>
            <div className="category" >
                <h2>Ejemplos</h2>
            </div>
            <div className="category" >
                <h2>Librerias</h2>
            </div>

        </div>

    );
}