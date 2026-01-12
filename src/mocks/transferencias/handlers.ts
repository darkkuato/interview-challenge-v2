import data from '@assets/data/transferencias.json';
import { environment } from '@environments/environment';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${environment.baseUrl}/transferencias`, async ({ request }) => {
    const authorization = request.headers.get('Authorization');

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const cuit = request.headers.get('cuit');

    if (!cuit) {
      return HttpResponse.json(
        { error: 'Cuit no encontrado' },
        { status: 400 }
      );
    }

    if (!(cuit in data.transferencias)) {
      return HttpResponse.json(
        { error: 'El cuit solicitado no se encuentra registrado' },
        { status: 406 }
      );
    }

    const transfs =
      data.transferencias[cuit as keyof typeof data.transferencias];

    return HttpResponse.json({ transferencias: transfs }, { status: 200 });
  }),
];
