import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  successMessage: string = '';
  classStyle: string = ''; //classe CSS dinamica per il messaggio

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.successMessage = 'Prenotato con successo!';
      this.classStyle = 'text-success';

    } else {
      this.successMessage = 'Dati non validi';
      this.classStyle = 'text-danger';

    }
  }

}
