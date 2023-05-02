import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnexionService } from '../connexion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetService } from '../get-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStoargeService } from '../token-storage.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  nn:FormGroup;
  services:GetService[];
  idService:number;
  service:GetService;
  
  
  
  constructor(private connexionservice:ConnexionService, private fb :FormBuilder, private modalService: NgbModal ,private tokenStorage:TokenStoargeService) { }
content:any;
  
      
     

        ngOnInit(): void {
          this.nn =this.fb.group({
            nomService: [''],
            personnel:  this.fb.group({
              idEmploye: ['']
              
            })
          })

      
    
     
     const idService = this.tokenStorage.getUser().matriculeP;
     this.getService(idService); }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Nom Service', form.value.nomService);
    console.log('matricule', form.value.idEmploye);
  }

  getService(idService:string) {
    this.connexionservice.getService(idService)
      .subscribe(services => this.services = services); 
  }


  
  
  

  // getService(){
   // this.connexionservice.getService()
   // .subscribe(services => this.services = services);
  //} 


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
  

  open1(content,service: GetService) {
    console.log(this.service);
    this.service = service;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Traitement à effectuer lors de la fermeture de la fenêtre modale
    //  const modalBackdrop = document.querySelector('.modal-backdrop');
//modalBackdrop.classList.remove('fade', 'show');

    }, (reason) => {
      // Traitement à effectuer si la fenêtre modale est fermée avec le bouton "Cancel"
    });
  }

  deleteService(id: number): void {
    this.connexionservice.DeleteService(id)
      .subscribe(
        data => {
          console.log('Service supprimé avec succès');
          window.location.reload();
        },
        error => {
          console.error('Erreur lors de la suppression du service', error);
          // Ajouter votre code pour gérer l'erreur ici
          window.location.reload();
        }
      );
  }



}
