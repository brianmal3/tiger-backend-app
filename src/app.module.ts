import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatchModule } from './batch/batch.module';
import { TransactionModule } from './transaction/transaction.module';
import { FnbModule } from './fnb/fnb.module';
import { BankModule } from './bank/bank.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: process.env.PGHOST,
    //   port: 5432,
    //   username: process.env.PGUSER,
    //   password: process.env.PGPASSWORD,
    //   database: process.env.PGDATABASE,
    //   autoLoadEntities: true,
    //   synchronize: true,

    //   ssl: true,
    // }),
    CustomerModule,
    UserModule,
    BatchModule,
    TransactionModule,
    FnbModule,
    BankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
