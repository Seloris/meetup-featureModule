import { Component, OnInit } from '@angular/core';
import { UserService } from '../../modules/core/services/user.service';
import { UserResult } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: UserResult;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserResult) => {
      this.user = user;
    });
  }

}
