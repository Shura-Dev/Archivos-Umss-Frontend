import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tramite } from '../models/tramite';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  tramiteURL = 'http://localhost:8081/v1/tramites/configTramites';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Tramite[]> {
    return this.httpClient.get<Tramite[]>(this.tramiteURL);
  }
}