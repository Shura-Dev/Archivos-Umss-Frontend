import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';
import { ConfigService } from '../../shared/services/config.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-countries',
  templateUrl: './edit-countries.component.html',
  styleUrls: ['./edit-countries.component.scss'],
})
export class EditCountriesComponent implements OnInit {
  @Input() cssClass: String = '';
  @Input() widgetHeight: String = '130px';
  @Input() country: any;
  uuidCountry: any;

  editCountryForm = new FormGroup({
    name: new FormControl(null),
    codCountry: new FormControl(null),
    demonym: new FormControl(null),
  });

  modal: NgbModalRef;
  selectedFile: File | null;
  selectedFile2: File | null;

  constructor(
    private modalService: NgbModal,
    private configService: ConfigService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((r) => {
      this.uuidCountry = r.uuid;
    });
  }
  closeResult: string;

  openLg(content: any, country:any) {
    this.modal = this.modalService.open(content);
    console.log(country)
    this.editCountryForm = new FormGroup({
      name: new FormControl(country.nationalityDTO['name']),
      code: new FormControl(country.nationalityDTO['code']),
      demonym: new FormControl(country.nationalityDTO['demonym']),
      id: new FormControl(country.nationalityDTO['id'])
    })
  }
  closeLg() {
    this.editCountryForm.reset();
    this.modal.close();
  }

  editC() {
    console.log('add faculty', this.editCountryForm.getRawValue());

    // if (this.diplomaForm.valid) {
    const formValue = this.editCountryForm.getRawValue();
    const newSection: any = {
      ...formValue,
    };

    this.configService
      .updatedCountry( newSection)
      .subscribe((s: any) => {
        this.closeLg();
        Swal.fire(
          'Se Actualizo Correctamente'
        )
      });
  }
}
