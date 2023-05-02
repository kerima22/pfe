import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from '../connexion.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    fg : FormGroup;
  body:any

    constructor(private fb:FormBuilder , private connexionservice:ConnexionService){}
   

    
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

      
    }

    onSubmit(form: FormGroup) {
        console.log('Valid?', form.valid); // true or false
        console.log('Nom', form.value.nom);
        console.log('Prénom', form.value.prenom);
        console.log('Departement', form.value.departement);
        console.log('Poste', form.value.poste);
        console.log('Numéro de téléphone', form.value.numTel);
        console.log('Email', form.value.email);
        console.log('Mot de passe', form.value.password);
        
}
register(){
    this.connexionservice.registerUser(this.fg.value).subscribe(data=>{
this.body=data
console.log(this.body.matriculeP)
    if(this.fg.valid){
      this.connexionservice.registerUser(this.fg.value)
      alert("Success , Votre matricule est : "+this.body.matriculeP)

    }else{
      alert("echec")
      console.log("is not valid")
    }
   
})
  
  }
        

   
  }
