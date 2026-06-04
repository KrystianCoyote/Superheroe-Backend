import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);
  private apiUrl = '/api/heroes'; // Prefijo del proxy

  // Obtener todos los héroes (para el catálogo)
  getHeroes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/catalog`);
  }

  // Obtener solo los favoritos del usuario logueado
  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/favorites`);
  }

  // Guardar un héroe como favorito
  addFavorite(heroId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorites`, { heroId });
  }

  // Corregido: Usa la propiedad heroId requerida por backend (router.delete('/favorites/:heroId'))
  deleteFavorite(heroId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/favorites/${heroId}`);
  }

  // Registra el héroe en el backend mediante un POST a /api/heroes
  createHero(hero: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, hero);
  }
}
