import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CookieInterceptor} from './authentication/cookie.interceptor';
import { AlertComponent } from './alert/alert.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {	MatDialogModule,	MatProgressSpinnerModule} from '@angular/material';
import { MoviesComponent } from './movies/movies.component';
import { NewmovieComponent } from './newmovie/newmovie.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    HomeComponent,
    MessagesComponent,
    ProfileComponent,
    LoginComponent,
    AlertComponent,
    RegistrationComponent,
    UserdetailsComponent,
    MoviesComponent,
    NewmovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CookieInterceptor, multi: true },
  ],
  entryComponents:[
    UserdetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
