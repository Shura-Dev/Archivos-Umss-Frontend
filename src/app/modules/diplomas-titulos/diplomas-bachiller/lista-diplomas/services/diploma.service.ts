import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Diploma } from "../models/diploma.model";
import { Observable, Subject } from "rxjs";
import { FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";

@Injectable({providedIn:'root'})

export class DiplomaService {
private _refresh$ = new Subject<void>()

  constructor( private httpClient: HttpClient){}
  get refresh$(){
      return this._refresh$;
  }

  getAllDiplomas(uuid:any):Observable<any>{

    return this.httpClient.get<any>(`http://localhost:8081/v1/config/degree/`)
  }
  getDiplomaByUuid(id:any){
    return this.httpClient.get<any>(`http://localhost:8081/v1/config/degree/${id}`)
  }
  
  saveDiplomaWithFiles(diploma: any, file: File | null, file2:File|null, id?:any ) {
    const formData = new FormData();

    console.log(diploma);
    formData.append('degree_num', diploma.numero)
    formData.append('date_initial', diploma.fecha)
    formData.append('folio_num', diploma.folio)
    formData.append('folio_date', diploma.Ffolio)
    formData.append('attachment', file as any);
    formData.append('studentRecord', file2 as any);
    formData.append('observation', diploma.observaciones);
    formData.append('ci', diploma.ci);
    // formData.append('', diploma.expiraCi);
    formData.append('passport', diploma.pasaporte);
    formData.append('lastname', diploma.apellidos);
    formData.append('name', diploma.nombre);
    formData.append('gender', diploma.sexo);
    formData.append('nationality', diploma.nacionalidad);
    formData.append('typeUuid', id);
    console.log(formData)
    const actionApi = `http://localhost:8081/v1/config/degree/unclassified`;
    return this.httpClient.post<any>(actionApi, formData)
      .pipe(
        tap(() => {
            this._refresh$.next();
        })
      )
    
  }
  updateDiploma(diploma:any, uuid:any){
    const formData = new FormData()
    formData.append('degree_num', diploma.numero)
    formData.append('date_initial', diploma.fecha)
    formData.append('folio_num', diploma.folio)
    formData.append('folio_date', diploma.Ffolio)
    formData.append('observation', diploma.observaciones);
    console.log(formData)
    const actionApi = `http://localhost:8081/v1/config/degree/edit/${uuid}`
    return this.httpClient.post<any>(actionApi,formData)
    .pipe(
      tap(() => {
          this._refresh$.next();
      })
    )
  }
  deleteDiploma(){
  } 
//sections

saveNewSection(section:any){
  const formData = new FormData()
  formData.append('name', section.name)
  formData.append('code', section.codSection + '-UMSS')
  formData.append('description', section.description)

  const actionApi = `http://localhost:8081/v1/config/type`
  return this.httpClient.post<any>(actionApi,formData)
  .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
}
getAllSection():Observable<any>{
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/type`)
}
getSectionByUuid(uuid:any):Observable<any>{
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/type/${uuid}`);
}
updateSectionByUuid(uuid:any, data:any):Observable<any>{
  return this.httpClient.post<any>(`http://localhost:8081/v1/config/type/${uuid}`,data);
}
//student Ci
getStudent(ci:any):Observable<any> {
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/students/ci/${ci}`)
}

//Tomos
saveTomo(tomo:any, uuid:any){
  const formData = new FormData()
  formData.append('groupnum', tomo.numTomo)
  formData.append('minimumrange', tomo.minNum)
  formData.append('maximumrange', tomo.maxNum)
  formData.append('observation', tomo.observation)
  formData.append('year_initial', tomo.year)
  formData.append('typeUuid', uuid)
  console.log('aqui esta')
  console.log(formData)
  const actionApi = `http://localhost:8081/v1/config/group_file`
  return this.httpClient.post<any>(actionApi,formData)
  .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
}

getTomoByUuid(id:any):Observable<any>{
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/type/${id}/group`)
}
// updateTomo(tomo, uuid){
//   return this.httpClient.post<any>(`http://localhost:8081/v1/config/type/${uuid}`,data);
// }
updateTomo(tomo:any, id:any):Observable<any>{
  const formData = new FormData()
  formData.append('groupnum', tomo.groupnum)
  formData.append('minimumrange', tomo.minNum)
  formData.append('maximumrange', tomo.maxNum)
  formData.append('year_initial', tomo.year_initial)
  formData.append('observation', tomo.observation);
  const actionApi = `http://localhost:8081/v1/config/group_file/edit/${id}`
  return this.httpClient.post<any>(actionApi,formData)
  .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
}

deleteTomo(id:any):Observable<any>{
  console.log('este es el id delete', id)
  return this.httpClient.post<any>(`http://localhost:8081/v1/config/group_file/delete/${id}`,id)
}
enlazarTomo(uuid:any, id:any):Observable<any>{
  return this.httpClient.post<any>(`http://localhost:8081/v1/config/degree/group_together/${id}/${uuid}`, uuid)
  .pipe(
    tap(() => {
        this._refresh$.next();
    })
  )
}
}