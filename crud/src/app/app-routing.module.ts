import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const routes: Routes = [
  { path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio',component: InicioComponent},
  {path:'add',component:AgregarComponent},
  {path:'edit/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
