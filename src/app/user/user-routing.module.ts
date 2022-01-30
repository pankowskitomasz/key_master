import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/loginform.component';
import { RegisterFormComponent } from './register-form/registerform.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginFormComponent
  },
  {
    path:"register",
    component:RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
