import { environment } from '@environments/environment';
import { http, HttpResponse } from 'msw';
import { SignInBodyValidation } from './validations/sign-in-body.validation';

export const handlers = [
  http.post(`${environment.baseUrl}/auth/sign-in`, async ({ request }) => {
    const req = await request.clone().json();

    if (!req) {
      return HttpResponse.json(
        { errors: ['No se envio un body válido'] },
        { status: 400 }
      );
    }

    const body = req as {
      email: string;
      password: string;
    };

    const errors = new SignInBodyValidation(
      body.email,
      body.password
    ).validate();

    if (errors.length > 0) {
      return HttpResponse.json({ errors }, { status: 400 });
    }

    if (body.email === 'error@correo.com' || body.password === '123456789') {
      return HttpResponse.json(
        { errors: ['El correo o la clave son incorrectos'] },
        { status: 406 }
      );
    }

    return HttpResponse.json(
      {
        token: '1234567890',
      },
      { status: 200 }
    );
  }),
];
