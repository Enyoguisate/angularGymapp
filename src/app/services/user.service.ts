import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../interfaces/index";
import { Observable } from "rxjs/internal/Observable";
import { HttpService } from "./http.service";
import { URL_CONECTIONS } from "./url-connections";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserService {
  private _connection_string = URL_CONECTIONS;
  private url: string = this._connection_string.url;

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {}

  getUsers(): Observable<any> {
    let connString = this.url + this._connection_string.endPoints.getAllAlumnos;
    return this.httpService.get(connString).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }

  getUsersByShift(idTurno: number): Observable<any> {
    let connString =
      this.url + this._connection_string.endPoints.getAlumnoPorTurno;
    let qparams: string = "?turno=" + idTurno;
    return this.httpService.get(connString + qparams);
  }

  register(user: User) {
    return this.httpClient.post(`http://localhost:4000/users/register`, user);
  }
}
