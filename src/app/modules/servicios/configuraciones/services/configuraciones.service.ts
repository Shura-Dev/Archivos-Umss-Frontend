import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {IConfiguracionTramite} from "../models/IConfiguracionTramite";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {
  private tramiteURL: string = 'http://localhost:8081/v1/tramites/configTramites';

  constructor(private httpClient: HttpClient) { }

  public save(configuracionTramite: IConfiguracionTramite): Observable<IConfiguracionTramite> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // @ts-ignore
    configuracionTramite.id = null;
    configuracionTramite.tipo="1";
    return this.httpClient.post<IConfiguracionTramite>(this.tramiteURL, configuracionTramite, { headers })
      .pipe(
        tap(data => console.log('createBusqueda: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public lista(): Observable<IConfiguracionTramite[]> {
    return this.httpClient.get<IConfiguracionTramite[]>(this.tramiteURL).pipe(
      tap((data) => console.log('Response: ', JSON.stringify(data))),
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
