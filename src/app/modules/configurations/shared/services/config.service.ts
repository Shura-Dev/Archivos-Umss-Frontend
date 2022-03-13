import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, Subject } from "rxjs";
import { CreateCountriesComponent } from "../../config-dt/create-countries/create-countries.component";
import { tap } from "rxjs/operators";

@Injectable({providedIn:'root'})

export class ConfigService{

  private _refresh$ = new Subject<any>()

  constructor( private httpClient: HttpClient){}

  get refresh$(){
    return this._refresh$
  }

  addCountry(uuid:any,country:any){
    const formData = new FormData()
    formData.append('name', country.name),
    formData.append('code', country.code),
    formData.append('demonym', country.demonym),
    formData.append('type_file',uuid)
    const actionApi = `http://localhost:8081/v1/config/nationality_type`
    return this.httpClient.post<any>(actionApi,formData)
    .pipe(
      tap(() => {
          this._refresh$.next();
      })
    )
    
  }
  getAllCountries():Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8081/v1/config/nationality_type`)
  }
  updatedCountry(dataCountry:any) {
    return this.httpClient.post<any>(`http://localhost:8081/v1/config/nationality/${dataCountry.id}`,dataCountry)
    .pipe(
      tap(() => {
          this._refresh$.next();
      })
    )
  }
  deleteCountry(id:any){
   return this.httpClient.post<any>(`http://localhost:8081/v1/config/nationality_type/delete/${id}`,id)
   .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
  }
  activatedCountry(id:any){
   return this.httpClient.post<any>(`http://localhost:8081/v1/config/nationality_type/enable/${id}`,id)
   .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
  }

}

73041585
