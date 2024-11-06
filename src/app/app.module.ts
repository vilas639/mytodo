import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

//import { HttpClient, HttpHeaders } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorpageComponent,
    ListtodosComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
