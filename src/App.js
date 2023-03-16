
import React from 'react';

import Escena from './components/escena/Escena.js';
import Inicio from './components/escena/Inicio.js';

import './App.css';
const App = () => {
    const [entra,cambiar] = React.useState(true);


  return (
    <div>
    {entra && (
      <div>
        <Inicio
            cambiar = {cambiar}/>
        </div>
        )}
        {!entra && (
            <div>
                <Escena />
            </div>
        )}
    </div>
    );
};


export default App;
