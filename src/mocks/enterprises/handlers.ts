import data from '@assets/data/enterprises.json';
import { environment } from '@environments/environment';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${environment.baseUrl}/enterprises`, async ({ request }) => {
    const authorization = request.headers.get('Authorization');

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return HttpResponse.json(
      { enterprises: data.enterprises },
      { status: 200 }
    );
  }),
];
