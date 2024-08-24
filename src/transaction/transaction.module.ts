import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Repository, Transaction } from 'typeorm';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, Repository<Transaction>],
})
export class TransactionModule {}
