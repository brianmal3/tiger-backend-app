import { Injectable } from "@nestjs/common";
import { FNBApi } from "../utils/fnb_api";

@Injectable()
export class FnbService {
  constructor(readonly fnbApi: FNBApi) { }
  async getFakeTransactions(): Promise<any> {
    try {
      const transactions = await this.fnbApi.getFakeTransactions();
      return transactions;
    } catch (error) {
      if (typeof error === 'string') {
        // Parse the error string
        const customError = JSON.parse(error);
        console.error(`Error from FNBApi: ${JSON.stringify(customError)}`);
        return customError;
      } else {
        return {
          statusCode: 500,
          message: 'getFakeTransactions - Internal Server Error',
        }
      }
    }
  }


  async getTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    return await this.fnbApi.getTransactions(account, startDate, endDate);
  }
}
