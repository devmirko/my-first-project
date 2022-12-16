import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../Service/firebase.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
 editForm = this.fb.group({
  series: ['', Validators.required],
  type: ['', Validators.required],
  price: ['', Validators.required],
  status: [true, Validators.required],
  thumb: ['', Validators.required],
})

id : string

constructor( private fb: FormBuilder, private firebase : FirebaseService, private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.params.subscribe(params => this.id = params['id'] )

  this.firebase.getFumetto(this.firebase.urlFumetti,this.id)
    .subscribe((data : any) =>
    this.editForm.patchValue({
    series : data.series,
    type: data.type,
    price: data.price,
    status: data.status,
    thumb: data.thumb
    })
    );


}




OnPatchFumetto() {
  this.firebase.UpdateFumetto(this.firebase.urlFumetti,this.id,{
    series : this.editForm.value.series,
    type: this.editForm.value.type,
    price: this.editForm.value.price,
    status: this.editForm.value.status,
    thumb: this.editForm.value.thumb
  })
  .subscribe((data : any) =>
  console.log(data)
  );
}



}
