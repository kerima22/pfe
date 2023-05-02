import { TypeConge } from "./typeconge";

export interface Gestiondemande {
    matriculeP:string;
    nom:String;
    prenom:String;
    departement:String;
    typeConge:TypeConge;
    dateDebut:Date;
    dateFin:Date;
    duree:number;
    statut:string;
    Cause:string;
    datedemande:Date;
    soldeConge:number;

 
    
}
