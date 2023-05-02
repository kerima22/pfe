import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { GetConge } from '../get-conge';
import { TokenStoargeService } from '../token-storage.service';


@Component({
  selector: 'app-mesconges',
  templateUrl: './mesconges.component.html',
  styleUrls: ['./mesconges.component.css']
})
export class MescongesComponent implements OnInit {
  conge:GetConge[];
  conges: any[] = []; // Tableau des congés récupérés depuis l'API
  totalSolde: number = 0; // Solde total de tous les congés
  

  constructor(private connexionservice:ConnexionService , private tokenStorage:TokenStoargeService) {
    
   }

  ngOnInit(){
    const matriculeP = this.tokenStorage.getUser().matriculeP;
     this.getconge(matriculeP); 
}


  getconge(matriculeP:string) {
    this.connexionservice.getconge(matriculeP)
      .subscribe(conge => this.conge = conge); 
  }

 

}
