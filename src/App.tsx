import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';
import { InputArea } from './components/InputArea';
import { Auth } from './components/auth';

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Adicione o estado de autenticação

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true); // Defina o estado de autenticação como verdadeiro após um login bem-sucedido
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>TaskHub</C.HeaderText>
      </C.Header>

      <C.Body>
        {isAuthenticated ? (
          <>
            <InputArea onAdd={handleAddItem} />
            <TableArea list={list} />
          </>
        ) : (
          <Auth onLoginSuccess={handleAuthSuccess} /> // Passe uma função de callback para tratar o sucesso da autenticação
        )}
      </C.Body>
    </C.Container>
  );
}

export default App;
