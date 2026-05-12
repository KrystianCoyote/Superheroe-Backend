import { Request, Response } from 'express';
import knex from '../database';

// 1. Obtener catálogo (con el límite de 12 que pusiste, muy bien pensado)
export const getCatalog = async (req: Request, res: Response) => {
  try {
    const heroes = await knex('catsuperheroe').limit(12).orderBy('nombre', 'asc');
    res.json(heroes);
  } catch (error) {
    res.status(500).json({ error: "Error interno al obtener el catálogo." });
  }
};

// 2. Obtener detalle de un solo héroe (Nuevo, útil para ver info específica)
export const getHeroById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const hero = await knex('catsuperheroe').where({ id }).first();
    if (!hero) {
      return res.status(404).json({ message: "Héroe no encontrado" });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el detalle del héroe." });
  }
};

// 3. Agregar a favoritos
export const addFavorite = async (req: any, res: Response) => {
  const userId = req.userId;
  const { heroId } = req.body;

  if (!heroId) return res.status(400).json({ error: "Falta el heroId" });

  try {
    await knex('favorites').insert({ user_id: userId, superheroe_id: heroId });
    res.json({ message: "Héroe agregado a favoritos" });
  } catch (error) {
    // Si ya existe la combinación user_id + superheroe_id, PostgreSQL lanzará error
    res.status(400).json({ error: "El héroe ya está en favoritos o no existe." });
  }
};

// 4. Obtener mis favoritos (con Join para traer los nombres y fotos)
export const getFavorites = async (req: any, res: Response) => {
  const userId = req.userId;
  try {
    const favorites = await knex('favorites')
      .join('catsuperheroe', 'favorites.superheroe_id', '=', 'catsuperheroe.id')
      .where('favorites.user_id', userId)
      .select('catsuperheroe.*');
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener favoritos." });
  }
};

// 5. Eliminar de favoritos
export const deleteFavorite = async (req: any, res: Response) => {
  const userId = req.userId;
  const { heroId } = req.params;
  try {
    const result = await knex('favorites')
      .where({ user_id: userId, superheroe_id: heroId })
      .del();

    if (result === 0) {
      return res.status(404).json({ message: "No se encontró el favorito para eliminar." });
    }

    res.json({ message: "Héroe eliminado de favoritos" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el favorito." });
  }
};