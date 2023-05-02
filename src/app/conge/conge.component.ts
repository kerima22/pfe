import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { TokenStoargeService } from '../token-storage.service';
import { GetConge } from '../get-conge';


@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  fg : FormGroup;
  duree: number;

  constructor(private fb:FormBuilder , private connexionservice:ConnexionService , private tokenStorage: TokenStoargeService) { }

  ngOnInit() {
    this.fg=this.fb.group({
      dateDebut: ['', Validators.required],  
      dateFin: ['', Validators.required], 
      typeConge: ['', Validators.required],
      duree: ['', Validators.required],
      statut: ['', Validators.required],
      cause: ['', Validators.required],
      datedemande: ['', Validators.required],
      matriculeP:['', Validators.required],
      personnel:this.fb.group({
        idEmploye :['', Validators.required],
      
      })


})

// Affecter la date et l'heure actuelles au champ dateDemande
const now = new Date().getTime(); // obtenir le timeStamp actuel
this.fg.patchValue({
  datedemande: now
});

const matriculeP = this.tokenStorage.getUser().matriculeP;
  this.connexionservice.getIdPersonnelFromDatabase0(matriculeP).subscribe(data => {
    this.fg.patchValue({ personnel: { idEmploye: data } });
  });

  const matricule = this.tokenStorage.getUser().matriculeP;
  this.fg.patchValue({ matriculeP: matricule  });

}
  
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Date de début', form.value.dateDebut);
    console.log('Date de Fin', form.value.dateFin);
    console.log('Type de Congés', form.value.typeConge);
    console.log('Durée', form.value.duree);
    console.log('Statut', form.value.statut);
    console.log('Cause', form.value.Cause);
   
  

}
DemandeConge(){
  console.log(this.fg)
  const dateDebut = new Date(this.fg.get('dateDebut').value);
  const dateFin = new Date(this.fg.get('dateFin').value);
  const timeDiff = Math.abs(dateFin.getTime() - dateDebut.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  this.duree = diffDays;
  console.log(this.duree)
  this.fg.patchValue({
    duree:this.duree
  })
  console.log(this.fg.value)
  this.connexionservice.EnvoyerConge(this.fg.value).subscribe(data=>{
  if(this.fg.valid){
    this.connexionservice.EnvoyerConge(this.fg.value)
    console.log(this.fg.value)
    alert(" demande de congé envoyée")

  }else{
    alert("Echec de l'envoie ")
    console.log("is not valid")
  }
 
})
}
calculateDuration() {
  const dateDebut = new Date(this.fg.get('dateDebut').value);
  const dateFin = new Date(this.fg.get('dateFin').value);
  const timeDiff = Math.abs(dateFin.getTime() - dateDebut.getTime());
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  this.duree = diffDays;
  console.log(this.duree)
}

onDateChange() {
  if (this.fg.get('dateDebut').value && this.fg.get('dateFin').value) {
    this.calculateDuration();
  }

}
/*calculateSoldeConge(personnels: GetConge[]): number {
  let soldeConge = 0;
  for (let i = 0; i < personnels.length; i++) {
    soldeConge += personnels[i].duree;
  }
  if (soldeConge > 30) {
    soldeConge = 30;
  }
  return soldeConge;
}*/


}
