export class SignInBodyValidation {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  validate(): string[] {
    const errors: string[] = [];

    if (!this.email) {
      errors.push('El correo es obligatorio');
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
      errors.push('Correo inválido');
    }
    if (!this.password) {
      errors.push('La contraseña es obligatoria');
    }
    if (this.password.length < 8) {
      errors.push('La contraseña debe tener al menos 8 carácteres');
    }
    if (this.password.length > 16) {
      errors.push('La contraseña debe tener menos de 16 carácteres');
    }
    return errors;
  }
}
