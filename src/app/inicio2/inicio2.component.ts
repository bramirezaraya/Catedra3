import { Component, OnInit } from '@angular/core';


import {ActivatedRoute,Route} from "@angular/router";
import {listaClima,Clima} from '../interfaces/clima'
import {listaRegiones,Regiones} from '../interfaces/regiones'
import {listaCategoria,CategoriaClima } from '../interfaces/categoria-clima'; 

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.component.html',
  styleUrls: ['./inicio2.component.scss']
})
export class Inicio2Component implements OnInit {

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
