import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { Auth } from './components/auth';

const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  }

  const totalTasks = list.length;
  console.log(list)
  console.log(totalTasks)

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>TaskHub</C.HeaderText>
      </C.Header>

      <C.Body>
        {isAuthenticated ? (
          <>
            <InfoArea title="Minhas tasks:" totalTasks={totalTasks} onStatusChange={setSelectedStatus} /> 
            <InputArea onAdd={handleAddItem} />
            <TableArea list={list} onUpdateSuccess={handleAuthSuccess}  selectedStatus={selectedStatus}  />
          </>
        ) : (
          <Auth onLoginSuccess={handleAuthSuccess} />
        )}
      </C.Body>
    </C.Container>
  );
}

export default App;
