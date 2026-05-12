import { Model } from 'objection';

export class CatSuperheroe extends Model {
  id!: number;
  nombre!: string;
  poder!: string;
  fortaleza!: string;
  resistencia!: string;
  debilidad!: string;
  imagen_url!: string;

  // Define el nombre de la tabla en la DB
  static get tableName() {
    return 'catsuperheroe';
  }

  // Validación de datos
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre', 'poder', 'imagen_url'],
      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1, maxLength: 100 },
        poder: { type: 'string', maxLength: 255 },
        imagen_url: { type: 'string', maxLength: 255 }
      }
    };
  }
}