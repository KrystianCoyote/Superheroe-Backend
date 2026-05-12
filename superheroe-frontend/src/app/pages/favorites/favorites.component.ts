import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss' // Asegúrate de crear este archivo aunque esté vacío
})
export class FavoritesComponent implements OnInit {
  private favService = inject(FavoritesService);
  private toast = inject(HotToastService);

  public heroes = signal<any[]>([]);

  // ESTO ES LO QUE TE FALTABA:
  ngOnInit(): void {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.favService.getFavorites().subscribe({
      next: (data) => this.heroes.set(data),
      error: () => this.toast.error('Error al cargar favoritos')
    });
  }

  getCleanName(name: string): string {
    return name ? name.split(' (')[0] : '';
  }

  eliminarFavorito(id: number) {
    this.favService.removeFavorite(id).subscribe({
      next: () => {
        this.toast.success('Héroe eliminado');
        this.cargarFavoritos();
      }
    });
  }
}
