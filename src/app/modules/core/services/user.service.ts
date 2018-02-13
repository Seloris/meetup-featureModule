import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private random: number;

  constructor() {
    this.random = Math.round(Math.random() * 100);
  }

  public getUser(): string {
    return `Daniel ${this.random}`;
  }
}
