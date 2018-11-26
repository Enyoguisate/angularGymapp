import { Injectable } from "@angular/core";

// import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { LocalStorageService } from "./local-storage.service";
import { Observable, of } from "rxjs";
import { HttpParamsOptions } from "@angular/common/http/src/params";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
// import 'rxjs/of'

@Injectable({
  providedIn: "root"
})
export class HttpService {

  
  private token: string;
  private httpHeaders = new HttpHeaders({"Content-Type": "application/json",Accept: "application/json"});
  private headers = new Headers({"Content-Type": "application/json",Accept: "application/json"});
  private options: HttpParamsOptions;

  constructor(
    private localStorageFactoryService: LocalStorageService,
    // private http: Http,
    private httpClient: HttpClient
  ) // private commonMessageService: CommonMessageService
  {}

  get(url: string, params?: any): Observable<any> {
    let qparams = params || {};
    return this.httpClient.get(url, {
        headers: this.httpHeaders,
        params: qparams
      });
      // .map((response: Response) => {
      //   if (response.ok) {
      //     return response;
      //   } else {
      //     return response;
      //   }
      // });

  }

  post(url: string, body: any): Observable<Response> {
      // return this.httpClient.post(url, body, HttpO);
      // .map((response: Response) => {
      //   return response;
      // });
      return 
  }

  postRegister(url: string, body: any): Observable<Response> {
    // this.header.delete("Authorization");
    // return this.httpClient
    //   .post(url, body, { headers: this.header })
    //   .map((response: Response) => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       return response;
    //     }
    //   })
    //   .catch((err: Response) => {
    //     return Observable.throw(err);
    //   });
    return
  }

  delete(url: string): Observable<Response> {
    // return this.httpClient.delete(url).map((response: Response) => {
    //   return response;
    // });
    return 
  }

  put(url: string, body: any): Observable<Response> {
    // return this.httpClient
    //   .put(url, body, { headers: this.header })
    //   .map((response: Response) => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       return response;
    //     }
    //   });
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return
  }

  patch(url: string, body: any): Observable<Response> {
    // return this.httpClient
    //   .patch(url, body, { headers: this.httpHeaders })
    //   .map((response: Response) => {
    //     if (response.ok) {
    //       return response;
    //     } else {
    //       return response;
    //     }
    //   });
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return
  }

  refreshCustomToken(url: string, body: any): Observable<Response> {
    // return this.httpClient.post(url, body).map((response: Response) => {
    //   if (response.ok) {
    //     return response;
    //   } else {
    //     return response;
    //   }
    // });
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return
  }
}
