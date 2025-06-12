import 'reflect-metadata';
import { AppDataSource } from './src/config/data-source';
const app = require('./app');
const PORT = process.env.PORT || 3000;


AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connected');
    app.listen(3003, () => {
      console.log('🚀 Server is running on http://localhost:3000');
    });
  })
  .catch((err : any) => {
    console.error('❌ Database connection error', err);
  });