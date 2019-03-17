import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  

  constructor(private userService: UserService) 
  {

  }

  ngOnInit() {
    console.log('UsersComponent.ngOnInit called');
    this.userService.getUsers().subscribe(u => this.users = u);
  }

}
