import { Injectable } from '@angular/core';

const KEY = 'youbookToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(KEY);
  }

  removeToken(): void {
    localStorage.removeItem(KEY);
  }

}
