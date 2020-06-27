import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';

import { UserService } from 'src/app/core/services/user/user.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(username: string, password: string) {
    return this.http
      .post(`${API_URL}/api/login`, {
        username,
        password
      })
      .pipe(
        tap((res: any) => {
          const authToken = res.token;
          this.userService.setToken(authToken);
        })
      );
  }

}
