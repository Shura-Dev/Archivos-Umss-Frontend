import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diplomas-bachiller',
  templateUrl: './diplomas-bachiller.component.html',
  styleUrls: ['./diplomas-bachiller.component.scss']
})
export class DiplomasBachillerComponent implements OnInit {

  constructor( private router:Router, private location:Location) { }

  ngOnInit(): void {
  }

back():void{
  // this.router.navigate(['crafted/diplomas/tomos'])

  this.location.back()
}
}
