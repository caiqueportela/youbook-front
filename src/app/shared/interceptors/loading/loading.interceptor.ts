import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

import { LoadingService } from './../../services/loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingService: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(tap(event => {
        if (event instanceof HttpResponse) {
          this.loadingService.stop();
        } else {
          this.loadingService.start();
        }
      }));
  }
}
