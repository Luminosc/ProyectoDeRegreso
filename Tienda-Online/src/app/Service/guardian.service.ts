import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import {CanActivate,} from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardianService implements CanActivate {
  constructor(
    private LoginService: LoginService,
    private router: Router,
  ) {}
  //Verificamos de estar autenticado antes que activar la ruta
  canActivate(): boolean {
    if (this.LoginService.isAutenticado()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
