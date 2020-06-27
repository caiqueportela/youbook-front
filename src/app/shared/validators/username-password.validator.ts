import { ValidatorFn, FormGroup } from '@angular/forms';

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {

  const username = formGroup.get('username').value;
  const password = formGroup.get('password').value;

  if (username.trim() + password.trim() && username === password) {
    return { usernamePassword: true };
  }

  return null;
}
