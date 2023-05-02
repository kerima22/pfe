import { TypeConge } from "./typeconge";

export interface GetConge {
    idConge:number;
    matriculeP:string;
    dateDebut:Date;
    dateFin:Date;
    duree:number;
    statut:string;
    Cause:string;
    datedemande:Date;
    soldeConge:number;
    typeconge:TypeConge;
}
