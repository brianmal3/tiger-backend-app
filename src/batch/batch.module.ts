import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { Repository, Batch } from 'typeorm';

@Module({
  controllers: [BatchController],
  providers: [BatchService, Repository<Batch>],
})
export class BatchModule {}
