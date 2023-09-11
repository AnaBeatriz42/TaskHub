import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 20px;
  text-align: left;
  border-bottom: 2px solid #ccc;
`;

export const IconColumn = styled.td`
  padding: 10px;
  text-align: center; 
  width: 40px;
  border-bottom: 2px solid #ccc;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;
export const Input = styled.input`
    width: 95%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
   width: 100px; 
  height: 30px;
  background-color: #a09be0;
  color: black;
  cursor: pointer;
  border: none;
  border-radius: 25px; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: bold;
  margin-left: auto;

  &:hover {
    background-color: #6d68b7;
  }
`;

export const LargeInput = styled(Input)`
    height: 200px; 
    width: 95%;
    margin-top: 10px;
`;