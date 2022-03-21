import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import Swal from 'sweetalert2';
import { DiplomaService } from '../../diplomas-bachiller/lista-diplomas/services/diploma.service';
import { getUniqueIdWithPrefix } from 'src/app/_metronic/kt/_utils';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/modules/configurations/shared/services/config.service';

@Component({
  selector: 'app-create-tomo',
  templateUrl: './create-tomo.component.html',
  styleUrls: ['./create-tomo.component.scss']
})
export class CreateTomoComponent implements OnInit {

  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';
  allYears:any
  grade:any

  tomoForm = new FormGroup({
    numTomo: new FormControl(null),
    year: new FormControl(null),
    minNum: new FormControl(null),
    maxNum: new FormControl(null),
    observation: new FormControl(null),
      })

  modal:NgbModalRef
  closeResult: string;
  
  constructor(private modalService: NgbModal, private diplomaService:DiplomaService, private ref:ChangeDetectorRef, private route:ActivatedRoute, private configService:ConfigService) {}
  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      this.diplomaService.getSectionByUuid(p.uuid).subscribe((section)=>{
        this.grade = section
        console.log(this.grade)
      })
    })
    this.getAllYears()
  }
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
  openLg(content : any) {
    this.modal = this.modalService.open(content);
  }
  closeLg(){
    this.tomoForm.reset()
    this.modal.close()
  }
  
  addSection(id:any) {
    console.log('add faculty', this.tomoForm.getRawValue(), this.tomoForm.valid);

    // if (this.diplomaForm.valid) {
      const formValue = this.tomoForm.getRawValue();
      const newSection: any= {
        ...formValue
        
      }
      this.diplomaService.saveTomo(newSection, id)
      .subscribe((s: any) => {
          console.log(newSection,id ),
          this.closeLg()
          Swal.fire(
            'Registrado Correctamente!',
          )
          this.refresh()
        });
    }
}
