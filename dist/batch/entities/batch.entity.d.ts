import { Transaction } from "src/transaction/entities/transaction.entity";
export declare class Batch {
    id: number;
    batch_id: string;
    branch_code: string;
    batch_date: string;
    operator_name: string;
    sub_total: number;
    discount: number;
    total: number;
    posted: boolean;
    transactions: Transaction[];
}
