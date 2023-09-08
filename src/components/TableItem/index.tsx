import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
     item: Item
}
export const TableItem = ({ item }: Props) => {
     return (
          <C.TableLine>
               <C.TableColumn>{item.title}</C.TableColumn>
               <C.TableColumn>{item.descricao}</C.TableColumn>
               <C.TableColumn>{item.estado}</C.TableColumn>
          </C.TableLine>
     );
}