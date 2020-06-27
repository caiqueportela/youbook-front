import { RouterModule } from '@angular/router';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { GlobalErrorHandler } from './global-error/global-error-handler';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    GlobalErrorComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class ErrorsModule { }
