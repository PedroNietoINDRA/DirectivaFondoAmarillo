import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FondoAmarilloDirective } from './fondo-amarillo.directive';

@NgModule({
  declarations: [
    AppComponent,
    FondoAmarilloDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
