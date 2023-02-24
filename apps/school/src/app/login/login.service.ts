import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { User } from '@school-nx-monorepo/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

    authLogIn(email: string, password: string): Observable<unknown> {
        console.log(email);
        console.log(password);
        return this.httpClient.post('http://localhost:3333/api/auth/login',
        { email, password });
    }
}
