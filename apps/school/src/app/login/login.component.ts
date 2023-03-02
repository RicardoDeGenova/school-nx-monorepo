import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'school-nx-monorepo-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {
   email  = '';
   password = '';
  
    constructor(private authService: LoginService, private router: Router) {}

    login(){
        this.authService.authLogin(this.email, this.password).subscribe({
            next: (n) => {
                localStorage.setItem('token', n.access_token);
            },
            error: (e) => {
                console.error(e);
                alert('Email or password is incorrect.');
            },
            complete: () => this.router.navigate(['schedule'])
        });
        
    }
}
