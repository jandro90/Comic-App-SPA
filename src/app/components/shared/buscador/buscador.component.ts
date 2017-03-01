import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MiServicio} from "../../../app.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  private heroeEcontrado:any[] = [];
  private buscador:string;

  constructor(private _activatedRouter:ActivatedRoute, private _servicio:MiServicio,
              private _router:Router) {

    this._activatedRouter.params.subscribe(params =>{
      this.buscador = params['busqueda'];
      this.heroeEcontrado = this._servicio.getBusqueda(params['busqueda']);
      console.log(this.heroeEcontrado);

    })
  }

  ngOnInit() {
  }

  infoHeroe(heroe:string){
    this._router.navigate(['/heroe/',heroe]);
  }


}
