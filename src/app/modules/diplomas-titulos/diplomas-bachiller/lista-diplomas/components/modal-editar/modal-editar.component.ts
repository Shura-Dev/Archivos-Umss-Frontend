import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { NgbModal, NgbModalRef }  from '@ng-bootstrap/ng-bootstrap'
import { DiplomaService } from '../../services/diploma.service';
import { PdfService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/pdf.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
  providers:[PdfService]
})
export class ModalEditarComponent implements OnInit {
  page:any = 1;
  pdfSrc:string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor( private modalService: NgbModal, private diplomaService:DiplomaService ) { }
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';
  @Input() diploma:any

  modal:NgbModalRef
  selectedFile: File |null
  selectedFile2: File |null

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

  ngOnInit(): void {
    // this.pdfSrc = this.pdfService.getPDF()
    // this.onFileSelected()
  }
  openLg(content : any, diploma:any) {
    this.modal = this.modalService.open(content, { size: 'xl' });
    console.log('informacion del diploma')
    console.log(diploma)
    console.log('end')
    this.diplomaForm = new FormGroup({
    numero: new FormControl(diploma['degree_num']),
    fecha: new FormControl(diploma['date_initial']),
    grado: new FormControl(diploma.typeFileDTO['name']),
    folio: new FormControl(diploma['folio_num']),
    Ffolio: new FormControl(diploma['folio_date']),
    observaciones: new FormControl(diploma['observation']),
    ci: new FormControl(diploma.studentDTO['ci']),
    expiraCi: new FormControl(diploma['expiraCi']),
    pasaporte: new FormControl(diploma.studentDTO['passport']),
    apellidos: new FormControl(diploma.studentDTO['lastname']),
    nombre: new FormControl(diploma.studentDTO['name']),
    sexo: new FormControl(diploma.studentDTO['gender']),
    nacionalidad: new FormControl(diploma.studentDTO['nationality']),
    })
    console.log(diploma)
    console.log(diploma.typeFileDTO)
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

  updateDiploma(uuid:any) {
    console.log('add faculty', this.diplomaForm.getRawValue(), this.diplomaForm.valid);

    // if (this.diplomaForm.valid) {
      const formValue = this.diplomaForm.getRawValue();
      const newDiploma: any= {
        ...formValue,
        
      }

      this.diplomaService.updateDiploma(newDiploma, uuid)
        .subscribe((facultyCreated: any) => {
          this.closeLg()
          Swal.fire(
            'Se Actualizo Correctamente'
          )
        });
    }
}
