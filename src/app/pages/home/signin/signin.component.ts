import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MaterialStateMatcher } from 'src/app/shared/modules/angular-material/material-state-matcher';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit {

  @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;

  hide = true;
  matcher = new MaterialStateMatcher();

  loginForm: FormGroup;
  fromUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params.fromUrl);
  }

  ngAfterViewInit(): void {
    this.focusInputUserName();
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.fromUrl
            ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(['feed']),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.focusInputUserName();
          this.snackBar.open('Usuário ou senha inválidos!', 'X', { duration: 2000, panelClass: 'snack-warning' });
        }
      );
  }

  focusInputUserName() {
    this.usernameInput.nativeElement.focus();
    this.changeDetector.detectChanges();
  }

}
