import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable()
export class AuthService {

  constructor(
    private api: ApiService
  ) {
  }

  correctData(login: String,password: String) {
    return this.api.correctData(login, password);
  }
  correctLogin(login: String) {
    return this.api.correctLogin(login);
  }
  saveDataUser(login: String,password: String) {
    return this.api.saveDataUser(login,password);
  }

}
