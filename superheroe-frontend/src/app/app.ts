import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Cambiado a public para que el HTML pueda leer sus métodos sin restricciones
  public authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    // Usamos el logout centralizado de tu servicio que limpia el token correctamente
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
