import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroeComponent} from "./components/heroe/heroe.component";
import {BuscadorComponent} from "./components/shared/buscador/buscador.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:heroe', component: HeroeComponent },
  { path: 'busqueda/:busqueda', component: BuscadorComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

