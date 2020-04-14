import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ICredential } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  login(credential: ICredential): Observable<any> {

    const endpoint = 'https://localhost:44355/api/authenticate';
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response'
    };
    return this.http.post(endpoint, credential, httpOptions);
  }
}
