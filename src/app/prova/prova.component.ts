import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  cani = [
    {nome : "roger",
     razza: "golden",
     descrizione: "ciao sono un golden"}
  ]

  constructor() {


  }

  ngOnInit(): void {}

}
