import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { NewUser } from 'src/app/models/new-user';

const API_URL = environment.apiUrl;

@Injectable()
export class SignupService {

  constructor(
    private http: HttpClient
  ) {}

  checkUserNameTaken(username: string) {
    return this.http.get(`${API_URL}/api/exists/${username}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${API_URL}/api/register`, newUser);
  }

}
