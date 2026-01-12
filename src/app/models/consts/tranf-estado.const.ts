export const tranfEstado = {
  aprobado: 'AP',
  rechazado: 'RE',
  pendiente: 'PE',
} as const;

export type TranfEstado = (typeof tranfEstado)[keyof typeof tranfEstado];
