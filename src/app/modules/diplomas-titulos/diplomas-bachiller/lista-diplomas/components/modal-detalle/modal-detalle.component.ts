import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal }  from '@ng-bootstrap/ng-bootstrap'
import { PdfViewerComponent } from 'ng2-pdf-viewer'
import { PdfService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/pdf.service';
import { DiplomaService } from '../../services/diploma.service';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
  providers:[PdfService]
})
export class ModalDetalleComponent implements OnInit {
  @Input() array:any
  page:any = 1;
  antescedentes:number= 1;
  detailDegree:any
  constructor( private modalService:NgbModal, private pdfService:PdfService, private route:ActivatedRoute, private diplomaService:DiplomaService ) { }


  ngOnInit(): void {
    console.log('init detalle')

    this.diplomaService.getDiplomaByUuid(this.array.degree_id).subscribe((res:any[])=>{
      console.log(res) 
      // console.log(res?.studentRecordDTOS.path) 
      this.detailDegree=res
      console.log(this.detailDegree.attachmentDTOS[0].path)
    })
  }
  openLg(content:any, array:any){
    this.modalService.open(content,{size:'xl'})
    
  }
  
  changePdf(n:number){
    this.antescedentes=n;
  }

}
