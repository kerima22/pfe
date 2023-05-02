import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TokenStoargeService } from '../token-storage.service';
import { Gestiondemande } from '../gestiondemande';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  demandes: Gestiondemande[] = [];
  conges: any[] = [];

  constructor(private connexionservice:ConnexionService , private tokenStorage:TokenStoargeService) { }

  ngOnInit() {}
    /*const matriculeP = this.tokenStorage.getUser().matriculeP;
    this.gestiondemande(matriculeP); 
  }

  gestiondemande(matriculeP: string) {
    this.connexionservice.gestiondemande(matriculeP)
      .subscribe(demandes =>this.demandes = demandes);
      };*/
  }

