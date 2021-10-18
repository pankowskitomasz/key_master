import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingsoonComponent } from './views/comingsoon/comingsoon.component';
import { ErrorComponent } from './views/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivacyComponent } from './views/privacy/privacy.component';
import { ContactComponent } from './views/contact/contact.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ContactS1Component } from './components/contact-s1/contact-s1.component';
import { ContactS2Component } from './components/contact-s2/contact-s2.component';
import { ContactFormComponent } from './components/contact-form/contactform.component';
import { LoginFormComponent } from './components/login-form/loginform.component';
import { RegisterFormComponent } from './components/register-form/registerform.component';

@NgModule({
  declarations: [
    AppComponent,
    ComingsoonComponent,
    ContactComponent,
    ContactS1Component,
    ContactS2Component,
    ContactFormComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    LoginFormComponent,
    NavbarComponent,
    PrivacyComponent,
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
