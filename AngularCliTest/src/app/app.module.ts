import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';


import { UserModule } from './views/user/user.module';
import { CarModule } from './views/car/car.module';


const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', redirectTo: '/user' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    UserModule,
    CarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
