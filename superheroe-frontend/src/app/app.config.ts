import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { provideHttpClient, withInterceptors } from '@angular/common/http'; // Añadimos withInterceptors
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './services/auth.interceptor'; // Importa tu interceptor

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Configuración avanzada de HttpClient para usar el Interceptor
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideAnimations(),
    provideHotToastConfig()
  ]
};
