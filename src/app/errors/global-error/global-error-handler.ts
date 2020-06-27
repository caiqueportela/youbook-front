import { Router } from '@angular/router';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(
    private injector: Injector
  ) { }

  handleError(error: any): void {
    const location = this.injector.get(LocationStrategy);
    const router = this.injector.get(Router);

    const url = location instanceof PathLocationStrategy
      ? location.path()
      : '';

    const message = error.message
      ? error.message
      : error.toString();

    console.log(url);
    console.log(message);

    router.navigate(['/error']);
  }

}
