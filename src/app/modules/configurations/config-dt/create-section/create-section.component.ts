import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';

  sectionForm = new FormGroup({
    name: new FormControl(null),
    codSection: new FormControl(null),
    description: new FormControl(null),
      })

  modal:NgbModalRef
  selectedFile: File |null
  selectedFile2: File |null
  ngOnInit(): void {
  }
  closeResult: string;

  constructor(private modalService: NgbModal, private diplomaService:DiplomaService, private ref:ChangeDetectorRef) {}
  refresh(){
    this.ref.detectChanges()
  }

  openLg(content : any) {
    this.modal = this.modalService.open(content);
  }
  closeLg(){
    this.sectionForm.reset()
    this.modal.close()
  }
  
  addSection() {
    console.log('add faculty', this.sectionForm.getRawValue(), this.sectionForm.valid);

    // if (this.diplomaForm.valid) {
      const formValue = this.sectionForm.getRawValue();
      const newSection: any= {
        ...formValue,
        
      }

      this.diplomaService.saveNewSection(newSection)
        .subscribe((s: any) => {
          this.closeLg()
          Swal.fire(
            'Registrado Correctamente!',
            // 'You clicked the button!',
            // 'success'
          )
          this.refresh()
        });
    }

}
