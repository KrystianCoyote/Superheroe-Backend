import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AddHeroComponent } from './pages/add-hero/add-hero';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // 1. Rutas públicas reales
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, // Corregido: cambiado 'user-registration' por 'register'

  // 2. Rutas protegidas por el Guardián de Autenticación
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  { path: 'add-hero', component: AddHeroComponent, canActivate: [AuthGuard] },
  { path: 'favoritos', component: FavoritesComponent, canActivate: [AuthGuard] },

  // 3. Redirecciones por defecto seguras (Mandan a login si no hay sesión)
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }, // Corregido: manda a login en lugar de catalog para evitar bucles del Guard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
