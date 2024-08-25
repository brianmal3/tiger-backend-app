import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [BankController],
  providers: [BankService, FirestoreService],
})
export class BankModule {}
