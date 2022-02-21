import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tomos',
  templateUrl: './listar-tomos.component.html',
  styleUrls: ['./listar-tomos.component.scss']
})
export class ListarTomosComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  navigation(){
    console.log('first')
    this.route.navigate(['crafted/diplomas/overview'])
  }
}
