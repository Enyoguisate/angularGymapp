import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { URL_CONECTIONS } from './url-connections';
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _connection_string = URL_CONECTIONS;
  private url: string = this._connection_string.url;
  private endPointGetAlumnosPorTurno = this._connection_string.endPoints.getAlumnoPorTurno;
  private endPointGetActividades = this._connection_string.endPoints.getActividad;
  private endPointTurnos = this._connection_string.endPoints.getTurnos;

  constructor(
    private httpService: HttpService
  ) { 
    // this.httpService.get('107.180.59.131',)

    
  }

  getAlumnosPorTurno(idTurno): Observable<any> {
    let qparams: string = "?turno=" + idTurno;
    return this.httpService.get(this.url + this.endPointGetAlumnosPorTurno+qparams);
  }

  getActividades(): Observable<any>{
    return this.httpService.get(this.url+this.endPointGetActividades);
  }

  getTurnos(idTurno: number): Observable<any>{
    let qparams: string = "?turno=" + idTurno;
    return this.httpService.get(this.url+this.endPointTurnos+qparams);
  }


}
