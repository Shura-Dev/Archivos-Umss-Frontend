import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Diploma } from "../models/diploma.model";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})

export class DiplomaService {
  private mockDiploma =[
    {
      uuid: '21211-12654-4561235-45412',
      id:1,
      nombre:'pancho silpancho',
      numero:12,
      fecha:'01/02/2022',
      folio:2
    },
    {
      uuid: '21211-12654-4861235-99999',
      id:2,
      nombre:'ruben orellana',
      numero:17,
      fecha:'01/08/2021',
      folio:4
    },
    {
      uuid: '21211-12654-4561235-55552',
      id:3,
      nombre:'morthy',
      numero:22,
      fecha:'01/02/2028',
      folio:3
    },
  ]
  constructor( private httpClient: HttpClient){}
  getDiplomas():any{
    return this.mockDiploma
  }
  saveDiploma(datos:any){
    return this.mockDiploma.push(datos)
  }
  
  saveDiplomaWithFiles(diploma: any, file: File | null, file2:File|null  ) {
    const formData = new FormData();
    console.log(diploma);
    formData.append('numTitulo', diploma.numero)
    formData.append('dateRegister', diploma.fecha)
    formData.append('numFolio', diploma.folio)
    formData.append('dateFolio', diploma.Ffolio)
    formData.append('attachment', file as any);
    formData.append('antecedente', file2 as any);
    formData.append('observation', diploma.observaciones);
    formData.append('ci', diploma.ci);
    // formData.append('', diploma.expiraCi);
    formData.append('passport', diploma.pasaporte);
    formData.append('lastname', diploma.apellidos);
    formData.append('name', diploma.nombre);
    formData.append('gender', diploma.sexo);
    formData.append('nationality', diploma.nacionalidad);
    formData.append('tipoUuid', '83a27c0f-c324-48c0-ad17-6f1ddc93aee0');
    
    const actionApi = `http://localhost:8080/titulo/with-files`;
    return this.httpClient.post<any>(actionApi, formData)
    // .subscribe((data) =>{
    //   console.log(data);
    // })
  }
}