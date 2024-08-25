import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, FirestoreService],
})
export class CustomerModule {}
