import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'lazysizes';

import { SuperHeroListComponent } from './list.component';
import { SuperHeroListRoutingModule } from './list-routing.module';

@NgModule({
  declarations: [SuperHeroListComponent],
  imports: [
    CommonModule,
    SuperHeroListRoutingModule
  ],
  exports: [
    SuperHeroListComponent
  ]
})
export class SuperHeroListModule { }