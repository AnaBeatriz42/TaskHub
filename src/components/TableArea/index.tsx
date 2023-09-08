import * as C from './styles'
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
      list: Item[]
}


export const TableArea = ({list}:Props) =>{
     return (
          <C.Table>
               <thead>
                    <tr>
                        <C.TableHeadColumn width={100}>Título</C.TableHeadColumn> 
                        <C.TableHeadColumn width={130}>Descrição</C.TableHeadColumn>  
                        <C.TableHeadColumn width={150}>Estado</C.TableHeadColumn> 
                    </tr>
               </thead>
               <tbody>
                    {list.map((item,index) =>(
                         <TableItem key={index} item={item}/>
                    ))}
               </tbody>
          </C.Table>
     );
}