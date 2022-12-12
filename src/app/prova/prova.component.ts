import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  @Input() item:  any
  @Input() index:  any




  constructor() {


  }



}
