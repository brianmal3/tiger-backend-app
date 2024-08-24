import { Inject, Injectable } from '@nestjs/common';
import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BatchService {
  constructor(
    @Inject()
    private batchRepository: Repository<Batch>
  ) {}


  findAll() {
    return this.batchRepository.find();
  }

  findOne(id: number) {
    return this.batchRepository.findOne({where: {id: id}});
  }

  update(id: number, updateBatchDto: UpdateBatchDto) {
    return this.batchRepository.update(id, updateBatchDto);
  }

  remove(id: number) {
    return this.batchRepository.delete(id);
  }
}
