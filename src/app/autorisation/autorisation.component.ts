import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from '../connexion.service';




@Component({
  selector: 'app-autorisation',
  templateUrl: './autorisation.component.html',
  styleUrls: ['./autorisation.component.css']
})
export class AutorisationComponent implements OnInit {
  fg : FormGroup;
  duree: any

  constructor(private fb:FormBuilder , private connexionservice:ConnexionService) { }

  ngOnInit() {
    this.fg=this.fb.group({
      heureSortie: ['', Validators.required],  
      heureRetour: ['', Validators.required], 
      Motif: ['', Validators.required],
      duree: ['', Validators.required],
       
  },{ validator: this.heureRetourSuperieureAHeureSortie });








}






heureRetourSuperieureAHeureSortie(group: FormGroup): { [key: string]: any } {
  const heureSortieControl = group.get('heureSortie');
  const heureRetourControl = group.get('heureRetour');

  if (heureSortieControl.value && heureRetourControl.value) {
    const heureSortie = new Date(heureSortieControl.value);
    const heureRetour = new Date(heureRetourControl.value);
    if (heureRetour <= heureSortie) {
      return { heureRetourInvalide: true };
    }
  }return null;}

onSubmit(form: FormGroup) {
  console.log('Valid?', form.valid); // true or false
  console.log('Heure de Sortie', form.value.HeureSortie);
  console.log('Heure de Retour', form.value.HeureRetour);
  console.log('Motif de l autorisation', form.value.Motif);
  console.log('Durée', form.value.duree);
  
  /*const heureSortie: Date = parseISO(form.value.HeureSortie);
  const heureRetour: Date = parseISO(form.value.HeureRetour);

  // Calculate the duration between HeureSortie and HeureRetour in seconds
  const durationInSeconds: number = differenceInSeconds(heureRetour, heureSortie);

  // Convert the duration to a Time object
  const duree: Time = new Time(durationInSeconds * 1000);

  console.log('Durée', duree);*/

}

DemandeAutorisation(){
 console.log(this.fg);

  const HeureSortie = this.fg.get('heureRetour').value;
  const HeureRetour =this.fg.get('heureSortie').value;
  this.duree=(HeureRetour  - HeureSortie); 
   console.log("uuuuuuu",HeureRetour)
   console.log("uuuuuuu",HeureSortie)

  console.log("eeeeeeee",this.duree)
  this.fg.patchValue({
    duree:this.duree})




  
  console.log(this.fg)
  this.connexionservice.EnvoyerAutorisation(this.fg.value).subscribe(data=>{
  if(this.fg.valid){
    this.connexionservice.EnvoyerAutorisation(this.fg.value)
    console.log(this.fg.value)
    alert(" demande d'autorisation envoyée")

  }else{
    alert("Echec de l'envoie")
    console.log("is not valid")
  }
 
})
 /* // Vérifier que les valeurs de HeureSortie et HeureRetour sont valides
  if (isNaN(HeureSortie.getTime()) || isNaN(HeureRetour.getTime())) {
    console.log("HeureSortie ou HeureRetour non valide");
    return;
  }

  const diffMs = (HeureRetour.getTime() - HeureSortie.getTime()); // différence en millisecondes
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // différence en minutes arrondie
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // différence en heures

  // Concaténer les valeurs de diffHrs et diffMins en une chaîne de caractères
  const duree = diffHrs.toString() + "h " + diffMins.toString() + "min";
  console.log(duree);

  // Patcher la valeur de duree dans le formulaire
  const dureeEnMinutes = diffHrs * 60 + diffMins;
  this.fg.patchValue({
    duree: parseInt(dureeEnMinutes.toString())
  });*/


  

}

}



