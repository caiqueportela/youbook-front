import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from 'src/app/core/services/token/token.service';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private user: User;

  constructor(
    private tokenService: TokenService
  ) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken();
    this.user = jwt_decode(token) as User;
    this.userSubject.next(this.user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getCurrentUser() {
    return this.user;
  }

}
