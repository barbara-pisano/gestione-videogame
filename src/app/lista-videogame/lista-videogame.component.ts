import { Component } from '@angular/core';
import { Videogame } from '../videogame/videogame.model';
import LISTA_VIDEOGAMES from './LISTA_VIDEOGAMES';
import { VideogameComponent } from '../videogame/videogame.component';

@Component({
  selector: 'app-lista-videogame',
  imports: [VideogameComponent],
  templateUrl: './lista-videogame.component.html',
  styleUrl: './lista-videogame.component.css'
})
export class ListaVideogameComponent {
   videogames: Videogame[] = LISTA_VIDEOGAMES;
}
