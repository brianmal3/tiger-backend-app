import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    findBatchTransactions(batchId: string): Promise<any[]>;
}
