import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, LoginComponent, RegisterComponent, TrainerComponent, UserComponent, PageNotFoundComponent } from './pages/index';
// import { AuthGuard } from './guards/index';

// const routes: Routes = [];

const appRoutes: Routes = [
  // , canActivate: [AuthGuard]
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent },
  { path: 'admin', component: TrainerComponent },

  // otherwise redirect to home
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
