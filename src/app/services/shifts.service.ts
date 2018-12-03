import { Injectable } from "@angular/core";
import { Shift, ShiftResponseFromApi, Turno } from "../interfaces/index";
import { Observable } from "rxjs/internal/Observable";
import { HttpService } from "./http.service";
import { URL_CONECTIONS } from './url-connections';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  // private url: string = 'http://www.invictusgym.com.ar/consultas/get_turnos.php';
  private _connection_string = URL_CONECTIONS;
  private url: string = this._connection_string.url;

  constructor(
    private httpService: HttpService
  ) { 
    
  }

  getShiftByIdAndDate(idActivity: number, day: string): Observable<ShiftResponseFromApi> {
    let qparams: string = '?actividad=' + idActivity + '&dia=' + day
    return this.httpService.get(this.url + qparams);
  }

  
  getShifts(): Observable<ShiftResponseFromApi> {
    return this.httpService.get(this.url);
  }
}
