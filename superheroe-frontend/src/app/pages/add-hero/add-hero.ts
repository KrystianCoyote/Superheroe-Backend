import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-hero.html',
  styleUrl: './add-hero.scss'
})
export class AddHeroComponent {
  private heroService = inject(HeroService);
  private toast = inject(HotToastService);
  private router = inject(Router);

  // Modelo del objeto héroe optimizado según lo que pide el documento
  public nuevoHeroe = {
    nombre: '',
    poder: '',
    imagen_url: ''
  };

  guardarHeroe(): void {
    if (!this.nuevoHeroe.nombre || !this.nuevoHeroe.poder) {
      this.toast.error('El nombre y el poder son obligatorios.');
      return;
    }

    // Si dejas el campo vacío, se guarda con el Placeholder estándar
    if (!this.nuevoHeroe.imagen_url) {
      this.nuevoHeroe.imagen_url = 'Placeholder.png';
    }

    this.heroService.createHero(this.nuevoHeroe).subscribe({
      next: () => {
        this.toast.success('¡Superhéroe registrado con éxito! 🦸‍♂️');
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.error(err);
        this.toast.error('Error al registrar el superhéroe.');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/catalog']);
  }
}
