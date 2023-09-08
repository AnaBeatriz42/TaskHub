import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [titleField, setTitleField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [stateField, setStateField] = useState('');

  const handleAddEvent = () => {
    
    if (titleField === '') {
      alert('Título vazio!');
    } else if (descriptionField === '') {
      alert('Descrição vazia!');
    } else if (stateField === '') {
      alert('Estado vazio!');
    } else {
      const newItem: Item = {
        title: titleField,
        descricao: descriptionField,
        estado: stateField
      };

      console.log(newItem);
      onAdd(newItem);
      clearFields();
    }
  }

  const clearFields = () => {
    setTitleField('');
    setDescriptionField('');
    setStateField('');
  }

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Descrição</C.InputTitle>
        <C.Input type="text" value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
      </C.InputLabel>

      <C.InputLabel>
        <C.InputTitle>Estado</C.InputTitle>
        <C.Input type="text" value={stateField} onChange={e => setStateField(e.target.value)} />
      </C.InputLabel>
      
      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
      </C.InputLabel>
    </C.Container>
  );
}
