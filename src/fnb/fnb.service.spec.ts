import { Test, TestingModule } from '@nestjs/testing';
import { FnbService } from './fnb.service';
import { FNBApi } from 'src/utils/fnb_api';

describe('FnbService', () => {
  let service: FnbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FnbService, FNBApi],
    }).compile();

    service = module.get<FnbService>(FnbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
