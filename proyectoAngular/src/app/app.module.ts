import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuArribaComponent } from './menu-arriba/menu-arriba.component';
import { PruebaIndexComponent } from './prueba-index/prueba-index.component';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuArribaComponent,
    PruebaIndexComponent,
    PaginaDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
