import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderMenuComponent } from 'src/app/shared/components/header-menu/header-menu.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    HeaderMenuComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
