import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { UserResult, User } from '../../../models/user';

@Injectable()
export class UserService {
  static nextId = 0;

  private id: number;
  private user: User;

  constructor(private httpClient: HttpClient) {
    this.id = UserService.nextId++;
    console.log('UserService.ctor called, id : ' + this.id);
  }

  public getUser(): Observable<UserResult> {
    console.log('UserService.getUser called');

    if (this.user) {
      console.log('User exists, return from cache');
      return Observable.of({
        name: this.user.name,
        source: 'cache',
        serviceId: this.id
      });
    }

    console.log('Fetching user from API and saving into cache');
    return this.fetchUserFromApi().map((userFromApi: User) => {
      this.user = userFromApi;
      return {
        name: this.user.name,
        source: 'api',
        serviceId: this.id
      };
    });
  }

  public fetchUserFromApi(): Observable<User> {
    return this.httpClient.get<User>('assets/user-data.json');
  }
}
