import { CustomResponse } from "./custom_response";
export declare class FNBApi {
    constructor();
    getAccessToken(local: boolean): Promise<string>;
    refreshToken(): Promise<any>;
    tag: string;
    getFakeTransactions(): Promise<CustomResponse>;
    getTransactions(account: string, startDate: string, endDate: string): Promise<any>;
}
