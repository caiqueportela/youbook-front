import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { SignupService } from 'src/app/core/services/signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
    MatPasswordStrengthModule,
  ],
  declarations: [
    HomeComponent,
    SignupComponent,
    SigninComponent,
  ],
  providers: [
    SignupService
  ],
})
export class HomeModule { }
