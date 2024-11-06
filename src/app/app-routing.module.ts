import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ListtodosComponent } from './listtodos/listtodos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [

    {path:'' ,component: LoginComponent},
    {path:'login' ,component: LoginComponent},
    {path:'welcome/:name' ,component: WelcomeComponent, canActivate:[RouteGuardService]},//canActivate
    {path:'list' ,component: ListtodosComponent,canActivate:[RouteGuardService]},//canActivate
    // {path:'header' ,component: HeaderComponent},
    // {path:'footer' ,component: FooterComponent},
    {path:'logout' ,component: LogoutComponent,canActivate:[RouteGuardService]},
    {path:'**' ,component: ErrorpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
