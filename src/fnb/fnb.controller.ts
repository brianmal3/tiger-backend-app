import { Controller, Get } from '@nestjs/common';
import { FnbService } from './fnb.service';
import { FNBApi } from 'src/utils/fnb_api';

@Controller("fnb")
export class FnbController {
  constructor(
    private readonly fnbService: FnbService,
  ) {}

  @Get("getTransactions")
  async getTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    return await this.fnbService.getTransactions(account, startDate, endDate);
  }

  @Get("getFakeTransactions")
  async getFakeTransactions(
    account: string,
    startDate: string,
    endDate: string
  ): Promise<any[]> {
    return await FNBApi.getFakeTransactions(account, startDate, endDate);
  }
}

