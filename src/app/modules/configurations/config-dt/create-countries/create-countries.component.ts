import { Component, OnInit,Input } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
import { FormControl, FormGroup} from '@angular/forms'
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';
import { ConfigService } from '../../shared/services/config.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-create-countries',
  templateUrl: './create-countries.component.html',
  styleUrls: ['./create-countries.component.scss']
})
export class CreateCountriesComponent implements OnInit {
  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';

  @Input() uuid:any
  uuidCountry:any

  state:boolean= false
  countryForm = new FormGroup({
    name: new FormControl(null),
    code: new FormControl(null),
    demonym: new FormControl(null),
      })

  modal:NgbModalRef
  selectedFile: File |null
  selectedFile2: File |null
  constructor(private modalService: NgbModal, private configService:ConfigService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((r)=>{
      this.uuidCountry = r.uuid
    })
  }
  closeResult: string;



  openLg(content : any) {
    this.modal = this.modalService.open(content);
  }
  closeLg(){
    this.countryForm.reset()
    this.modal.close()
  }
  addCountry(uuid:any) {
    console.log('add country', this.countryForm.getRawValue(), this.uuidCountry);

    // if (this.diplomaForm.valid) {
      const formValue = this.countryForm.getRawValue();
      const newSection: any= {
        ...formValue,
        
      }

      this.configService.addCountry( this.uuidCountry, newSection)
        .subscribe((s: any) => {
          this.closeLg()
          Swal.fire(
            'Se creo un Nuevo Pais Correctamente'
          )
        });
    }
    alert(){
      this.closeLg()
      this.state=true
    }

}
