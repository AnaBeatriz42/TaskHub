import styled from "styled-components";

export const Container = styled.div`
     background-color: #FFF;
     box-shadow: 0px 0px 5px #CCC;
     border-radius: 10px;
     padding: 30px;
     margin-top: -40px;
     display: flex;
     align-items: center;  
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
  font-size: 24px; 
  margin-top: 10px;
`;

export const TotalTasks = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px; 
  margin-top: 5px;
`;

export const ResumeArea = styled.div`
     flex:2;
      display: flex;
`;

export const StatusSelector = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-right: 8px; 
  }
  `;