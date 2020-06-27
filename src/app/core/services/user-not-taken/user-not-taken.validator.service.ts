import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/internal/operators';

import { SignupService } from './../signup/signup.service';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(
    private signupService: SignupService
  ) { }

  checkUsernameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(username =>
          this.signupService.checkUserNameTaken(username)
        ))
        .pipe(map((res: any) => res.isTaken ? { userNameTaken: true } : null))
        .pipe(first());
    }
  }

}
