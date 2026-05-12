# 🦸‍♂️ Superheroe App - Frontend

Este proyecto es la interfaz de usuario para la aplicación de gestión de Superhéroes. Fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 21.2.10.

---

## 🚀 Características Principales

* **Autenticación:** Sistema de inicio de sesión y registro con protección de rutas (Auth Guards).
* **Catálogo de Héroes:** Visualización dinámica de superhéroes consumidos desde una API REST.
* **Mis Favoritos:** Interfaz para guardar y gestionar héroes, utilizando `Signals` para una reactividad instantánea.
* **Notificaciones:** Feedback visual interactivo mediante `@ngneat/hot-toast`.

---

## 🛠️ Tecnologías Utilizadas

* **Framework:** Angular 21 (Standalone Components).
* **Estilos:** SCSS modular.
* **Estado:** Signals nativos de Angular.
* **Peticiones HTTP:** `HttpClient` para conexión con el backend Node.js.

---

## ⚙️ Servidor de Desarrollo

Para iniciar el servidor local, asegúrate de estar dentro de la carpeta `superheroe-frontend` y ejecuta:

```bash
npm install
ng serve
```

Una vez que el servidor esté corriendo, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques algún archivo fuente.

*(Nota: Asegúrate de tener el backend corriendo en su respectivo puerto para que el catálogo y el login funcionen correctamente).*

---

## 🏗️ Generación de Código (Scaffolding)

Angular CLI incluye potentes herramientas de generación. Para crear un nuevo componente, ejecuta:

```bash
ng generate component nombre-del-componente
```

Para ver la lista completa de esquemas disponibles (como `services`, `directives`, o `pipes`), ejecuta:

```bash
ng generate --help
```

---

## 📦 Construcción (Build)

Para compilar el proyecto y prepararlo para producción, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y guardará los archivos resultantes en el directorio `dist/`. La compilación de producción optimiza la aplicación para mejorar el rendimiento y la velocidad de carga.

---

## 🧪 Pruebas Unitarias

Para ejecutar las pruebas unitarias con el test runner configurado (como Vitest o Karma), utiliza el siguiente comando:

```bash
ng test
```

---

## 📚 Recursos Adicionales

Para obtener más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página oficial de [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
