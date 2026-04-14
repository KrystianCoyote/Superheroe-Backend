import { Model } from 'objection';

export class User extends Model {
  id!: number;
  nombre!: string;
  email!: string;
  password!: string;
  role!: string;

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nombre', 'email', 'password'], // Campos obligatorios

      properties: {
        id: { type: 'integer' },
        nombre: { type: 'string', minLength: 1, maxLength: 100 },
        email: { type: 'string', format: 'email', maxLength: 100 },
        password: { type: 'string', minLength: 4 }
      }
    };
  }
}