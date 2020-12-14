import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterationFormComponent } from './components/registeration-form/registeration-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent, 
    LoginFormComponent, 
    RegisterComponent, 
    RegisterationFormComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
