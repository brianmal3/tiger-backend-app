import { FNBApi } from "../utils/fnb_api";
export declare class FnbService {
    readonly fnbApi: FNBApi;
    constructor(fnbApi: FNBApi);
    getFakeTransactions(): Promise<any>;
    getTransactions(account: string, startDate: string, endDate: string): Promise<any[]>;
}
