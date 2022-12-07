import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FumettiComponent } from './fumetti/fumetti.component';

const routes: Routes = [
  {
    path: '',
    component: FumettiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
