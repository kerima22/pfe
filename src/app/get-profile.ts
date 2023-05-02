import { Role } from "./role";

export interface GetProfile {
    idEmploye:string;
    matriculeP : string;
    nom:string;
    prenom:string ;
    email: string;
    numTel:string;
    departement:string;
    poste:string;
    role:Role;
    soldeConge:number;
}
