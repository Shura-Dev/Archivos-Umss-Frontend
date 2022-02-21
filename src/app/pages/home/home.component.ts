import {Component, Input, OnInit} from '@angular/core';

let input = Input;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() inlineSVG: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
