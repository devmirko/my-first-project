import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ServizioProvaService } from './Service/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit  {
  @ViewChild('mandainput') valoreInput!: ElementRef
  title = 'my-first-project';
  public fumetti;
  constructor( private ServizioProva: ServizioProvaService) {
    this.fumetti = ServizioProva.comix

  }

  ngAfterViewInit(): void {
    console.log(this.valoreInput);

  }

  ngOnInit(): void {
    console.log(this.ServizioProva.comix);

  }



  // onInput( event: Event ) {
  //   this.title = (<HTMLInputElement>event.target).value
  //   console.log((<HTMLInputElement>event.target).value)

  // }

  // onClick( event: Event ) {
  //   this.title = "titolo modificato"


  // }

    // onClick() {

    //  console.log(this.valoreInput.nativeElement.value);

    // }



}
