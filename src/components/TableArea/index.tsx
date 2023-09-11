import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import axios from 'axios';

type Props = {
  list: Item[];
  onUpdateSuccess: () => void; 
  selectedStatus: string;
};

export const TableArea = ({ list, onUpdateSuccess, selectedStatus }: Props) => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
  
        const idUser = localStorage.getItem('usuario') as string;
        const response = await axios.get(`http://localhost:3001/api/tasks/user/${idUser}`, config);
  
        let filteredData = response.data;
  
        if (selectedStatus) {
          filteredData = response.data.filter((item: Item) => item.status === selectedStatus);
        }
  
        setData(filteredData);
      } catch (error) {
        console.error('Erro ao buscar dados do servidor:', error);
      }
    };
  
    fetchData();
  }, [selectedStatus]);

  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={100}>Descrição</C.TableHeadColumn>
          <C.TableHeadColumn width={50}>Status</C.TableHeadColumn>
          <C.TableHeadColumn width={50}>Opções</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableItem key={index} item={item} onUpdateSuccess={onUpdateSuccess} />
        ))}
      </tbody>
    </C.Table>
  );
};
