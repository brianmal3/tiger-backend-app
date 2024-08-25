import { Repository } from "typeorm";
import { Transaction } from './entities/transaction.entity';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<Transaction>);
    findAll(): Promise<Transaction[]>;
    findBatchTransactions(batchId: number): Promise<Transaction[]>;
}
