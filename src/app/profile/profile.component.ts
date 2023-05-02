import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { GetProfile } from '../get-profile';
import { TokenStoargeService } from '../token-storage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    profile:GetProfile;
    fg:FormGroup;

    constructor(private connexionservice :ConnexionService , private tokenstorage:TokenStoargeService, private fb:FormBuilder) { }

    ngOnInit() 
    { 
        this.fg=this.fb.group({
            solde: [''], 
    })
        const matriculeP = this.tokenstorage.getUser().matriculeP;
        this.getDemandes(matriculeP);
        /*this.connexionservice.getIdPersonnelFromDatabase0(matriculeP).subscribe(data => {
            const soldee=  this.connexionservice.getsolde(data)});
            this.fg.patchValue({soldee})*/
    
} getDemandes(matriculeP: string) {
        this.connexionservice.getProfile(matriculeP)
          .subscribe(profile => this.profile = profile);
      }
     
    }

  
