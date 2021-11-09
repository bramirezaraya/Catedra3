import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from './inicio/inicio.component'
import { FormularioComponent } from './formulario/formulario.component';
import { Inicio2Component } from './inicio2/inicio2.component';

const routes: Routes = [

  {path:"", component:InicioComponent},
  {path:"inicioFahrenheit", component:Inicio2Component},
  {path:"region/:nombre", component:InicioComponent},
  {path:"formulario", component:FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
