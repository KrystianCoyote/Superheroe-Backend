import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Añadida por seguridad de renderizado
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Incluido CommonModule
  templateUrl: './login.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(HotToastService);

  loginData = {
    email: '',
    password: '',
  };

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      this.toast.error('Por favor, llena todos los campos.');
      return;
    }

    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Respuesta completa del servidor:', res);
        const nombreReal = res.user?.nombre || res.nombre || 'Usuario';
        this.toast.success(`¡Bienvenido, ${nombreReal}! 🦸‍♂️`);
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error('Error devuelto por el servidor:', err);
        this.toast.error('Error: Verifica tus credenciales. Usuario o contraseña incorrectos.');
      },
    });
  }
}
