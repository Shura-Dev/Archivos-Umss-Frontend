import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {SolicitudOnlineService} from "../../services/solicitud-online.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-solicitud-example',
  templateUrl: './solicitud-example.component.html'
})
export class SolicitudExampleComponent implements OnInit, OnDestroy {
  hasError: boolean = false;
  solicitudExampleForm: FormGroup;
  isLoading$: Observable<boolean>;
  sub: Subscription | undefined;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(private _fb: FormBuilder,
              private _solicitudService: SolicitudOnlineService,
              private _route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    this.hasError = false;

    const solicitudFormValues = this.solicitudExampleForm.getRawValue();
    const solicitud: any = {
      ...solicitudFormValues,
    }

    this.sub = this._solicitudService.crearSolicitud(solicitud).subscribe({
      next: (responseSolicitud) => {
        this.solicitudExampleForm.reset();
        this._route.navigateByUrl('solicitudOnline');
      },
      error: (err) => {
        console.log("addBusqueda error: " + err);
      }
    });
  }

  // convenience getter for easy access to form fields
  get getFormFields() {
    return this.solicitudExampleForm.controls;
  }

  private initForm() {
    this.solicitudExampleForm = this._fb.group(
      {
        cuenta: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
          ]),
        ],
        solicitudType: [
          '',
          Validators.compose([
            Validators.required
          ]),
        ]
      },
      {}
    );
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
