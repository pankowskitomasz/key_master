import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from "./views/error/error.component";
import { ComingsoonComponent } from "./views/comingsoon/comingsoon.component";
import { ContactComponent } from "./views/contact/contact.component";
import { PrivacyComponent } from "./views/privacy/privacy.component";
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {path: "",component: ComingsoonComponent},
  {path: "contact",component: ContactComponent},
  {path: "login",component: LoginComponent},
  {path: "privacy",component: PrivacyComponent},
  {path: "register",component: RegisterComponent},
  {path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
