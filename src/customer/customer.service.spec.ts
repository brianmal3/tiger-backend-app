import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, Repository<Customer>],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
