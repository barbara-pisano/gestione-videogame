import { Component, computed, Input } from '@angular/core';
import { Videogame } from './videogame.model';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-videogame',
  imports: [FormComponent],
  templateUrl: './videogame.component.html',
  styleUrl: './videogame.component.css'
})
export class VideogameComponent {

  @Input({required: true}) videogame!: Videogame;
  
  imagePath = computed(()=> { return "img/" + this.videogame.immagineCopertina});


  prenotazione: boolean = false;
  
  onPrenota() {
    this.prenotazione = true;

  }

  acquisto: boolean = false;

  onAcquisto() {
    this.acquisto = true;
  }

}
