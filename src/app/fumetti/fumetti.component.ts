import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from '../Service/servizio-prova.service';


@Component({
  selector: 'app-fumetti',
  templateUrl: './fumetti.component.html',
  styleUrls: ['./fumetti.component.css']
})
export class FumettiComponent implements OnInit{
  fumetti: any
  fumetto: any
  isProfile:boolean
  constructor(private ServizioProva: ServizioProvaService, private route: ActivatedRoute){
    // this.fumetti = ServizioProva.comix
  }

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.fumetto = this.ServizioProva.getFumetto(parseInt(this.route.snapshot.paramMap.get('id')!))
      console.log(this.fumetto);


    } else {
      this.isProfile = false
      this.fumetti = this.ServizioProva.getFumetti();
    }
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.isProfile);


  }



}
