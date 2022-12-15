import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../Service/firebase.service';

@Component({
  selector: 'app-fumetto',
  templateUrl: './fumetto.component.html',
  styleUrls: ['./fumetto.component.css']
})
export class FumettoComponent implements OnInit {
fumetto: any;

  constructor(private firebase: FirebaseService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getFumettoById(params['id']))
  }

  getFumettoById(id: string){
    this.firebase.getFumetto(this.firebase.urlFumetti,id)
    .subscribe((data : any) =>
      this.fumetto = data);
    }
  }




