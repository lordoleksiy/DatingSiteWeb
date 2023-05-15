import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = control.get('password');
    const passwordAgainControl = control.get('passwordAgain');
    if (!passwordControl || !passwordAgainControl) {
      return null;
    }
    if (passwordControl.value !== passwordAgainControl.value) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
