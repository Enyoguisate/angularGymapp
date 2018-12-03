import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  private currentUserSubject: BehaviorSubject<Alumno>;
  public currentUser: Observable<Alumno>;
  

  constructor() { 
    this.getUserFromStorage();
  }

  setUserToStorage(user: Alumno){
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.getUserFromStorage();
  }

  setCurrentUserSubject(user: Alumno){
    this.currentUserSubject.next(user);
  }

  getUserFromStorage(): any{
    this.currentUserSubject = new BehaviorSubject<Alumno>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log('this.currentUser', this.currentUser);
    return this.currentUser;
  }

  removeCurrentUser(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getCurrentUserAdminStatus() {
    return this.currentUser;
  }
}
