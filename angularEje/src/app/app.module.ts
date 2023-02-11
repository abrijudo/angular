import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuArribaComponent } from './menu-arriba/menu-arriba.component';
import { PaginaNuevaComponent } from './pagina-nueva/pagina-nueva.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuArribaComponent,
    PaginaNuevaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
