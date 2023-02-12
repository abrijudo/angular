import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuArribaComponent} from './menu-arriba/menu-arriba.component';
import { PaginaProductosComponent } from './pagina-productos/pagina-productos.component';
import { InicioPaginaComponent } from './inicio-pagina/inicio-pagina.component';

const routes: Routes = [
  { path: 'menu-arriba', component: MenuArribaComponent },
  { path: 'pagina-productos', component: PaginaProductosComponent },
  { path: 'inicio-pagina', component: InicioPaginaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
