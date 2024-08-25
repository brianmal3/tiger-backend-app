import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    findBatchTransactions(batchId: number): Promise<import("./entities/transaction.entity").Transaction[]>;
}
