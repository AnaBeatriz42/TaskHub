import React, { useState } from 'react';
import Select from 'react-select';
import { OptionTypeBase, ValueType } from 'react-select';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FiEdit3 } from 'react-icons/fi';
import CustomModal from '../modal';
import axios from 'axios';

type Props = {
     item: Item;
};

interface Option {
     value: string;
     label: string;
}

export const TableItem = ({ item }: Props) => {
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [titleField, setTitleField] = useState('');
     const [descriptionField, setDescriptionField] = useState('');
     const [selectedOption, setSelectedOption] = useState<ValueType<OptionTypeBase, false>>(null);

     const openModal = () => {
          setModalIsOpen(true);
     };

     const closeModal = () => {
          setModalIsOpen(false);
     };

     const handleAddEvent = () => {
          if (titleField === '') {
               alert('Título vazio!');
          } else if (descriptionField === '') {
               alert('Descrição vazia!');
          } else if (!selectedOption) {
               alert('Selecione uma opção!');
          } else {

               const newItem: Item = {
                    titulo: titleField,
                    descricao: descriptionField,
                    usuario: "64fc8a070fc0a4d654656554",
                    status: selectedOption.value
               };

               console.log("Atualizando o item", newItem)

               axios.put('http://localhost:3001/api/tasks/64fc9236c4da913019e8710b', newItem)
                    .then((response) => {
                         console.log('Dados enviados com sucesso para o backend:', response.data);
                         alert("tarefa atualizada com sucesso")
                         //fechar o popup
                         
                    })
                    .catch((error) => {
                         console.error('Erro ao enviar dados para o backend:', error);
                    });
          }
     }

     const options: Option[] = [
          { value: 'nao_iniciada', label: 'Não Iniciada' },
          { value: 'em_progresso', label: 'Em Progresso' },
          { value: 'finalizada', label: 'Finalizada' },
          { value: 'arquivada', label: 'Arquivada' },
          // Adicione mais opções conforme necessário
     ];

     return (
          <C.TableLine>
               <C.TableColumn>{item.titulo}</C.TableColumn>
               <C.TableColumn>{item.descricao}</C.TableColumn>
               <C.TableColumn>{item.status}</C.TableColumn>
               <C.IconColumn>
                    <button onClick={openModal}>
                         <FiEdit3 />
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
                              options={options}
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
