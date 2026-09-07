import { ValidationErrors } from '@angular/forms';

export function getValidationMessage(errors: ValidationErrors): string | null {
  if (errors['required']) {
    return 'Este campo es obligatorio';
  }
  if (errors['email']) {
    return 'Ingrese un correo válido';
  }
  if (errors['minlength']) {
    return `Debe tener al menos ${errors['minlength'].requiredLength} caracteres`;
  }
  if (errors['maxlength']) {
    return `No puede superar los ${errors['maxlength'].requiredLength} caracteres`;
  }
  return null;
}
