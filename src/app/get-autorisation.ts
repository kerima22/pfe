import { Time } from "@angular/common";

export interface GetAutorisation {
    HeureSortie:Time;
    HeureRetour:Time;
    Motif:String;
    Duree:Time;
    matriculeP:String;
    Solde:number;
}
