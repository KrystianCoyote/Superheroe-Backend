import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = '/api/auth';

  // Signal para manejar el estado del usuario de manera reactiva
  public currentUser = signal<any>(null);

  constructor() {
    // Recuperar el usuario guardado al abrir la app o refrescar
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        this.currentUser.set(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(${this.apiUrl}/login, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          
          // Guardamos el nombre que viene del servidor
          const userData = { nombre: response.nombre || response.user?.nombre || 'Usuario' };
          localStorage.setItem('user', JSON.stringify(userData));
          this.currentUser.set(userData);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(${this.apiUrl}/register, userData);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Borrar datos al salir
    this.currentUser.set(null);
  }

  // Método crucial que corrige tu error TS2339 en el AuthGuard
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
