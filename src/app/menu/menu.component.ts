import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../AuthGuard';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser: User;

  constructor(
    authGuard: AuthGuard,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
  }



  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
