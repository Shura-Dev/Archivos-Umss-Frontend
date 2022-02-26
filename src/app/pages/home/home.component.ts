import {Component, Input, OnInit} from '@angular/core';
import { FakeAPIService } from 'src/app/_fake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() inlineSVG: string="";
  user:any
  constructor( private apiService:FakeAPIService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData(){
    console.log(this.apiService.createDb())
    this.user = this.apiService.createDb()
  }

}
