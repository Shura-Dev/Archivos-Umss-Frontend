import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/modules/configurations/shared/services/config.service';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {
  
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';

@Input() nameTipo:string
countries:any
grade:any
gender:any=['Masculino', 'Femenino']
studentCi:any
  diplomaForm = new FormGroup({
    numero: new FormControl(null),
    fecha: new FormControl(null),
    grado: new FormControl(null),
    folio: new FormControl(null),
    Ffolio: new FormControl(null),
    observaciones: new FormControl(null),
    ci: new FormControl(null),
    expiraCi: new FormControl(null),
    pasaporte: new FormControl(null),
    apellidos: new FormControl(null),
    nombre: new FormControl(null),
    sexo: new FormControl(null),
    nacionalidad: new FormControl(null),

  })

  modal:NgbModalRef
  selectedFile: File |null
  selectedFile2: File |null

  constructor(private modalService: NgbModal, private diplomaService:DiplomaService, private route:ActivatedRoute, private configService:ConfigService) {}

  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      this.diplomaService.getSectionByUuid(p.uuid).subscribe((section)=>{
        this.grade=section
        this.configService.getAllCountries().subscribe((c:any[])=>{
          const f = c.filter(x => x.typeFileDTO.type_id === section.type_id && x.active === true)
          const cou = f.map(e=> e.nationalityDTO)
          this.countries = cou
      })
      })
    })
    
    }
  closeResult: string;



  openLg(content : any) {
    this.modal = this.modalService.open(content, { size: 'xl' });
  }
  closeLg(){
    this.diplomaForm.reset()
    this.modal.close()
  }
  
  onFileSelect(event:Event){
    console.log(event);
  }
  onFileSelected(fileEvent: Event) {
    const target = fileEvent?.target as HTMLInputElement;

    if (target?.files && target.files.length) {
      console.log(target?.files);
      this.selectedFile = target?.files.item(0);
    }
  }
  onFileSelected2(fileEvent: Event) {
    const target = fileEvent?.target as HTMLInputElement;

    if (target?.files && target.files.length) {
      console.log(target?.files);
      this.selectedFile2 = target?.files.item(0);
    }
  }

  addDiplomaWithFiles(id?:any) {
    console.log('add facultya' , id, this.diplomaForm.getRawValue(), this.diplomaForm.valid);

    // if (this.diplomaForm.valid) {
      const formValue = this.diplomaForm.getRawValue();
      const newDiploma: any= {
        ...formValue,
        
      }

      this.diplomaService.saveDiplomaWithFiles(newDiploma, this.selectedFile, this.selectedFile2, id)
        .subscribe((facultyCreated: any) => {
          this.closeLg()
          Swal.fire(
            'Se Registro Correctamente'
          )
        });
    }
    getStudentCI(ci: any) {
      // 98566325
      this.diplomaService.getStudent(ci).subscribe((fac: any) => {
        this.studentCi = fac
  
  //  const  studentForm = new FormGroup({
  //     ci: fac.ci,
  //     pasaporte: fac.ci,
  //     apellidos: fac.lastname,
  //     nombre: fac.name,
  //     sexo: fac.gender,
  //     nacionalidad: fac.nationality,
  //   });
  console.log('obteniendo estudiante')
        console.log(fac)
      });
    }
  
  }

// }
