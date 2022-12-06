import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {
  @Input() data: any
  isdisable = false



  constructor() {


  }

  ngOnInit(): void {}

}
