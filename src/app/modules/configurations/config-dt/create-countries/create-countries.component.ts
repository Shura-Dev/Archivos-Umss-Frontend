import { Component, OnInit,Input } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-create-countries',
  templateUrl: './create-countries.component.html',
  styleUrls: ['./create-countries.component.scss']
})
export class CreateCountriesComponent implements OnInit {
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

  constructor(private modalService: NgbModal, private diplomaService:DiplomaService) {}


  openLg(content : any) {
    this.modal = this.modalService.open(content);
  }
  closeLg(){
    this.sectionForm.reset()
    this.modal.close()
  }
  guardarDiploma(){
    console.log(this.sectionForm.getRawValue());
    this.diplomaService.saveDiploma(this.sectionForm.getRawValue())
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
        });
    }

}
