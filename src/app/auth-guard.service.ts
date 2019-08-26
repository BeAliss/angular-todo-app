import {CanActivate,Router} from "@angular/router";

 
export class AuthGuardService implements CanActivate{
  constructor(private router: Router) {};
  canActivate() : boolean{
    if(sessionStorage.getItem('currentUser')!==null){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    };
  }
}