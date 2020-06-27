import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class CoreModule { }
