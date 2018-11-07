import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './_helper/index';
// import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Components
import { AppComponent } from './app.component';
import { HomeComponent,  LoginComponent, RegisterComponent, TrainerComponent, UserComponent, PageNotFoundComponent } from './pages/index';
import { AlertComponent, FooterComponent, HeaderComponent } from './components/index';

// Services
import { HttpService, LocalStorageService, AuthenticationService, AlertService, UserService } from './services/index';

// Guards
import { AuthGuard } from './guards/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TrainerComponent,
    UserComponent,
    AlertComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AuthGuard,
    HttpService,
    LocalStorageService,
    AuthenticationService,
    AlertService,
    // UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
