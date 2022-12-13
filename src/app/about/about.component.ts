import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ServizioProvaService } from '../Service/servizio-prova.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutform = this.fb.group({
    series: ['', Validators.required],
    type: ['', Validators.required],
    price: [0, Validators.required],
    status: [true, Validators.required],
    thumb: ['', Validators.required],
  })

  constructor(private servizioProva : ServizioProvaService, private fb: FormBuilder) {

    console.log(this.aboutform);

  }

  onUpdate() {
 this.aboutform.patchValue({
  series: this.aboutform.value.series,
  type: this.aboutform.value.type,
  price: Number(this.aboutform.value.price),
  status: this.aboutform.value.status,
  thumb: this.aboutform.value.thumb
 });

 this.servizioProva.AddFumetto(this.aboutform.value)

  }

}
