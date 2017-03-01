import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MiServicio} from "../../app.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  private heroe:any[] = [];

  constructor(private _activatedRoute:ActivatedRoute, private _servicio:MiServicio,
              private _location:Location) {
    this._activatedRoute.params.subscribe(params => {
     this.heroe =  this._servicio.getHeroe(params['heroe']);
     console.log(this.heroe);
    })
  }

  ngOnInit() {
  }

  volverAtras(){
    this._location.back();
  }

}
