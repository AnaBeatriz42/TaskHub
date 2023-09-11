import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 30px;
    margin-top: 20px;
    display: flex;
    align-items: center;
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
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #a09be0;
    color: black;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px; 
    margin-left: auto;
   

    &:hover {
        background-color: #6d68b7;
        color: white;
    }
`;

export const LargeInput = styled(Input)`
    height: 30px;
    width: 180%;
`;