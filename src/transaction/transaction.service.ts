import { Inject, Injectable } from '@nestjs/common';
import { Batch, Repository } from "typeorm";
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @Inject()
    private transactionRepository: Repository<Transaction>
  ) {}
  findAll() {
    return this.transactionRepository.find();
  }

  findBatchTransactions(batchId: number) {
    return this.transactionRepository.find({ where: { batch_id: batchId } });
  }

}
