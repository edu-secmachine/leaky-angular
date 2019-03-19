import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {MessagesComponent} from './messages/messages.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationComponent} from './registration/registration.component';
import {MoviesComponent} from './movies/movies.component'
import {AuthGuard} from './AuthGuard';
import { NewmovieComponent } from './newmovie/newmovie.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'messages', component: MessagesComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'newmovie', component: NewmovieComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
