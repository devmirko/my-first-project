import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fumetto',
  templateUrl: './fumetto.component.html',
  styleUrls: ['./fumetto.component.css']
})
export class FumettoComponent implements OnInit {
@Input() fumetto: any;

  constructor(){}

  ngOnInit(): void {

  }

}
