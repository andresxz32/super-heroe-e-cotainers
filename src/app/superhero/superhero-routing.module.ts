import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperHeroComponent } from './superhero.component';

const routes: Routes = [{
  path: ':superheroId'
}, {
  path: '',
  component: SuperHeroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperHeroRoutingModule { }
