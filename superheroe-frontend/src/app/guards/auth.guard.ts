import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private router = inject(Router);

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    // Validación estricta del token físico en el navegador
    if (token && token !== 'undefined' && token !== null) {
      return true; // Token válido: permite el acceso
    }

    // Intento de acceso inválido: Redirección forzada al Login
    this.router.navigate(['/login']);
    return false;
  }
}
