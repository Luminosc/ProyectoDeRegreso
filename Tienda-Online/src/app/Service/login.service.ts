import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { error } from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string|null = null;

  constructor(private router: Router, private FirebaseService: FirebaseService) { }

  login(email:string, password: string){
    const auth = this.FirebaseService.auth;
    signInWithEmailAndPassword(auth,email,password).then(()=>
    {
      auth.currentUser?.getIdToken().then((token) =>{
        this.token = token;
        this.router.navigate(['/']);
      })
      }).catch((error)=>{
        console.error('Error al iniciar sesión: ', error);
    });
  }

  getIdToken(){
    return this.token;
  }

  //Verificación de que el usuario esta autenticado
  isAutenticado(){
    return this.token != null
  }

  //Metodo para cerrar sesión
  logout(){
    const auth = this.FirebaseService.auth;
    auth.signOut().then(()=>{
      this.token = null;
      this.router.navigate(['login']);
    }).catch((error)=>console.error('Error de login',error));
  }
}
