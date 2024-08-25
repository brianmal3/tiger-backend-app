import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { Repository, Batch } from 'typeorm';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [BatchController],
  providers: [BatchService, FirestoreService],
})
export class BatchModule {}
