import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private router = inject(Router);

  canActivate(): boolean {
    const token = localStorage.getItem('token');

    // Validación estricta del token físico en el navegador
    if (token && token !== 'undefined' && token !== null) {
      return true; // Token válido: el usuario puede ver la ruta protegida
    }

    // Intento de acceso inválido: Redirección forzada
    this.toastForzado();
    this.router.navigate(['/login']);
    return false;
  }

  // Método opcional por si tienes inyectado el toast aquí, si no, puedes remover esta línea
  private toastForzado() {
    console.warn('Acceso denegado: No se encontró un token válido de sesión.');
  }
}
