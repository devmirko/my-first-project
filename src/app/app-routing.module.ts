import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { FumettiComponent } from './fumetti/fumetti.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/fumetti' },
  {
    path: 'fumetti',
    component: FumettiComponent, canActivate: [AuthGuard]
  },
  {
    path: 'fumetti/:id',
    component: FumettiComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {path: '**', redirectTo:'/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
