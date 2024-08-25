import { Controller, Get } from '@nestjs/common';
import { FnbService } from './fnb.service';
import { FNBApi } from 'src/utils/fnb_api';
import { CustomResponse } from 'src/utils/custom_response';

@Controller("fnb")
export class FnbController {
  constructor(
    private readonly fnbService: FnbService,
    private readonly fnbApi: FNBApi
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
  async getFakeTransactions(): Promise<CustomResponse> {
    return await this.fnbApi.getFakeTransactions();
  }
}

