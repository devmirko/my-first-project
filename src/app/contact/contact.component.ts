import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactform : FormGroup

  constructor() {

  }

  ngOnInit(): void {
    this.contactform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.minLength(1),   Validators.maxLength(50), Validators.required])
    })
  }


  onSubmit(){
    console.log(this.contactform);


  }

}
