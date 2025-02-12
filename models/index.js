// models/index.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Creem la instància de Sequelize
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || 'mysql',
    dialect: 'mysql',
    logging: false,
  }
);

// Importem les definicions dels models (exportades com a funcions)
import defineCategoria from './categoria.js';
import defineMotocicleta from './motocicleta.js';

// Inicialitzem els models passant la instància de Sequelize
const Categoria = defineCategoria(sequelize);
const Motocicleta = defineMotocicleta(sequelize);

// Definim les associacions
// Una Categoria pot tenir moltes Motocicletes (1-N)
Categoria.hasMany(Motocicleta, { foreignKey: 'categoriaId', onDelete: 'CASCADE' });
Motocicleta.belongsTo(Categoria, { foreignKey: 'categoriaId' });

// Exportem la instància de Sequelize i els models
export { sequelize, Categoria, Motocicleta };
export default sequelize;
