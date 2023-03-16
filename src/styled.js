import styled from 'styled-components';

export const Contenedor = styled.div`
 
 height: 90vh;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
`;

export const Parrafo = styled.p`


font-size: 1.5em;
  text-align: center;
  border : 1pt solid black;
  border-radius : 20pt;
  padding :10pt;
  background-color: ${props => (props.activo===props.current ? 'pink' : '#e1dadab5')};
  margin: 20px 20px 60px;
  margin-top: revert;
`;


export const Conte = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;


export const Imagen = styled.img`
  width: 100%;
  height: 100%;
  object-fit: unset;

`;

export const BotonStyled = styled.button`

   font-size: 2em;
  width: 50%;
  background-color : lightgrey;
  padding : 30px;
  cursor: pointer;
  ${props => (props.left ? 'left: 0;' : 'right: 0;')}


`;

