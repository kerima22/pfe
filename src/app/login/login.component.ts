import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';
import { TokenStoargeService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private fb:FormBuilder, private connexionservice:ConnexionService, private tokenStorage: TokenStoargeService , private router: Router) { }

  
  ngOnInit() {
    this.fg=this.fb.group({
        matriculeP: ['', Validators.required],  
        password: ['', Validators.required], 
    
})
  }
  onSubmit(fg: FormGroup): void {
    console.log('matriculeP', fg.value.matriculeP);
    console.log('password', fg.value.password);
}
  newlogin(matriculeP: string, password: string): void {
    this.connexionservice.newlogin(matriculeP, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
  
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        alert('connecte');
        this.router.navigate(["/conge"])
  
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        if (err.status === 401) {
          alert('Échec de la connexion : nom d\'utilisateur ou mot de passe incorrect.');
        }
      }
    );
  }
  
  reloadPage(): void {
    window.location.reload();
  }

}
