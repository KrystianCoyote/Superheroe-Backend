# Superheroes Backend API 
# Proyecto de Krystian García 23040132

Este es el backend para la aplicación de superhéroes, desarrollado con **Node.js**, **Express**, **TypeScript** y **PostgreSQL**.

##  Instalación y Configuración
**aseguráte de configurar el archivo ".env" y "knexfile.ts" respecto a tu DB y Password**

1. **Clonar el repositorio (todavía no terminado):**
```bash
git clone <url>
cd Superheroes-backend
```

2. **Instalar dependencias (asegurate de tener NodeJS y PgAdmin Activo con su respectivo DB):**
```bash
npm install
```

3. **Configurar el entorno:**
Crea un archivo `.env` en la raíz y añade:
```env
DATABASE_URL=postgres://usuario:password@localhost:5432/superheroedb
JWT_SECRET=tu_llave_maestra
PORT=3000
```

4. **Correr migraciones y seeds:**
```bash
npx knex migrate:latest
npm run seed
```

5. **Iniciar el servidor:**
```bash
npm run dev
```

## 🛠 Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registro de usuario.
- `POST /api/auth/login` - Inicio de sesión (obtiene Token).
- `GET /api/auth/profile` - Perfil del usuario (requiere Token).

### Héroes
- `GET /api/heroes/catalog` - Lista completa de héroes.
- `GET /api/heroes/catalog/:id` - Detalle de un héroe.
- `GET /api/heroes/favorites` - Ver mis favoritos (requiere Token).
- `POST /api/heroes/favorites` - Agregar favorito (requiere Token).
- `DELETE /api/heroes/favorites/:heroId` - Eliminar favorito (requiere Token).

## 🧰 Tecnologías Usadas
- **Knex.js & Objection.js** (Query Builder y ORM)
- **PostgreSQL** (Base de datos)
- **JWT** (Autenticación)
- **Bcryptjs** (Cifrado de contraseñas)
- **Morgan** (Logging)