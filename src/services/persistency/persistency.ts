import { PersistencyProtocol } from '../../interfaces';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
