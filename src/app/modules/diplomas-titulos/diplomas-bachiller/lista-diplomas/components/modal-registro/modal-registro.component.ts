import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-modal-registro',
  templateUrl: './modal-registro.component.html',
  styleUrls: ['./modal-registro.component.scss']
})
export class ModalRegistroComponent implements OnInit {
  
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';

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
  ngOnInit(): void {
  }
  closeResult: string;

  constructor(private modalService: NgbModal, private diplomaService:DiplomaService) {}


  openLg(content : any) {
    this.modal = this.modalService.open(content, { size: 'xl' });
  }
  closeLg(){
    this.diplomaForm.reset()
    this.modal.close()
  }
  guardarDiploma(){
    console.log(this.diplomaForm.getRawValue());
    this.diplomaService.saveDiploma(this.diplomaForm.getRawValue())
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

  addDiplomaWithFiles() {
    console.log('add faculty', this.diplomaForm.getRawValue(), this.diplomaForm.valid);

    if (this.diplomaForm.valid) {
      const formValue = this.diplomaForm.getRawValue();
      const newDiploma: any= {
        ...formValue,
        
      }

      this.diplomaService.saveDiplomaWithFiles(newDiploma, this.selectedFile, this.selectedFile2)
        // .subscribe((facultyCreated: any) => {
        //   this.diplomaForm.reset();
        // });
    }
  }

}
