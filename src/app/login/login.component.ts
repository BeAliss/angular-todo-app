import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

  error: string = '';
  userLogin: string;
  userPassword: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  onLogin() {
     this.authService.correctData(this.userLogin,this.userPassword).subscribe(data => {
      if(data.length==0){
        this.error = 'введены не верные данные';
      };

      data.map(e => {
         if(e.payload.doc.data()){
          sessionStorage.setItem('currentUser',e.payload.doc.id);
          this.router.navigate(['/home'])
          this.error = '';
         }
      });
    });
  }

}
