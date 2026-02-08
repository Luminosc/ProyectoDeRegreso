import { LoginService } from './Service/login.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private LoginService:LoginService){}
isAutenticado() {
  return this.LoginService.isAutenticado();
}
salir() {
  this.LoginService.logout();
}
  title = 'Tienda-Online';
}
