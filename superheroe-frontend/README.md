# 🦸‍♂️ Superheroe Fullstack App (UAdeO)

Este repositorio contiene una aplicación completa para la gestión de superhéroes, permitiendo a los usuarios registrarse, explorar un catálogo y gestionar sus héroes favoritos en tiempo real.

---

## 📂 Estructura del Proyecto

* **Raíz (`/`)**: Servidor Backend (Node.js + TypeScript + Knex).
* **`/superheroe-frontend`**: Frontend (Angular 21 + Signals).

---

## 🛠️ 1. Configuración del Backend (Servidor)

Abre una terminal en la carpeta raíz del proyecto y realiza los siguientes pasos:

### A. Instalar Dependencias
```bash
npm install
```

### B. Configurar Variables de Entorno
Crea un archivo llamado `.env` en la raíz y configura tus credenciales de base de datos:
```env
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=superheroe_db
JWT_SECRET=una_clave_secreta_muy_segura
```

### C. Preparar la Base de Datos
Ejecuta las migraciones y los datos de prueba (seeds) en orden:
```bash
npx knex migrate:latest
npx knex seed:run
```

### D. Iniciar el Servidor
```bash
npm run dev
```
*El servidor correrá por defecto en http://localhost:3000.*

---

## 🎨 2. Configuración del Frontend (Angular)

Abre una **nueva terminal** (sin cerrar la del backend) y entra a la carpeta del frontend:

### A. Entrar a la carpeta e instalar dependencias
```bash
cd superheroe-frontend
npm install
```

### B. Iniciar la Aplicación
```bash
ng serve
```

### C. Acceso al Navegador
Navega a la siguiente dirección:
👉 **http://localhost:4200/**

---

## 🔧 3. Comandos Útiles de Angular CLI

Si necesitas expandir el proyecto, usa estos comandos dentro de la carpeta `superheroe-frontend`:

* **Crear Componente:** `ng generate component nombre-componente`
* **Compilar para Producción:** `ng build`
* **Ejecutar Pruebas:** `ng test`

---

## 🚀 4. Guía de Git (Para subir cambios)

Si realizas modificaciones y quieres subirlas a tu repositorio:

```bash
git add .
git commit -m "Finalizada integración Fullstack y documentación"
git push origin main
```

---

## 🛡️ Notas Importantes
* **Node_modules:** Nunca subas estas carpetas a GitHub. Asegúrate de que el archivo `.gitignore` las incluya.
* **Orden de ejecución:** Siempre inicia primero el Backend y luego el Frontend para que la aplicación pueda consumir los datos correctamente.
