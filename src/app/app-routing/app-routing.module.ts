import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "../error/error.component";
import {ComingsoonComponent} from "../comingsoon/comingsoon.component";
import {PrivacyComponent} from "../privacy/privacy.component";

const routes: Routes = [
  {path: "",component: ComingsoonComponent},
  {path: "privacy",component: PrivacyComponent},
  {path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }