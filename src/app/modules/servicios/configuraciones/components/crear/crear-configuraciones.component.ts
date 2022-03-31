import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ConfiguracionesService} from "../../services/configuraciones.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-crear-configuraciones',
  templateUrl: './crear-configuraciones.component.html'
})
export class CrearConfiguracionesComponent implements OnInit {
  @Input() cssClass: String = '';
  @Input() widgetHeight: String = '130px';
  modal: NgbModalRef
  closeResult: string;
  @Output() saveBusquedaClicked: EventEmitter<string> = new EventEmitter<string>();

  busquedaForm = new FormGroup({
    nombre: new FormControl(null),
    costo: new FormControl(null),
    cuenta: new FormControl(null),
    duracion: new FormControl(null),
    descripcion: new FormControl(null),
  })

  constructor(private modalService: NgbModal,
              private configuracionesService: ConfiguracionesService) {
  }

  ngOnInit(): void {
  }

  onClickCreateTramiteDeBusqueda(content: any) {
    this.modal = this.modalService.open(content);
  }

  closeModalBusqueda() {
    this.modal.close()
  }

  addBusqueda() {
    const formValue = this.busquedaForm.getRawValue();
    const newSection: any = {
      ...formValue,
    }

    this.configuracionesService.save(newSection).subscribe({
      next: (responseConfiguraciones) => {
        this.saveBusquedaClicked.emit(JSON.stringify(responseConfiguraciones))
        this.busquedaForm.reset();
      },
      error: (err) => {
        console.log("addBusqueda error: " + err);
      }
    });
    this.closeModalBusqueda()
  }

}
