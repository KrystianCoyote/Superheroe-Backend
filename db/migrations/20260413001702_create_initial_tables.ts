import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  // 1. Limpieza por seguridad
  await knex.schema.dropTableIfExists('favorites');
  await knex.schema.dropTableIfExists('catsuperheroe');
  await knex.schema.dropTableIfExists('users');

  // 2. Crear tabla de Usuarios
  await knex.schema.createTable('users', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('nombre', 100).notNullable();
    table.string('email', 100).notNullable().unique();
    table.string('password', 255).notNullable();
    table.string('role', 50).defaultTo('user');
  });

  // 3. Crear tabla de Catálogo de Superhéroes
  await knex.schema.createTable('catsuperheroe', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('nombre', 100).notNullable().unique();
    table.string('poder', 255).notNullable();
    table.string('fortaleza', 255);
    table.string('resistencia', 255);
    table.string('debilidad', 255);
    table.string('imagen_url', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

  // 4. Crear tabla de Favoritos (Relación)
  await knex.schema.createTable('favorites', (table: Knex.TableBuilder) => {
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.integer('superheroe_id').unsigned().notNullable().references('id').inTable('catsuperheroe').onDelete('CASCADE');
    table.primary(['user_id', 'superheroe_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('favorites');
  await knex.schema.dropTable('catsuperheroe');
  await knex.schema.dropTable('users');
}