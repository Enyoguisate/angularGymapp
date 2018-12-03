import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatMenuModule, MatCardModule, MatIconModule, MatLineModule, MatListModule, MatSortModule, MatTabsModule, MatTreeModule, MatBadgeModule, MatChipsModule, MatInputModule, MatRadioModule, MatTableModule, MatButtonModule, MatCommonModule, MatDialogModule, MatOptionModule, MatRippleModule, MatSelectModule, MatSliderModule, MatDividerModule, MatSidenavModule, MatStepperModule, MatToolbarModule, MatTooltipModule, MatCheckboxModule, MatGridListModule, MatSnackBarModule, MatFormFieldModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule, MatBottomSheetModule, MatProgressBarModule, MatSlideToggleModule, MatAutocompleteModule, MatButtonToggleModule, MatPseudoCheckboxModule, MatProgressSpinnerModule, MAT_DATE_LOCALE } from '@angular/material';
import * as moment from 'moment';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Provider / Services
import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './_helper/index';
import { HttpService, LocalStorageService, AuthenticationService, AlertService, UserService, ShiftsService, TrainerService, ActivityService } from './services/index';
// import { routing } from './app.routing';

// Components
import { AppComponent } from './app.component';
import { HomeComponent,  LoginComponent, RegisterComponent, TrainerComponent, UserComponent, PageNotFoundComponent } from './pages/index';
import { AlertComponent, FooterComponent, HeaderComponent } from './components/index';

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
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatLineModule,
    MatListModule,
    MatSortModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatOptionModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatDividerModule,
    MatDividerModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatAutocompleteModule, 
    MatButtonToggleModule,
    MatPseudoCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthGuard,
    HttpService,
    LocalStorageService,
    AuthenticationService,
    AlertService,
    // UserService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR'},
    fakeBackendProvider,
    UserService, 
    ShiftsService,
    TrainerService, 
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
