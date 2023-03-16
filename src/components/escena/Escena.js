import React from 'react';
import Botonn from './Boton.js';
import { Historia } from './Historia.js';
import { Contenedor, Parrafo, Imagen} from '../../styled'
import './Escena.css';


const Escena = () => {
  const [indice, pasoIndice] = React.useState(0);

  const cambiarIndice = (direccion) => {
    if (direccion === 'adelante' && indice < Historia.length - 1) {
      pasoIndice(indice + 1);
    } else if (direccion === 'atras' && indice > 0) {
      pasoIndice(indice - 1);
    }
  };

  return (
    <Contenedor>
    
      <Botonn  direccion="atras" onClick={() => cambiarIndice('atras')} />
      <Botonn   direccion="adelante" onClick={() => cambiarIndice('adelante')} />
      <div className="contenido">
      <Imagen src={Historia[indice].img} alt="Fondo" />
      {Historia.map((objeto, index) => (
        <Parrafo key={index}
          activo={indice}
          current={index}
        >
          {objeto.txt}
        </Parrafo>
      ))}
  </div>
    </Contenedor>
  );
};

export default Escena;