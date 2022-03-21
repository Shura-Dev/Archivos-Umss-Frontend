import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import Swal from 'sweetalert2';
import { DiplomaService } from '../../diplomas-bachiller/lista-diplomas/services/diploma.service';
@Component({
  selector: 'app-edit-tomo',
  templateUrl: './edit-tomo.component.html',
  styleUrls: ['./edit-tomo.component.scss']
})
export class EditTomoComponent implements OnInit {

  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';
  @Input() uuid:any
  // @Input() tomo:any
  @Input() tomoDiploma:any
  idFile:any
  allYears:any

  tomoForm = new FormGroup({
    numTomo: new FormControl(null),
    year_initial: new FormControl(null),
    minNum: new FormControl(null),
    maxNum: new FormControl(null),
    observation: new FormControl(null),
      })

  modal:NgbModalRef
  ngOnInit(): void {
    this.getAllYears()
  }
  closeResult: string;

  constructor(private modalService: NgbModal, private diplomaService:DiplomaService, private ref:ChangeDetectorRef) {}
  refresh(){
    this.ref.detectChanges()
  }

  getAllYears(){
    const myYear = new Date()
    const year = myYear.getFullYear()
    const arr=[];
    for (let i= 1900; i < year+1; i++) {
      arr.push(i)  
    }
    this.allYears = arr.sort((a:number,b:number):any => b-a)
  }
  openLg(content : any, tomo:any) {
    this.modal = this.modalService.open(content);
    this.idFile = tomo.group_file_id
    console.log(this.idFile)
    this.tomoForm = new FormGroup({
      groupnum: new FormControl(tomo['groupnum']),
      year_initial: new FormControl(tomo['year_initial']),
      minNum: new FormControl(tomo['minimumrange']),
      maxNum: new FormControl(tomo['maximumrange']),
      observation: new FormControl(tomo['observation']),
    })
  }
  closeLg(){
    this.tomoForm.reset()
    this.modal.close()
  }
  
  updateTomo() {
    console.log('add faculty', this.tomoForm.getRawValue(), this.tomoForm.valid);

    // if (this.diplomaForm.valid) {
      const formValue = this.tomoForm.getRawValue();
      const newSection: any= {
        ...formValue,
        
      }
      console.log(newSection, this.idFile)
      this.diplomaService.updateTomo(newSection, this.idFile)
        .subscribe((s: any) => {
          this.closeLg()
          Swal.fire(
            'Se Actualizo Correctamente!',
          )
          this.refresh()
        });
    }
}
