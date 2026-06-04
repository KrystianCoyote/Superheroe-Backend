import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AddHeroComponent } from './pages/add-hero/add-hero'; // Corregido: removido .component
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Rutas públicas
  { path: 'login', component: LoginComponent },
  { path: 'user-registration', component: RegisterComponent },

  // Rutas protegidas por el Guardián de Autenticación
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: 'add-hero', component: AddHeroComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritesComponent, canActivate: [AuthGuard] },

  // Redirecciones por defecto
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
