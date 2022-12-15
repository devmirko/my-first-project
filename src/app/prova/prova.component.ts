import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../Service/firebase.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  @Input() item:  any
  @Input() index:  any


  constructor( private firebase: FirebaseService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.OnDeleteFumetto
  // }



  OnDeleteFumetto(){

  this.firebase.DeleteFumetto(this.firebase.urlFumetti,this.item.id)
  .subscribe(data => {
    console.log(data);
    window.location.reload();
  })

  }



}
