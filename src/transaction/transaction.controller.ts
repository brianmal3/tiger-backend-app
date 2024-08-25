import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

 
  @Get('/getBatchTransactions')
  async findBatchTransactions(@Param('batchId') batchId: string) {
    return await this.transactionService.findBatchTransactions(batchId);
  }

}
