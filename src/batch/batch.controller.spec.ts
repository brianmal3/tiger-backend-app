import { Test, TestingModule } from '@nestjs/testing';
import { BatchController } from './batch.controller';
import { BatchService } from './batch.service';
import { Batch, Repository } from 'typeorm';

describe('BatchController', () => {
  let controller: BatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatchController],
      providers: [BatchService, Repository<Batch>],
    }).compile();

    controller = module.get<BatchController>(BatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
