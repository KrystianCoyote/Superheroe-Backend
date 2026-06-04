import { Router } from 'express';
import { getCatalog, getHeroById, addFavorite, getFavorites, deleteFavorite, createHero } from '../controllers/hero.controller'; // Añadido createHero
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.get('/catalog', getCatalog);
router.get('/catalog/:id', getHeroById);
router.get('/favorites', verifyToken, getFavorites);
router.post('/favorites', verifyToken, addFavorite);
router.delete('/favorites/:heroId', verifyToken, deleteFavorite);

// Recibe la petición de creación desde el formulario
router.post('/', verifyToken, createHero);

export default router;