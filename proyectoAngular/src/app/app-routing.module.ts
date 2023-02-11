import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuArribaComponent} from './menu-arriba/menu-arriba.component';
import {PruebaIndexComponent} from './prueba-index/prueba-index.component';
import { PaginaDosComponent } from './pagina-dos/pagina-dos.component';
const routes: Routes = [
  { path: 'menu-arriba', component: MenuArribaComponent },
  { path: 'prueba-index', component: PruebaIndexComponent },
  { path: 'paginaDos', component: PaginaDosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
