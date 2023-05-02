import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable ,forkJoin} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetProfile } from './get-profile';
import { GetConge } from './get-conge';
import { Gestiondemande } from './gestiondemande';
import { GetAutorisation } from './get-autorisation';
import { GetService } from './get-service';


const AUTH_API = 'http://localhost:8030/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private baseUrl="http://localhost:8030/api/auth/signup"
  private baseUrl2 = 'http://localhost:8030/api/user/DemandeConge'
  private baseUrl3 = 'http://localhost:8030/api/user/ADD'
  private baseUrl4 ='http://localhost:8030/api/user'
  private baseUrl5 ='http://localhost:8030/api/gestionS/getAll'
  private baseUrl6 ='http://localhost:8030/api/gestionS/add'
  private baseUrl7 = 'http://localhost:8030/api/gestionS'
  private baseUrl8 ='http://localhost:8030/api/user/getAllp'

  
  
  this: any;
  constructor(private httpClient:HttpClient ,private http:HttpClient ) { }

  DeleteService(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl7}/delete/${id}`);
  }

  DeleteEmploye(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl4}/Delete/${id}`);
  }


  
  
  registerUser(fg :FormGroup):Observable<object>{
    console.log(fg)
    return this.httpClient.post(`${this.baseUrl}`,fg );

  }

  addService(nn:FormGroup):Observable<object>{
    console.log(nn)
    return this.httpClient.post(`${this.baseUrl6}`,nn);
  }

 /* Ajoutservice(fg :FormGroup):Observable<object>{
    console.log(fg)
    return this.httpClient.post(`${this.baseUrl6}`,fg );


  }*/

  newlogin(matriculeP: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin',  {
      matriculeP: matriculeP,
      password: password,
    }, httpOptions);
  }

  EnvoyerConge(fg: FormGroup):Observable<object>{
    console.log(fg)
    return this.httpClient.post(`${this.baseUrl2}`,fg );

  }
  EnvoyerAutorisation(fg: FormGroup):Observable<object>{
    console.log(fg)
    return this.httpClient.post(`${this.baseUrl3}`,fg );
  }
  getIdPersonnelFromDatabase0(matriculeP: string): Observable<any> {
    return this.http.get(`${this.baseUrl4}/getId/${matriculeP}`);
  }
  getProfile(matriculeP: string): Observable<GetProfile> {
    return this.http.get<GetProfile>(`${this.baseUrl4}/gett/${matriculeP}`);
  }
  getsolde(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl4}/get/${id}`);

}
getconge(matriculeP: string): Observable<GetConge[]> {
  return this.http.get<GetConge[]>(`${this.baseUrl4}/getmesconges/${matriculeP}`);
}

getmesautorisations(matriculeP: string): Observable<GetAutorisation[]> {
  console.log(matriculeP)
  return this.http.get<GetAutorisation[]>(`${this.baseUrl4}/getmesautorisations/${matriculeP}`);
}

gestiondemande(matriculeP: string): Observable<[Gestiondemande[], Gestiondemande[]]> {
  const getAllp$ = this.http.get<Gestiondemande[]>(`${this.baseUrl4}/getAllp`);
  const getAllc$ = this.http.get<Gestiondemande[]>(`${this.baseUrl4}/getAllc`);
  return forkJoin([getAllp$, getAllc$]);
}

getService(idService : string):Observable<GetService[]>{
  console.log(idService)
  return this.http.get<GetService[]>(`${this.baseUrl5}`);
  }

  getPersonnel(idEmploye : string):Observable<GetProfile[]>{
    console.log(idEmploye)
    return this.http.get<GetProfile[]>(`${this.baseUrl8}`);
    }
}

