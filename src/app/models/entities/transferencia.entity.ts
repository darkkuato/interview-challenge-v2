import { TranfEstado } from '../consts/tranf-estado.const';

export type TransferenciaEntity = {
  nroTransaccion: string;
  destinatario: string;
  importe: number;
  referencia: string;
  estado: TranfEstado;
};
