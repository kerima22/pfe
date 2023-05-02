import { Component, OnInit } from '@angular/core';
import { GetService } from '../get-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStoargeService } from '../token-storage.service';
import { GetProfile } from '../get-profile';

@Component({
  selector: 'app-gestion-personnel',
  templateUrl: './gestion-personnel.component.html',
  styleUrls: ['./gestion-personnel.component.css']
})
export class GestionPersonnelComponent implements OnInit {nn:FormGroup;
  services:GetService[];
  idService:number;
  service:GetService;
  personnels:GetProfile[];
  fg:FormGroup;
  personnel:GetProfile;
  
  
  
  
  constructor(private connexionservice:ConnexionService, private fb :FormBuilder, private modalService: NgbModal ,private tokenStorage:TokenStoargeService) { }
content:any;
  
      
     

        ngOnInit() {
          this.fg=this.fb.group({
            nom:["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], 
            prenom:["",[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], 
            departement: ['', Validators.required],
            poste: ['', Validators.required],   
            numTel:["", [Validators.required, Validators.pattern('^\\d{8}$')]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            roles: ['2', Validators.required], 
          
          
          })

      
    
     
     const idEmploye = this.tokenStorage.getUser().matriculeP;
     this.getPersonnel(idEmploye); }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('IdEmploye', form.value.idEmploye);
    console.log('matricule', form.value.matriculeP);
  }

  getPersonnel(idEmploye:string) {
    this.connexionservice.getPersonnel(idEmploye)
      .subscribe(personnel => this.personnels = personnel); 
  }


  


  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Traitement à effectuer lors de la fermeture de la fenêtre modale
    }, (reason) => {
      // Traitement à effectuer si la fenêtre modale est fermée avec le bouton "Cancel"
    });
  }

  openn(contentt) {
    this.modalService.open(contentt, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Traitement à effectuer lors de la fermeture de la fenêtre modale
    }, (reason) => {
      // Traitement à effectuer si la fenêtre modale est fermée avec le bouton "Cancel"
    });
  }

  closeModal() {
    this.modalService.dismissAll('Cross click');
  }

  /*registerservice(){
    this.connexionservice.Ajoutservice(this.fg.value).subscribe(data=>{
    if(this.fg.valid){
      this.connexionservice.Ajoutservice(this.fg.value)
      alert("Success")
     }else{
      alert("echec")
      console.log("is not valid")
    }
   
})
  
  }*/
  addService(){
    if(this.nn.valid){
      this.connexionservice.addService(this.nn.value).subscribe(data=>{
        alert("jawi fesfes")
        window.location.reload();
      });
    } else {
      alert("Les informations saisies ne sont pas valides. Veuillez les corriger.")
    }
  }
  

  open1(content,personnel: GetProfile) {
    console.log(this.personnel);
    this.personnel = personnel;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Traitement à effectuer lors de la fermeture de la fenêtre modale
    //  const modalBackdrop = document.querySelector('.modal-backdrop');
//modalBackdrop.classList.remove('fade', 'show');

    }, (reason) => {
      // Traitement à effectuer si la fenêtre modale est fermée avec le bouton "Cancel"
    });
  }

  deleteEmploye(id: number): void {
    this.connexionservice.DeleteEmploye(id)
      .subscribe(
        data => {
          console.log('Employé supprimé avec succès');
          window.location.reload();
        },
        error => {
          console.error('Erreur lors de la suppression dEmployé', error);
          // Ajouter votre code pour gérer l'erreur ici
          window.location.reload();
        }
      );
  }



}


  

