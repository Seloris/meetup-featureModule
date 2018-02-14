import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { UserResult } from '../../../../models/user';

@Component({
  selector: 'app-backoffice-page1',
  templateUrl: './backoffice-page1.component.html',
  styleUrls: ['./backoffice-page1.component.scss']
})
export class BackofficePage1Component implements OnInit {

  user: UserResult;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((userResult: UserResult) => {
      this.user = userResult;
    });
  }

}
