import { BatchService } from './batch.service';
import { UpdateBatchDto } from './dto/update-batch.dto';
export declare class BatchController {
    private readonly batchService;
    constructor(batchService: BatchService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, updateBatchDto: UpdateBatchDto): Promise<string | false>;
}
