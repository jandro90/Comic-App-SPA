import { Component, OnInit } from '@angular/core';
import {MiServicio} from "../../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  private heroes:any[] = [];

  constructor(private _servicio:MiServicio, private _router:Router) {
    this.heroes = this._servicio.getHeroes();
  }

  ngOnInit() {
  }

  infoHeroe(heroe:string){
    this._router.navigate(['/heroe/',heroe]);
  }

}
