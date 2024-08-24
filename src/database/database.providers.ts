import { Logger } from '@nestjs/common';
import { Customer } from 'src/customer/entities/customer.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
        const host = process.env.PGHOST;
        const user = process.env.PGUSER;
        const password = process.env.PGPASSWORD;
        const db = process.env.PGDATABASE;
        
        Logger.log(`Database config; dataSource to be set up: ${db}`);
      
        const dataSource = new DataSource({
        type: 'postgres',
        host: host,
        port: 5432,
        username: user,
        password: password,
        database: db,
        entities: [Customer, User],
        synchronize: true,
        ssl: true,
      });

      return dataSource.initialize();
    },
  },
];
