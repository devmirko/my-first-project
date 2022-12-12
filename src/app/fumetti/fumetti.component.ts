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
  constructor(private ServizioProva: ServizioProvaService, private route: ActivatedRoute){}

  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.isProfile = true
      this.fumetto = this.ServizioProva.getFumetto(parseInt(this.route.snapshot.paramMap.get('id')!))



    } else {
      this.isProfile = false
      this.fumetti = this.ServizioProva.getFumetti();
    }



  }



}
