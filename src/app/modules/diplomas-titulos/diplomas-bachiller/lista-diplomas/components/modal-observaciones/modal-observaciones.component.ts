import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-modal-observaciones',
  templateUrl: './modal-observaciones.component.html',
  styleUrls: ['./modal-observaciones.component.scss']
})
export class ModalObservacionesComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }
  openLg(content:any){
    this.modalService.open(content,{size:'lg'})
  }
}
