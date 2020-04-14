import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ICredential } from './login';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService: LoginService;
  username: string;
  password: string;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
   }

  ngOnInit() {
  }

  onClick(): void {
    const credentials: ICredential = {
      username: this.username,
      password: this.password
    };
    
    console.log('button clicked');
    this.loginService.login(credentials).subscribe(resp => {
      // https://angular.io/guide/http#reading-the-full-response
      const keys = resp.headers.keys();
      const headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
      console.log(headers);
      }      
      );
    console.log('logged in');
  }
}
