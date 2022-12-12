import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fumetto',
  templateUrl: './fumetto.component.html',
  styleUrls: ['./fumetto.component.css']
})
export class FumettoComponent {
@Input() fumetto: any;

  constructor(){}



}
