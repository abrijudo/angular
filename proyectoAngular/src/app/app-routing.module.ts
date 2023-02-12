import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuArribaComponent} from './menu-arriba/menu-arriba.component';
const routes: Routes = [
  { path: 'menu-arriba', component: MenuArribaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
