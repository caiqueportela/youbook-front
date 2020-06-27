import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { LoadingInterceptor } from './shared/interceptors/loading/loading.interceptor';
import { RequestInterceptor } from './shared/interceptors/request/request.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //FroalaEditorModule.forRoot(),
    //FroalaViewModule.forRoot(),
    ErrorsModule,
    CoreModule,
    AppRoutingModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    }
  ]
})
export class AppModule { }
