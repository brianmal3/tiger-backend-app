import { Inject, Injectable } from '@nestjs/common';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';
import { Repository } from 'typeorm';
import { FirestoreService } from 'src/utils/firestore_util';

@Injectable()
export class BatchService {
  constructor(
    @Inject()
    private fire: FirestoreService
  ) {}


  async findAll() {
    return this.fire.readAllData('Batches');
  }

  async findOne(id: string) {
    return this.fire.readDataByField('Batches', 'id', id);
  }

  async create(batch: Batch) {
    return this.fire.writeData('Batches', batch.batch_id, batch)
  }

  async update(id: string, updateBatchDto: UpdateBatchDto) {
    return this.fire.writeData('Batches',id, updateBatchDto);
  }

}
