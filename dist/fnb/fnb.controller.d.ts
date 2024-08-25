import { FnbService } from './fnb.service';
import { FNBApi } from 'src/utils/fnb_api';
import { CustomResponse } from 'src/utils/custom_response';
export declare class FnbController {
    private readonly fnbService;
    private readonly fnbApi;
    constructor(fnbService: FnbService, fnbApi: FNBApi);
    getTransactions(account: string, startDate: string, endDate: string): Promise<any[]>;
    getFakeTransactions(): Promise<CustomResponse>;
}
