import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { CarlisteComponent } from './carliste/carliste.component';

//Routes
const routes: Routes = [
  {
      path: 'car', component: CarlisteComponent,
      // children: [
      //      { path: 'maschinenliste', component: MaschinenlisteComponent },
      //      { path: 'maschinengruppen', component: MaschinengruppenComponent },
      // ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CarlisteComponent,
  ]
})
export class CarModule { }
