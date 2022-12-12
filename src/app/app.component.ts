import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('mandainput') valoreInput!: ElementRef
  title = 'my-first-project';


  ngAfterViewInit(): void {
    console.log(this.valoreInput);

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
