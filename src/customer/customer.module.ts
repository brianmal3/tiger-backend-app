import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [DatabaseModule, Repository<Customer>],
  controllers: [CustomerController],
  providers: [CustomerService, Repository<Customer>],
})
export class CustomerModule {}
