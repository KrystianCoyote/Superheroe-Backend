import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class CatalogComponent implements OnInit {
  private favService = inject(FavoritesService);
  private toast = inject(HotToastService);

  public heroes = signal<any[]>([]);

  ngOnInit(): void {
    this.cargarCatalogo();
    // Cargamos favoritos para marcar los botones correctamente
    this.favService.getFavorites().subscribe();
  }

  cargarCatalogo() {
    this.favService.getCatalog().subscribe({
      next: (data) => this.heroes.set(data),
      error: () => this.toast.error('Error al conectar con el servidor')
    });
  }

  // Comprueba si el héroe ya está en la lista de favoritos
  isFavorite(heroId: number): boolean {
    return this.favService.favorites().some(f => f.id === heroId);
  }

  getCleanName(name: string): string {
    return name ? name.split(' (')[0] : '';
  }

  addFavorite(heroId: number) {
    if (this.isFavorite(heroId)) return; // Evita peticiones dobles

    this.favService.addFavorite(heroId).subscribe({
      next: () => this.toast.success('¡Héroe añadido! ⭐'),
      error: () => this.toast.error('Error al añadir')
    });
  }
}
