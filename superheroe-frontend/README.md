# 🦸‍♂️ Superheroe App - Frontend

Este proyecto es la interfaz de usuario para la aplicación de gestión de Superhéroes. Ha sido desarrollado como una aplicación de página única (SPA) utilizando **Angular 19** con arquitectura moderna basada en componentes autónomos (*Standalone Components*) y reactividad avanzada con *Signals*.

La aplicación se comunica de manera transparente con un backend en Node.js/Express y persiste la información en una base de datos relacional PostgreSQL.

---

## 🚀 Características Principales

* **Autenticación Completa:** Sistema de inicio de sesión y persistencia de sesión a través de tokens JWT, incluyendo un guardián de rutas (`AuthGuard`) para proteger áreas privadas.
* **Catálogo de Héroes Dinámico:** Visualización optimizada del catálogo de personajes registrados en la base de datos con un límite responsivo.
* **Módulo de Alta Automatizado:** Formulario inteligente para el registro de nuevos superhéroes con detección reactiva y placeholders adaptativos para el nombre de archivos de imágenes.
* **Gestión de Favoritos en Tiempo Real:** Interfaz reactiva para añadir o remover superhéroes del catálogo personal utilizando `Signals` nativos de Angular, lo que garantiza una actualización inmediata de la interfaz sin recargar la página.
* **Feedback Visual Interactivo:** Integración global de notificaciones flotantes y amigables mediante `@ngneat/hot-toast` para confirmar el éxito de operaciones (altas, bajas de favoritos, login).

---

## 🛠️ Stack Tecnológico

* **Framework:** Angular 19+ (Standalone Components & Functional Guards).
* **Gestión de Estado:** `Signals` nativos de Angular para un flujo de datos óptimo y reactivo.
* **Estilos y Maquetación:** SCSS estructurado de forma modular (arquitectura limpia y variables CSS).
* **Protocolo de Comunicación:** `HttpClient` configurado con interceptores para inyección automática de cabeceras de autorización.

---

## 📦 Estructura del Código Fuente

El diseño del código del frontend sigue las mejores prácticas y convenciones de Angular:

```text
superheroe-frontend/text
├── src/
│   ├── app/
│   │   ├── guards/          # Guardianes de ruta (AuthGuard)
│   │   ├── pages/           # Componentes de página (Login, Catalog, Add-Hero, Favorites)
│   │   ├── services/        # Servicios de comunicación con API (AuthService, HeroService)
│   │   ├── app.html         # Plantilla base y contenedor principal
│   │   ├── app.routes.ts    # Configuración del enrutamiento SPA
│   │   └── app.ts           # Configuración de inicio (Bootstrap de la aplicación)
│   └── assets/              # Archivos estáticos e imágenes locales (img/heroes)
└── proxy.conf.json         # Configuración del Proxy de desarrollo para evitar problemas de CORS
```

---

## ⚙️ Configuración y Servidor de Desarrollo

### Requisitos Previos
* Tener instalado **Node.js** (versión v18 o superior recomendada).
* Tener el servidor del backend corriendo de manera paralela.

### Instalación de Dependencias
Navega a la carpeta del proyecto frontend e instala los paquetes necesarios:
```bash
cd superheroe-frontend
npm install
```

### Inicialización del Proyecto
Para levantar el servidor de desarrollo local con soporte de proxy para la API, ejecuta:
```bash
npm start
```
*(O bien `ng serve` si estás utilizando la configuración base).*

Una vez que compile correctamente, abre tu navegador web preferido y accede a:
`http://localhost:4200/`

La interfaz cuenta con *Hot Module Replacement* (HMR), por lo que cualquier cambio en los archivos `.ts` o `.html` se verá reflejado automáticamente sin perder el estado actual.

---

## 🏗️ Generación de Código (Scaffolding)

Angular CLI proporciona utilidades automáticas para mantener la coherencia del diseño del código. Para generar nuevos elementos dentro del estándar del proyecto, utiliza:

```bash
# Para generar un nuevo componente standalone
ng generate component pages/nuevo-componente

# Para generar un servicio de lógica de negocio
ng generate service services/nuevo-servicio
```

---

## 🚀 Construcción para Producción (Build)

Para realizar la compilación final optimizada y lista para desplegar en un servidor web de producción, ejecuta:

```bash
ng build
```

Este comando creará un paquete optimizado bajo el directorio `dist/`, aplicando técnicas de *tree-shaking*, minificación de código fuente y empaquetamiento estático para maximizar el rendimiento.

---

## 📚 Recursos Adicionales

* [Documentación Oficial de Angular](https://angular.dev/)
* [Angular Signals Guide](https://angular.dev/guide/signals)
* [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
