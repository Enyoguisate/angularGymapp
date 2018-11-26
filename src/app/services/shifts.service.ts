import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(
    private httpService: HttpService
  ) { 
    // this.httpService.get('107.180.59.131',)
  }
}
