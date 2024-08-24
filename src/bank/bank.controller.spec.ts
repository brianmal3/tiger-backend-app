import { Test, TestingModule } from '@nestjs/testing';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { Repository } from 'typeorm';
import { Bank } from './entities/bank.entity';

describe('BankController', () => {
  let controller: BankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankController],
      providers: [BankService, Repository<Bank>],
    }).compile();

    controller = module.get<BankController>(BankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
