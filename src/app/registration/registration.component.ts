import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { RegistrationService } from './registration.service';
import { AlertService } from '../alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  constructor(
    private regservice: RegistrationService,
    private alertService : AlertService,
    private router: Router
    ) {
    this.user = new User();
  }

  register(): void {
    console.log(this.user);
    this.regservice.register(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl("/login");
        },
        error => {
          console.log(error);
          this.alertService.error("Error during user create. User might already exists.")
        });
  }
  ngOnInit() {
  }

}
