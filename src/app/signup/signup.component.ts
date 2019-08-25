import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userLogin: string;
  userPassword: string;
  error: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }
  onSignUp() {
    this.authService.correctLogin(this.userLogin).subscribe(data => {
      if(data.length==0){
        this.authService.saveDataUser(this.userLogin,this.userPassword);
        this.error = '';
        this.router.navigate(['/login'])
      };

      data.map(e => {
         if(e.payload.doc.data()){
          this.error = 'пользователь с таким логином уже существует';
         }
      });
    });
  }
}
