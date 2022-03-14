import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {ISolicitud} from "../models/ISolicitud";

@Injectable({
  providedIn: 'root'
})
export class SolicitudOnlineService {
  private solicitudURL: string = 'http://localhost:8081/v1/tramites/solicitudes';

  constructor(private httpClient: HttpClient) {
  }

  crearSolicitud(newSolicitud: any) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const solicitud1 = <ISolicitud>{};
    solicitud1.userId = "100";
    solicitud1.email = "user@demo.com";
    solicitud1.account = newSolicitud.cuenta;
    solicitud1.name = newSolicitud.solicitudType;

    return this.httpClient.post<ISolicitud>(this.solicitudURL, solicitud1, {headers})
      .pipe(
        tap(data => console.log('crearSolicitud: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in real world app, we may send the server to some remote logging infrstructure
    // instead of just logging it to the console
    let errorMessage;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // the backend returned an unsuccessful reponse code
      // the response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  public lista(): Observable<ISolicitud[]> {
    return this.httpClient.get<ISolicitud[]>(this.solicitudURL).pipe(
      tap((data) => console.log('Response: ', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
