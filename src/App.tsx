import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { TableArea } from './components/TableArea';
import { InputArea } from './components/InputArea'


const App = () => {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => { 
    setFilteredList(list);
  }, [list]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])


  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> TaskHub</C.HeaderText>
      </C.Header>

      <C.Body>
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
