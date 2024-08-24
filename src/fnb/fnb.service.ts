import { Injectable } from "@nestjs/common";
import { FNBApi } from "../utils/fnb_api";

@Injectable()
export class FnbService {
  constructor(readonly fnbApi: FNBApi) {}
  async getFakeTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    return await FNBApi.getFakeTransactions(account, startDate, endDate);
  }

  async getTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    return await FNBApi.getTransactions(account, startDate, endDate);
  }
}
