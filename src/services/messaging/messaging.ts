import { MessagingProtocol } from '../../interfaces';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
