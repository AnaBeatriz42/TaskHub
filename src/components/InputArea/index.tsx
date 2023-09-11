import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import axios from 'axios';
import { BiSolidAddToQueue } from 'react-icons/bi';

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
    } else {

      const idUser = localStorage.getItem('usuario')as string;
      const newItem: Item = {
        titulo: titleField,
        descricao: descriptionField,
        usuario: idUser,
        status: "nao_iniciada"
      };
      console.log(newItem);

      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json' 
        }
      };

      axios.post('http://localhost:3001/api/tasks', newItem, config)
        .then((response) => {
          console.log('Dados enviados com sucesso para o backend:', response.data);
          onAdd(newItem);
          clearFields();
          window.location.reload();
        })
        .catch((error) => {
          console.error('Erro ao enviar dados para o backend:', error);
        });
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
        <C.LargeInput type="text" value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
      </C.InputLabel>


      <C.InputLabel>
        <C.InputTitle>&nbsp;</C.InputTitle>
        <C.Button onClick={handleAddEvent}> <BiSolidAddToQueue /></C.Button>
      </C.InputLabel>
    </C.Container>
  );
}
