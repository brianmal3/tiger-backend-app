import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';
import { Repository } from 'typeorm';
export declare class BatchService {
    private batchRepository;
    constructor(batchRepository: Repository<Batch>);
    findAll(): Promise<Batch[]>;
    findOne(id: number): Promise<Batch>;
    update(id: number, updateBatchDto: UpdateBatchDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
