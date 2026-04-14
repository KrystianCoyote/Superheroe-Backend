import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Model } from 'objection';
import knex from './database';
import authRoutes from './routes/auth.routes';
import heroRoutes from './routes/hero.routes';

// 3. VINCULACIÓN: Aquí le decimos a Objection que use tu conexión de Knex
Model.knex(knex);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/heroes', heroRoutes);

// Middleware para capturar errores 404 (Rutas no encontradas)
app.use((req, res) => {
  res.status(404).json({ message: "La ruta solicitada no existe." });
});

// Middleware global de errores
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: {
      message: err.message || "Error interno del servidor",
      status: status
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});