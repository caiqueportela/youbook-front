import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import * as jwt_decode from 'jwt-decode';

import { environment } from 'src/environments/environment';

import { TokenService } from 'src/app/core/services/token/token.service';
import { User } from 'src/app/models/user';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private user: User;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
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

  listPaginated(page: number): Observable<User[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get(`${API_URL}/api/users`, { params })
      .pipe(
        map((response: any) =>
          response.items as User[]
        )
      );
  }

  signup(formData: any) {
    return this.http.post(`${API_URL}/api/user/register`, formData);
  }

}
