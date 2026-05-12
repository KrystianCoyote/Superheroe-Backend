import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);

  // Signal para saber si el usuario está logueado en cualquier parte de la app
  public currentUser = signal<any>(null);

  // --- MÉTODO DE LOGIN ---
  // auth.service.ts
login(credentials: any) {
  return this.http.post<any>('/api/auth/login', credentials).pipe(
    tap(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        // Aquí guardamos lo que venga del servidor (ajusta según tu respuesta)
        this.currentUser.set(res.user || res);
      }
    })
  );
}

  // --- MÉTODO DE REGISTRO ---
  // Este es el que nos faltaba para completar el documento
  register(userData: any) {
    return this.http.post<any>('/api/auth/register', userData).pipe(
      tap(res => {
        console.log('Usuario registrado con éxito:', res);
      })
    );
  }

  // --- UTILIDADES ---
  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
  }
}
