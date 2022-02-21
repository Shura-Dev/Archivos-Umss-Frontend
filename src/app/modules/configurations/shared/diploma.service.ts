import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
// import { Diploma } from "../models/diploma.model";
import { Observable } from "rxjs";

@Injectable()

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
 rutas:any[] = [
    {
      uuid: '343-344-443-343',
      name: 'Diplomas de Bachiller',
      code: 'FCYT',
      description:'asdfafas'
    },
    {
      uuid: '343-344-443-342',
      name: 'Certificado Academico',
      code: 'FH',
      description:'asdfafas'
    },
    {
      uuid: '343-364-443-741',
      name: 'Diploma Academico',
      code: 'FH',
      description:'asdfafas'
    },
    {
      uuid: '343-344-443-322',
      name: 'Titulo Profesional',
      code: 'FH',
      description:'asdfafas'
    }
  ];
  constructor( private httpClient: HttpClient){
    console.log('diploma service')
  }

  getAllRutas():Observable<any>[]{
    return this.rutas
  }


  getAllDiplomas():Observable<any>{

    return this.httpClient.get<any>(`http://localhost:8081/v1/config/degree/bachiller`)
  }
  saveDiploma(datos:any){
    return this.mockDiploma.push(datos)
  }
  
  saveDiplomaWithFiles(diploma: any, file: File | null, file2:File|null  ) {
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
    formData.append('typeUuid', '83a27c0f-c324-48c0-ad17-6f1ddc93aee0');
    
    const actionApi = `http://localhost:8081/v1/config/degree/unclassified`;
    return this.httpClient.post<any>(actionApi, formData)
    // .subscribe((data) =>{
    //   console.log(data);
    // })
  }
  deleteDiploma(){
  } 
//sections

saveNewSection(section:any){
  const formData = new FormData()
  formData.append('name', section.name)
  formData.append('code', section.codSection)
  formData.append('description', section.description)

  const actionApi = `http://localhost:8081/v1/config/type`
  return this.httpClient.post<any>(actionApi,formData)
}
getAllSection():Observable<any>{
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/type`)
}
getSectionByUuid(uuid:any):Observable<any>{
  return this.httpClient.get<any>(`http://localhost:8081/v1/config/type/${uuid}`);
}
}