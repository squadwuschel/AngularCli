import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { UserlisteComponent } from './userliste/userliste.component';

//Routes
const routes: Routes = [
  {
      path: 'user', component: UserlisteComponent,
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
    ButtonsModule,
    DropDownsModule,
  ],
  declarations: [
    UserlisteComponent,
  ]
})
export class UserModule { }
