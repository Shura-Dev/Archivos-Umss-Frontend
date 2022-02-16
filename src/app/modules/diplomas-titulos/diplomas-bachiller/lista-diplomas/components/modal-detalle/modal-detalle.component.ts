import { Component, OnInit } from '@angular/core';
import { NgbModal }  from '@ng-bootstrap/ng-bootstrap'
import { PdfViewerComponent } from 'ng2-pdf-viewer'
import { PdfService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/pdf.service';

@Component({
  selector: 'app-modal-detalle',
  templateUrl: './modal-detalle.component.html',
  styleUrls: ['./modal-detalle.component.scss'],
  providers:[PdfService]
})
export class ModalDetalleComponent implements OnInit {
  page:any = 1;
  pdfSrc:string = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor( private modalService:NgbModal, private pdfService:PdfService ) { }

  ngOnInit(): void {
    // this.pdfSrc = this.pdfService.getPDF()
    // this.onFileSelected()
  }
  openLg(content:any){
    this.modalService.open(content,{size:'xl'})
  }
  onFileSelected() {
    let img: any = document.querySelector("#file");

    if(typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();

      reader.onload = (e:any) => {
        this.pdfSrc = e.target.result;
        console.log(this.pdfSrc);
      }

      reader.readAsArrayBuffer(img.files[0]);
    }
  }

}
