export const tranfEstado = {
  aprobado: 'AP',
  rechazado: 'RE',
  pendiente: 'PE',
} as const;

export type TranfEstado = (typeof tranfEstado)[keyof typeof tranfEstado];

export const tranfEstadoLabel: Record<TranfEstado, string> = {
  [tranfEstado.aprobado]: 'Aprobado',
  [tranfEstado.rechazado]: 'Rechazado',
  [tranfEstado.pendiente]: 'Pendiente',
};
