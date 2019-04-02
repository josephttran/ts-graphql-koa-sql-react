import { ConnectionOptions } from 'typeorm';
require('dotenv').config();

export const environment = {
  port: process.env.PORT || 3000
}

export const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
     "src/entity/**/*.ts"
  ]
}