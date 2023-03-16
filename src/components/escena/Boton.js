import React from 'react';
import { BotonStyled } from '../../styled';

const Botonn = ({ direccion, onClick }) => {
 return (
     <BotonStyled direccion={direccion} onClick={onClick}>
         {direccion === "atras" ? "ANTERIOR" : "SIGUIENTE"}
     </BotonStyled>
 );
};

export default Botonn;
