import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';

@Module({
  controllers: [BankController],
  providers: [BankService, Repository<Bank>],
})
export class BankModule {}
