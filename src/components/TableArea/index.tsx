import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import axios from 'axios';

type Props = {
     list: Item[];
};

export const TableArea = ({ list }: Props) => {
     const [data, setData] = useState<Item[]>([]);

     useEffect(() => {

          const fetchData = async () => {
               try {
                    const response = await axios.get('http://localhost:3001/api/tasks');
                    setData(response.data);
                    console.log("Retorno do banco de dados")
                    console.log(data)
               } catch (error) {
                    console.error('Erro ao buscar dados do servidor:', error);
               }
          };

          fetchData();
     }, []);

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
                         <TableItem key={index} item={item} />
                    ))}
               </tbody>
          </C.Table>
     );
};
