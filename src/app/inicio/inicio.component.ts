import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Route} from "@angular/router";
import {listaClima,Clima} from '../interfaces/clima'
import {listaRegiones,Regiones} from '../interfaces/regiones'
import {listaCategoria,CategoriaClima } from '../interfaces/categoria-clima'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  listaRegiones = listaRegiones;
  listaClima = listaClima;
  listaCategoria = listaCategoria;
  id:number=0;


  constructor(private ruta:ActivatedRoute) {
    this.ruta.params.subscribe(datos=> {
      this.id=datos["id"];
    })
   }

  ngOnInit(): void {
  }

}
