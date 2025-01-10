import { Videogame } from "../videogame/videogame.model";

const LISTA_VIDEOGAMES: Videogame[] = [
    {  
        titolo: "The Legend of Zelda: Breath of the Wild",  
        descrizione: "Un'avventura open world che rivoluziona il genere, piena di esplorazione e sfide.",  
        genere: "Azione/Ruolo",  
        dataRilascio: new Date('2017-03-03'),  
        prezzo: 59.99,  
        statoDisponibilita: true,  
        immagineCopertina: "zelda.webp"  
    },  
    {  
        titolo: "God of War",  
        descrizione: "Un'epica storia di vendetta che segue Kratos, un ex dio che affronta le sue origini.",  
        genere: "Azione/Avventura",  
        dataRilascio: new Date('2018-04-20'),  
        prezzo: 49.99,  
        statoDisponibilita: false,  
        immagineCopertina: "god-of-war.jpg"  
    },  
    {  
        titolo: "Minecraft",  
        descrizione: "Un gioco sandbox che permette ai giocatori di costruire e esplorare mondi 3D infiniti.",  
        genere: "Avventura/Sandbox",  
        dataRilascio: new Date('2011-11-18'),  
        prezzo: 26.95,  
        statoDisponibilita: true,  
        immagineCopertina: "minecraft.jpg"  
    },  
    {  
        titolo: "The Witcher 3: Wild Hunt",  
        descrizione: "Un gioco di ruolo acclamato dalla critica, con una trama avvincente e un vasto mondo aperto.",  
        genere: "GDR/Azione",  
        dataRilascio: new Date('2015-05-19'),  
        prezzo: 39.99,  
        statoDisponibilita: false,  
        immagineCopertina: "the-witcher-3.jpg"  
    },  
    {  
        titolo: "Hades",  
        descrizione: "Un roguelike che segue Zagreus nella sua fuga dall'oltretomba, con una narrazione avvincente e combattimenti frenetici.",  
        genere: "Azione/Roguelike",  
        dataRilascio: new Date('2020-09-17'),  
        prezzo: 24.99,  
        statoDisponibilita: false,  
        immagineCopertina: "hades.jpg"  
    },  
    {  
        titolo: "Elden Ring",  
        descrizione: "Un'epica avventura dark fantasy creata da FromSoftware, in collaborazione con George R.R. Martin.",  
        genere: "Azione/RPG",  
        dataRilascio: new Date('2022-02-25'),  
        prezzo: 69.99,  
        statoDisponibilita: true,  
        immagineCopertina: "elden-ring.avif"  
    },  
    {  
        titolo: "Cyberpunk 2077",  
        descrizione: "Un RPG futuristico ambientato nella vibrante Night City, con una trama ricca e personaggi memorabili.",  
        genere: "Azione/RPG",  
        dataRilascio: new Date('2020-12-10'),  
        prezzo: 49.99,  
        statoDisponibilita: false,  
        immagineCopertina: "cyberpunk-2077.jpg"  
    },  
    {  
        titolo: "Hollow Knight",  
        descrizione: "Un'avventura metroidvania che segue un misterioso cavaliere in un mondo sotterraneo meravigliosamente disegnato.",  
        genere: "Azione/Platform",  
        dataRilascio: new Date('2017-02-24'),  
        prezzo: 14.99,  
        statoDisponibilita: true,  
        immagineCopertina: "hollow-knight.jpg"  
    },  
    {  
        titolo: "Red Dead Redemption 2",  
        descrizione: "Un'epica avventura western che segue la vita di Arthur Morgan e la sua banda nel 1899.",  
        genere: "Azione/Avventura",  
        dataRilascio: new Date('2018-10-26'),  
        prezzo: 59.99,  
        statoDisponibilita: false,  
        immagineCopertina: "red-dead-redemption-2.webp"  
    },  
    {  
        titolo: "Stardew Valley",  
        descrizione: "Un gioco di simulazione agricola rilassante, dove puoi costruire una fattoria, fare amicizia e vivere avventure.",  
        genere: "Simulazione",  
        dataRilascio: new Date('2016-02-26'),  
        prezzo: 14.99,  
        statoDisponibilita: true,  
        immagineCopertina: "stardew-valley.avif"  
    }  
]

export default LISTA_VIDEOGAMES;
