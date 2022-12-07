import { Component } from '@angular/core';
import { ServizioProvaService } from '../Service/servizio-prova.service';


@Component({
  selector: 'app-fumetti',
  templateUrl: './fumetti.component.html',
  styleUrls: ['./fumetti.component.css']
})
export class FumettiComponent {
  public fumetti;
  constructor(private ServizioProva: ServizioProvaService){
    this.fumetti = ServizioProva.comix
  }



}
