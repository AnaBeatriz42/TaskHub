import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { OptionTypeBase, ValueType } from 'react-select';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FiEdit3 } from 'react-icons/fi';
import { FiArchive } from 'react-icons/fi'; // Importe o ícone de arquivar
import CustomModal from '../modal';
import axios from 'axios';

type Props = {
  item: Item;
};

interface Option {
  value: string;
  label: string;
}

const updateTask = async (item: Item, selectedOption: ValueType<OptionTypeBase, false>) => {
  if (selectedOption) {
    const idUser = localStorage.getItem('usuario') as string;
    const newItem: Item = {
      titulo: item.titulo,
      descricao: item.descricao,
      usuario: idUser,
      status: selectedOption.value
    };

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.put(`http://localhost:3001/api/tasks/${item._id}`, newItem, config);
      console.log('Dados enviados com sucesso para o backend:', response.data);
      return true;
    } catch (error) {
      console.error('Erro ao enviar dados para o backend:', error);
      return false;
    }
  }
};

export const TableItem = ({ item }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [titleField, setTitleField] = useState('');
  const [descriptionField, setDescriptionField] = useState('');
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionTypeBase, false>>(null);
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState<boolean>(
    item.status === 'arquivada' || item.status === 'finalizada'
  );
  const [isArchiveButtonDisabled, setIsArchiveButtonDisabled] = useState<boolean>(item.status === 'arquivada');

  useEffect(() => {
    setIsArchiveButtonDisabled(item.status === 'arquivada');
  }, [item]);

  const openModal = () => {
    setTitleField(item.titulo);
    setDescriptionField(item.descricao);
    setSelectedOption(options.find(option => option.value === item.status));
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddEvent = async () => {
    if (titleField === '') {
      alert('Título vazio!');
    } else if (descriptionField === '') {
      alert('Descrição vazia!');
    } else if (!selectedOption) {
      alert('Selecione uma opção!');
    } else {

      if (selectedOption.value !== item.status) {
        const success = await updateTask(item, selectedOption);
        if (success) {
          alert('Tarefa atualizada com sucesso');
          closeModal();
          window.location.reload();
        } else {
          alert('Erro ao atualizar a tarefa');
        }
      } else {
        alert('Não é possível atualizar para o status atual da tarefa.');
      }
    }
  };

  const handleArchiveEvent = async () => {

    if (item.status !== 'arquivada') {
      const success = await updateTask(item, { value: 'arquivada', label: 'Arquivada' });
      if (success) {
        alert('Tarefa arquivada com sucesso');
        window.location.reload();
      } else {
        alert('Erro ao arquivar a tarefa');
      }
    } else {
      alert('Esta tarefa já está arquivada.');
    }
  };

  const options: Option[] = [
    { value: 'nao_iniciada', label: 'Não Iniciada' },
    { value: 'em_progresso', label: 'Em Progresso' },
    { value: 'finalizada', label: 'Finalizada' },
    { value: 'arquivada', label: 'Arquivada' },
  ];


  const availableOptions = options.filter(
    option => option.value !== item.status && option.value !== 'arquivada'
  );

  return (
    <C.TableLine>
      <C.TableColumn>{item.titulo}</C.TableColumn>
      <C.TableColumn>{item.descricao}</C.TableColumn>
      <C.TableColumn>{item.status}</C.TableColumn>
      <C.IconColumn>
        <button onClick={openModal} disabled={isEditButtonDisabled}>
          <FiEdit3 />
        </button>
        <button onClick={handleArchiveEvent} disabled={isArchiveButtonDisabled}>
          <FiArchive />
        </button>
      </C.IconColumn>

      <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={titleField} onChange={e => setTitleField(e.target.value)} />
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>Descrição</C.InputTitle>
          <C.LargeInput type="text" value={descriptionField} onChange={e => setDescriptionField(e.target.value)} />
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>Status</C.InputTitle>
          <Select
            options={availableOptions}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            placeholder="Selecione o status"
          />
        </C.InputLabel>

        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Atualizar</C.Button>
        </C.InputLabel>
      </CustomModal>
    </C.TableLine>
  );
};
