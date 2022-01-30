import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { BlogModule } from './blog/blog.module';
import { ComingsoonModule } from './comingsoon/comingsoon.module';
import { ErrorModule } from './error/error.module';
import { FaqModule } from './faq/faq.module';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PrivacyModule } from './privacy/privacy.module';
import { ServicesModule } from './services/services.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BlogModule,
    ComingsoonModule,
    FaqModule,
    HomeModule,
    PrivacyModule,
    ServicesModule,
    UserModule,
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
