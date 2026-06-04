import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(HotToastService);

  loginData = {
    email: '',
    password: ''
  };

  onLogin() {
    // Validación visual previa
    if (!this.loginData.email || !this.loginData.password) {
      this.toast.error('Por favor, llena todos los campos.');
      return;
    }

    // Hacemos la petición real al servidor
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        console.log('Respuesta completa del servidor:', res);

        // Extraemos el nombre devuelto por tu endpoint de sesión
        const nombreReal = res.user?.nombre || res.nombre || 'Usuario';

        this.toast.success(`¡Bienvenido, ${nombreReal}! 🦸‍♂️`);

        // SÓLO si la respuesta es correcta, redirigimos al catálogo
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error('Error devuelto por el servidor:', err);
        this.toast.error('Error: Verifica tus credenciales. Usuario o contraseña incorrectos.');
      }
    });
  }
}
