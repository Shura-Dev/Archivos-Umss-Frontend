import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import Swal from 'sweetalert2';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';
@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {
  
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';
  @Input() title:string
  @Input() subTitle:string
  @Input() organization:any
  @Input() orgLink:{
    label:string,
    route:string
  }
  editForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl(''),
    description: new FormControl(''),
      })
      modal:NgbModalRef
      selectedFile: File |null
      selectedFile2: File |null
      closeResult: string;
      
      ngOnInit(): void {
        // this.diplomaService.getSectionByUuid(this.organization.type_id).subscribe((res)=>{
        //   this.editForm =new FormGroup ({
        //     name:new  FormControl(res['name']),
        //     codSection:new  FormControl(res['code']),
        //     description:new  FormControl(res['description'])
        //   })
        // console.log(this.editForm)
        // })

        
      }
      constructor(private modalService: NgbModal, private diplomaService:DiplomaService) {}
   
      openLg(content : any, org:any) {
        this.modal = this.modalService.open(content);
        this.editForm = new FormGroup({
          name: new FormControl(org['name']),
          code: new FormControl(org['code']),
          description: new FormControl(org['description'])
        })
        console.log(org)
      }
      closeLg(){
        this.editForm.reset()
        this.modal.close()
      }
      
      editSection(uuid:any) {
        console.log('edit section ', this.editForm.getRawValue());
    
        // if (this.diplomaForm.valid) {
          const formValue = this.editForm.getRawValue();
          const newSection: any= {
            ...formValue,
            
          }
    
          this.diplomaService.updateSectionByUuid(uuid,newSection)
            .subscribe((s: any) => {
              this.closeLg()
              Swal.fire(
                'Editado Correctamente!',
                // 'You clicked the button!',
                // 'success'
              )
            });
        }

}
