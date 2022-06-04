/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'Bootcamp',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
      });

      return dataSource.initialize();
    },
  },
];