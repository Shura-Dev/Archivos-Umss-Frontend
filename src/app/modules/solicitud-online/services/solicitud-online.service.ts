import {Injectable} from '@angular/core';
import {ISolicitud} from "../models/ISolicitud";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IConfiguracionTramite} from "../../servicios/configuraciones/models/IConfiguracionTramite";
import {catchError, tap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SolicitudOnlineService {
  private solicitudURL: string = 'http://localhost:8081/v1/tramites/solicitudes';

  constructor(private httpClient: HttpClient) {
  }

  crearSolicitud(solicitud: ISolicitud) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // @ts-ignore
    solicitud.userId = "100";
    solicitud.email = "user@demo.com";
    return this.httpClient.post<IConfiguracionTramite>(this.solicitudURL, solicitud, {headers})
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
}
