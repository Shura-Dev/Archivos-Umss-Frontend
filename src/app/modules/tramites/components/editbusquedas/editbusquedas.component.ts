import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-editbusquedas',
  templateUrl: './editbusquedas.component.html',
  styleUrls: ['./editbusquedas.component.scss']
})
export class EditbusquedasComponent implements OnInit {

  @Input() cssClass :String = '';
  @Input() widgetHeight:String = '130px';


  modal:NgbModalRef
  selectedFile: File |null
  selectedFile2: File |null
  ngOnInit(): void {
  }
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  
  openLg(content : any) {
    this.modal = this.modalService.open(content);
  }
  closeLg(){
    this.modal.close()
  }

  
}

