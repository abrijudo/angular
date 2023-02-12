import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuArribaComponent } from './menu-arriba/menu-arriba.component';
import { PaginaProductosComponent } from './pagina-productos/pagina-productos.component';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuArribaComponent,
    PaginaProductosComponent,
    InicioPaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
