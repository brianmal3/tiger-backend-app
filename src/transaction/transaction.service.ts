import { Inject, Injectable } from '@nestjs/common';
import { Batch, Repository } from "typeorm";
import { Transaction } from './entities/transaction.entity';
import { FirestoreService } from 'src/utils/firestore_util';

@Injectable()
export class TransactionService {
  constructor(
    private fire: FirestoreService
  ) {}
  findAll() {
    return this.fire.readAllData('Transactions');
  }

  findBatchTransactions(batchId: string) {
    return this.fire.readDataByField('Transactions', 'batchId', batchId);
  }

}
