import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { User } from "../interfaces/index";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserService {
  public url: string = `http://www.invictusgym.com.ar/consultas/get_all_alumnos.php`;
  public httpHeaders: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Accept": "application/json"
  });

  constructor(private httpClient: HttpClient) {}

  getUsers(params?: any): Observable<any> {
      console.log('getUsers', );
      return this.httpClient.get(this.url, {headers: this.httpHeaders})
      .pipe(map((response: Response) => {
          console.log("getUsers map => response", response);
          return response;
        })
      );
  }

  getAll() {
    return this.httpClient.get<User[]>(`http://localhost:4000/`);
  }
  getById(id: number) {
    return this.httpClient.get(`http://localhost:4000/users/${id}`);
  }

  register(user: User) {
    return this.httpClient.post(`http://localhost:4000/users/register`, user);
  }

  update(user: User) {
    return this.httpClient.put(`http://localhost:4000/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.httpClient.delete(`http://localhost:4000/users/${id}`);
  }
}
