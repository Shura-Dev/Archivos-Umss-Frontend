import { Component, OnInit } from '@angular/core';
import { DiplomaService } from 'src/app/shared/services/diploma.service';

@Component({
  selector: 'app-lista-diplomas',
  templateUrl: './lista-diplomas.component.html',
  styleUrls: ['./lista-diplomas.component.scss']
})
export class ListaDiplomasComponent implements OnInit {
  diplomas:any
  constructor( private diplomaService:DiplomaService) { }

  ngOnInit(): void {
    const ts = this.diplomaService.getDiplomas()
    this.diplomas = ts
  }

}
