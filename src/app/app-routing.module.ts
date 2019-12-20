import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import {PackComponent} from './pack/pack.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'pack', component: PackComponent },
  { path: '', redirectTo: '/pack', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }