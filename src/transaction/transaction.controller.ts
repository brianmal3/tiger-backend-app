import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

 
  @Get('/getBatchTransactions')
  findBatchTransactions(@Param('batchId') batchId: number) {
    return this.transactionService.findBatchTransactions(+batchId);
  }

}
