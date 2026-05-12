import { Router } from 'express';
// Agregamos getHeroById aquí arriba:
import { getCatalog, getHeroById, addFavorite, getFavorites, deleteFavorite } from '../controllers/hero.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.get('/catalog', getCatalog);
router.get('/catalog/:id', getHeroById); // Ahora sí funcionará
router.get('/favorites', verifyToken, getFavorites);
router.post('/favorites', verifyToken, addFavorite);
router.delete('/favorites/:heroId', verifyToken, deleteFavorite);

export default router;