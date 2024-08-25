import { FirestoreService } from 'src/utils/firestore_util';
export declare class TransactionService {
    private fire;
    constructor(fire: FirestoreService);
    findAll(): Promise<any[]>;
    findBatchTransactions(batchId: string): Promise<any[]>;
}
