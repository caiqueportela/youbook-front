import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserNotTakenValidatorService } from 'src/app/core/services/user-not-taken/user-not-taken.validator.service';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { userNamePassword } from 'src/app/shared/validators/username-password.validator';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [ UserNotTakenValidatorService ],
})
export class CreateUserComponent implements OnInit, AfterViewInit {

  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  hidePassword = true;
  hideStrength = true;
  matcher = new MaterialStateMatcher();

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email,
          lowerCaseValidator
        ],
        [
          this.userNotTakenValidatorService.checkUsernameTaken()
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          lowerCaseValidator,
        ],
        [
          this.userNotTakenValidatorService.checkUsernameTaken()
        ],
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      role: ['user', [Validators.required]]
    }, {
      validator: userNamePassword
    });
  }

  ngAfterViewInit(): void {
    this.emailInput.nativeElement.focus();
    this.changeDetector.detectChanges();
  }

  register() {
    if (this.registerForm.valid && !this.registerForm.pending) {
      const userData = this.registerForm.getRawValue();
      this.userService
        .signup(userData)
        .subscribe(
          () => {
            this.snackBar.open('Usuário cadastrado com sucesso!', 'X', { duration: 2000, panelClass: 'snack-success' });
            this.router.navigate(['admin']);
          },
          err => console.log(err)
        );
    }
  }

}
