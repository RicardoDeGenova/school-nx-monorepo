import { Component } from '@angular/core';

@Component({
  selector: 'school-nx-monorepo-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {
   email  = '';
   password = '';
  
    constructor() {
        this.login();
    }

    login(){
        console.log(this.email);
        console.log(this.password);
    }
}
