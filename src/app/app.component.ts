import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  onInput( event: Event ) {
    this.title = (<HTMLInputElement>event.target).value
    console.log((<HTMLInputElement>event.target).value)

  }

  onClick( event: Event ) {
    this.title = "titolo modificato"


  }


}
