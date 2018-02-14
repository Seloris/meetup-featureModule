import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { UserResult, User } from '../../../models/user';

@Injectable()
export class UserService {

  private user: User;

  constructor(private httpClient: HttpClient) {
    console.log('UserService.ctor called');
  }

  public getUser(): Observable<UserResult> {
    console.log('UserService.getUser called');

    if (this.user) {
      console.log('User exists, return from cache');
      return Observable.of({
        name: this.user.name,
        source: 'cache'
      });
    }

    console.log('Fetching user from API and saving into cache');
    return this.fetchUserFromApi().map((userFromApi: User) => {
      this.user = userFromApi;
      return {
        name: this.user.name,
        source: 'api'
      };
    });
  }

  public fetchUserFromApi(): Observable<User> {
    return this.httpClient.get<User>('assets/user-data.json');
  }
}
