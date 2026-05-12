import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // <--- Añadimos RouterLink
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink], // <--- Lo incluimos aquí
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

  // login.component.ts
onLogin() {
this.router.navigate(['/catalog']);
  this.authService.login(this.loginData).subscribe({
    next: (res) => {
      console.log('Respuesta completa del servidor:', res); // Revisa esto en la consola F12

      const nombreReal = res.user?.nombre || res.nombre || 'Usuario';

      this.toast.success(`¡Bienvenido, ${nombreReal}!`);
      this.router.navigate(['/catalog']);
    },
    error: (err) => {
      this.toast.error('Error: Verifica tus credenciales');
    }
  });
}
}
