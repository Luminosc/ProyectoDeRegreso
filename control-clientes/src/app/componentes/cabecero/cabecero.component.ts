import { LoginService } from './../../servicios/login.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
  isLoggedIn: boolean = false;
  loggedInUser: string|null = null;

  constructor(private LoginService: LoginService,
    private router: Router
  ){}

  ngOnInit(){
    this.LoginService.getAuthState().subscribe(usuario =>{
      if(usuario){
        this.isLoggedIn = true;
        this.loggedInUser = usuario.email;
      }else{
        this.isLoggedIn = false;
      }
    });
  }

  logOut(){
    this.LoginService.logout();

    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    
  }
}
