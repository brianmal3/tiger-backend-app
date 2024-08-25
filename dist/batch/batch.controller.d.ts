import { BatchService } from './batch.service';
import { UpdateBatchDto } from './dto/update-batch.dto';
export declare class BatchController {
    private readonly batchService;
    constructor(batchService: BatchService);
    findAll(): Promise<import("./entities/batch.entity").Batch[]>;
    findOne(id: number): Promise<import("./entities/batch.entity").Batch>;
    update(id: number, updateBatchDto: UpdateBatchDto): Promise<import("typeorm").UpdateResult>;
}
