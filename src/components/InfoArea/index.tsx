import * as C from './styles';
import Select from 'react-select'; 
import { useState } from 'react';

type Props = {
  title: string;
  totalTasks: number;
  onStatusChange: (status: string) => void;
};

export const InfoArea = ({ title, totalTasks, onStatusChange }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState<{ value: string; label: string } | null>(null);

  const handleStatusChange = (selectedOption: any) => {
    setSelectedStatus(selectedOption);
    onStatusChange(selectedOption ? selectedOption.value : ''); 
  };

  const options = [
    { value: '', label: 'Todos' },
    { value: 'nao_iniciada', label: 'Não Iniciada' },
    { value: 'em_progresso', label: 'Em Progresso' },
    { value: 'finalizada', label: 'Finalizada' },
    { value: 'arquivada', label: 'Arquivada' },
  ];

  return (
    <C.Container>
      {/* <C.Title>{title}</C.Title> */}
      <C.StatusSelector>
        <label htmlFor="statusSelector">Filtrar por Status:</label>
        <Select
          id="statusSelector"
          options={options}
          value={selectedStatus}
          onChange={handleStatusChange}
          placeholder="Selecione o status"
        />
      </C.StatusSelector>
      {/* <C.TotalTasks>Total Tasks: {totalTasks}</C.TotalTasks> */}
    </C.Container>
  );
};
