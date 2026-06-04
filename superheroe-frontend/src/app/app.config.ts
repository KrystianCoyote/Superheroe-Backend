import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHotToastConfig } from '@ngneat/hot-toast';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from './services/auth.interceptor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),

    // 🚀 CORREGIDO: Configuración para mover las alertas a la esquina inferior derecha
    provideHotToastConfig({
      position: 'bottom-right',
      dismissible: true,
      duration: 3500,
    }),
  ],
};
