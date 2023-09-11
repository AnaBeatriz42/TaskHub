import styled from 'styled-components';

export const Container = styled.div`
     background-color: #FFF;
     box-shadow: 0px 0px 5px #CCC;
     border-radius: 10px;
     padding: 30px;
     display: flex;
     flex-direction: column; 
     align-items: center;
     width: 300px; 
     margin: 0 auto; 
     margin-top: -40px;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
     width: 100%;
     padding: 10px;
     margin-bottom: 10px;
     border: 1px solid #CCC;
     border-radius: 4px;
`;

export const Button = styled.button`
     width: auto; /* Largura automática com base no conteúdo */
     height: 40px; /* Altura do botão */
     border-radius: 20px; /* Bordas laterais arredondadas */
     background-color: #a09be0; /* Cor roxa clara */
     color: black;
     cursor: pointer;
     border: none;
     display: flex;
     align-items: center;
     justify-content: center; /* Centraliza o texto verticalmente e horizontalmente */
     font-size: 16px; /* Tamanho do texto */
     padding: 0 20px; /* Espaçamento interno (horizontal) para maior largura */

     &:hover {
     background-color: #6d68b7; /* Cor roxa escura ao passar o mouse */
     color: white;
     }
`;

