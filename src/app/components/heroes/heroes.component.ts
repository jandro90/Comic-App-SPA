import { Component, OnInit } from '@angular/core';
import {MiServicio} from "../../app.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes:any[] = [];

  constructor(private _servicio:MiServicio) {
    this.heroes = this._servicio.getHeroes();
  }

  ngOnInit() {
  }

}
