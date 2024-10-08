import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, FirestoreService],
})
export class TransactionModule {}
