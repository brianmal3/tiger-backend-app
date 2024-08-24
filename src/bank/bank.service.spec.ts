import { Test, TestingModule } from '@nestjs/testing';
import { BankService } from './bank.service';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';

describe('BankService', () => {
  let service: BankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankService, Repository<Bank>],
    }).compile();

    service = module.get<BankService>(BankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
