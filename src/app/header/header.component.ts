import { Component, OnInit } from '@angular/core';

import {listaRegiones} from '../interfaces/regiones'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  listaRegiones = listaRegiones;
  constructor() { }

  ngOnInit(): void {
  }

}
