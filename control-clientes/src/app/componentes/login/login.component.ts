import { routes } from './../../app.routes';
import { LoginService } from './../../servicios/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string | null = null;
  password: string | null = null;
  mensaje: string | null = null;

  constructor(
    private Router: Router,
    private LoginService: LoginService,
  ) {}
  ngOnInit() {
    this.LoginService.getAuthState().subscribe((usuario) => {
      if (usuario) {
        this.Router.navigate(['/']);
      }
    });
  }
  login() {
    if (this.email && this.password) {
      this.LoginService.login(this.email, this.password)
        .then(() => {
          this.Router.navigate(['/']);
        })
        .catch((error) => {
          this.mensaje = 'Error al hacer Login: ' + error;
        });
    } else {
      this.mensaje = 'Por favor usa un email y un password validos';
    }
  }
}
