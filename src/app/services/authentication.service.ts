import { Injectable } from '@angular/core';
import { UserModel } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs/';
  // import { of } from 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userModel: UserModel;

  constructor() { }


  logout(){

  }

  login(user?: UserModel): Observable<UserModel>{
    console.log('login => userModel', user);
    this.userModel = user;
    return of<UserModel>(this.userModel) ;
  }


}


