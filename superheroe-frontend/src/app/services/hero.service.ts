import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private http = inject(HttpClient);
  private apiUrl = '/api/heroes'; // Usamos el prefijo del proxy

  // Obtener todos los héroes (para el catálogo)
  getHeroes() {
    return this.http.get<any[]>(`${this.apiUrl}/catalog`);
  }

  // Obtener solo los favoritos del usuario logueado
  getFavorites() {
    return this.http.get<any[]>(`${this.apiUrl}/favorites`);
  }

  // Guardar un héroe como favorito
  addFavorite(heroId: number) {
    return this.http.post(`${this.apiUrl}/favorites`, { heroId });
  }

  // Eliminar de favoritos
  deleteFavorite(heroId: number) {
    return this.http.delete(`${this.apiUrl}/favorites/${heroId}`);
  }
}
