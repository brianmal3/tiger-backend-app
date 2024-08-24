import { Test, TestingModule } from '@nestjs/testing';
import { FnbController } from './fnb.controller';
import { FnbService } from './fnb.service';
import { FNBApi } from 'src/utils/fnb_api';

describe('FnbController', () => {
  let controller: FnbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FnbController],
      providers: [FnbService, FNBApi],
    }).compile();

    controller = module.get<FnbController>(FnbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
