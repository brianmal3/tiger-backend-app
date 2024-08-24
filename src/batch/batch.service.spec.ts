import { Test, TestingModule } from '@nestjs/testing';
import { BatchService } from './batch.service';
import { Repository, Batch } from 'typeorm';

describe('BatchService', () => {
  let service: BatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatchService, Repository<Batch>],
    }).compile();

    service = module.get<BatchService>(BatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
