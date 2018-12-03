import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, AlumnoApiResponse, Alumno } from '../interfaces/index';
import { URL_CONECTIONS } from "./url-connections";
import { UserService } from './user.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private _connection_string = URL_CONECTIONS;
    private url: string = this._connection_string.url;

    constructor(
        private userService: UserService,
        private localStorageService: LocalStorageService
        ) {
    }

    public get currentUserValue(): Alumno {
        return this.localStorageService.getUserFromStorage();
    }

    login(username: string, password: string) {
        return this.matchUserCredentials(username, password).pipe(map((response: Alumno) => {
            return response;
          })
        );;
    }

    public matchUserCredentials(username: string, password: string): Observable<any>{
        let alumnoResponse: Alumno = null;
        return this.userService.getUsers().pipe(map((response: AlumnoApiResponse) => {
            response.alumno.forEach((alumno: Alumno) => {
                if(alumno.usuario === username && alumno.contrasena === password){
                    alumnoResponse = alumno;
                    this.localStorageService.setUserToStorage(alumno);
                    this.localStorageService.setCurrentUserSubject(alumno);
                } else {
                    if(!alumnoResponse){
                        alumnoResponse =  null;
                    }
                }
            });
            console.log('alumnoResponse', alumnoResponse);
            return alumnoResponse;
          })
        );
    }

    logout() {
        this.localStorageService.removeCurrentUser();
    }

    // private matchUserCredentials(username: string, password: string){
    //     let alumnoResponse: Alumno = null;
    //     return new Observable<Alumno>( observer => {
    //         this.userService.getUsers().subscribe((response: AlumnoApiResponse) => {
    //             response.alumno.forEach((alumno: Alumno) => {
    //                 if(alumno.usuario === username && alumno.contrasena === password){
    //                     alumnoResponse = alumno;
    //                     this.localStorageService.setUserToStorage(alumno);
    //                     this.localStorageService.setCurrentUserSubject(alumno);
    //                 } else {
    //                     if(!alumnoResponse){
    //                         alumnoResponse =  null;
    //                     }
    //                 }
    //             });
    //             console.log('alumnoResponse', alumnoResponse);
    //             observer.next(alumnoResponse);
    //         });

    //     }) 
    // }
}