import { Injectable } from "@angular/core";
import { Diploma } from "../models/diploma.model";

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
  getDiplomas():any{
    return this.mockDiploma
  }
  saveDiploma(datos:any){
    return this.mockDiploma.push(datos)
  }
  
  saveDiplomaWithFiles(faculty: any, file: File | null, file2:File|null ) {
    const formData = new FormData();
    formData.append('name', faculty.name)
    formData.append('code', faculty.code)
    formData.append('universityUuid', faculty.university.uuid);
    formData.append('file', file as any);
    formData.append('file2', file as any);
    console.log(file)
    // const actionApi = `http://localhost:9090/faculties/with-files`;
    // return this.httpClient.post<any>(actionApi, formData);


  }
}