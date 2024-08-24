import { Module } from '@nestjs/common';
import { FnbService } from './fnb.service';
import { FnbController } from './fnb.controller';
import { FNBApi } from 'src/utils/fnb_api';

@Module({
  controllers: [FnbController],
  providers: [FnbService, FNBApi],
})
export class FnbModule {}
