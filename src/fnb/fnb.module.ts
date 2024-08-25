import { Module } from '@nestjs/common';
import { FnbService } from './fnb.service';
import { FnbController } from './fnb.controller';
import { FNBApi } from 'src/utils/fnb_api';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [FnbController],
  providers: [FnbService, FNBApi, FirestoreService],
})
export class FnbModule {}
