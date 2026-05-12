import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private toast = inject(HotToastService);

  // Nombres exactos de tu Postman:
  registerData = {
    nombre: '',   // Antes tenías 'username' o 'name'
    email: '',    // Antes tenías 'correo'
    password: ''
  };

  onRegister() {
    this.authService.register(this.registerData).subscribe({
      next: () => {
        this.toast.success('¡Cuenta creada! Ya puedes entrar');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toast.error('Error al crear cuenta');
        console.error('El backend dice:', err.error);
      }
    });
  }
}
