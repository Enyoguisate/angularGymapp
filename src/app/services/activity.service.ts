import { Injectable } from "@angular/core";
import { ActivityResponseFromApi } from "../interfaces/index";
import { Observable } from "rxjs/internal/Observable";
import { HttpService } from "./http.service";
import { URL_CONECTIONS } from './url-connections';

@Injectable({ providedIn: "root" })
export class ActivityService {
  private _connection_string = URL_CONECTIONS;
  private url: string = this._connection_string.url;
  private endPointGetActividad = this._connection_string.endPoints.getActividad;
  private endPointPostActividad = this._connection_string.endPoints.postActividad;

  constructor(
      private httpService: HttpService
      ) {}

  getAllActivities(): Observable<ActivityResponseFromApi> {
    return this.httpService.get(this.url + this.endPointGetActividad);
  }

  getActivity(): Observable<ActivityResponseFromApi>{
    return this.httpService.get(this.url + this.endPointGetActividad)
  }

  postActivity(idActivity: number, nombre: string): Observable<ActivityResponseFromApi> {
    let body = {
      idactividad: idActivity,
      nombre: nombre
    }
    // + '?idactividad=' +  idActivity + '&nombre=' + nombre
    let connString: string = this.url + this.endPointPostActividad;
    return this.httpService.post(connString, body);
  }
}
