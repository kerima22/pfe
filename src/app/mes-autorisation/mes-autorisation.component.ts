import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TokenStoargeService } from '../token-storage.service';
import { GetAutorisation } from '../get-autorisation';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mes-autorisation',
  templateUrl: './mes-autorisation.component.html',
  styleUrls: ['./mes-autorisation.component.css']
})
export class MesAutorisationComponent implements OnInit {
  autorisation:GetAutorisation[];
  fg:FormGroup;

  constructor(private connexionservice:ConnexionService , private tokenStorage:TokenStoargeService) { }

  ngOnInit() {
    const matriculeP = this.tokenStorage.getUser().matriculeP;
     this.getmesautorisations(matriculeP); 
     console.log(this.autorisation)
}

getmesautorisations(matriculeP:string) {
  this.connexionservice.getmesautorisations(matriculeP)
    .subscribe(autorisation => this.autorisation = autorisation
      
      
      ); 
}
  }


