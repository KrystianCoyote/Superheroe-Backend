import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = '/api/auth';

  // Signal para manejar el estado del usuario de manera reactiva
  public currentUser = signal<any>(null);

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.currentUser.set(response.user);
        }
      })
    );
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.currentUser.set(null);
  }

  // Método crucial que corrige tu error TS2339 en el AuthGuard
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
