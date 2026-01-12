import { setupWorker } from 'msw/browser';
import { handlers as authHandlers } from './auth/handlers';
import { handlers as enterprisesHandlers } from './enterprises/handlers';
import { handlers as transfersHandlers } from './transferencias/handlers';

export const worker = setupWorker(
  ...authHandlers,
  ...enterprisesHandlers,
  ...transfersHandlers
);
