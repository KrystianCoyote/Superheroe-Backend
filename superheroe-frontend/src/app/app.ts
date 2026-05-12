import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    localStorage.removeItem('token');
    this.authService.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
