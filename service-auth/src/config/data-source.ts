import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../models/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'host.docker.internal',
  port: 3306,
  username: 'root',
  password: '',
  database: 'auth_service',
  synchronize: true,
  entities: [User],
});