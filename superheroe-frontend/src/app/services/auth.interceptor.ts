import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Sacamos el token que guardamos en el login
  const token = localStorage.getItem('token');

  // Si hay un token, clonamos la petición y le ponemos el encabezado de seguridad
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  // Si no hay token, la petición sigue su curso normal
  return next(req);
};
