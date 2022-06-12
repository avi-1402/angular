import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './register/registration/registration.component';

const routes: Routes = [
  {path:'register', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'welcome', component:WelcomeComponent},
  { path : '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
