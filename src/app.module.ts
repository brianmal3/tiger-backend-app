import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { BatchModule } from './batch/batch.module';
import { TransactionModule } from './transaction/transaction.module';
import { FnbModule } from './fnb/fnb.module';
import { BankModule } from './bank/bank.module';
import { BankService } from './bank/bank.service';
import { FnbService } from './fnb/fnb.service';
import { UserService } from './user/user.service';
import { TransactionService } from './transaction/transaction.service';
import { BatchService } from './batch/batch.service';
import { BatchController } from './batch/batch.controller';
import { FnbController } from './fnb/fnb.controller';
import { TransactionController } from './transaction/transaction.controller';
import { UserController } from './user/user.controller';
import { FirestoreService } from './utils/firestore_util';
import { FNBApi } from './utils/fnb_api';

@Module({
  imports: [
    CustomerModule,
    UserModule,
    BatchModule,
    TransactionModule,
    FnbModule,
    BankModule,
  ],
  controllers: [AppController, BatchController, FnbController, TransactionController, UserController],
  providers: [AppService, BankService, FnbService, UserService, TransactionService, BatchService, FirestoreService, FNBApi],
})
export class AppModule {
  }

