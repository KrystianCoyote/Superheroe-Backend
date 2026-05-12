import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private http = inject(HttpClient);

  // Este signal guardará tus favoritos para que toda la app lo vea
  public favorites = signal<any[]>([]);

  getCatalog() {
    return this.http.get<any[]>('/api/heroes/catalog');
  }

  getFavorites() {
    return this.http.get<any[]>('/api/heroes/favorites').pipe(
      tap(favs => this.favorites.set(favs)) // Actualiza el signal automáticamente
    );
  }

  addFavorite(heroId: number) {
    return this.http.post('/api/heroes/favorites', { heroId }).pipe(
      tap(() => {
        // Al añadir uno, refrescamos la lista interna
        this.getFavorites().subscribe();
      })
    );
  }

  removeFavorite(heroId: number) {
    return this.http.delete(`/api/heroes/favorites/${heroId}`).pipe(
      tap(() => {
        // Al quitar uno, actualizamos el signal
        const current = this.favorites().filter(f => f.id !== heroId);
        this.favorites.set(current);
      })
    );
  }
}
