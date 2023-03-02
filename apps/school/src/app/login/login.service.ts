import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@school-nx-monorepo/api-interfaces';
//import { User } from '@school-nx-monorepo/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

    authLogin(email: string, password: string): Observable<Token> {
        const tryLogin = this.httpClient.post('http://localhost:3333/api/auth/login',
        { email, password });

        return tryLogin as Observable<Token>;
    }
}
