import { Data } from "@angular/router";

export interface Videogame {
    titolo: string,
    descrizione: string,
    genere: string,
    dataRilascio: Data,
    prezzo: number,
    statoDisponibilita: boolean,
    immagineCopertina: string
}