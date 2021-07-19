import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

import { GlobalErrorHandlerService } from './global-error-handler.service'
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    OverviewComponent,
    DetailsComponent,
    ErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: ErrorHandler, useClass: GlobalErrorHandlerService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
