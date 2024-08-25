import { UpdateBatchDto } from './dto/update-batch.dto';
import { Batch } from './entities/batch.entity';
import { FirestoreService } from 'src/utils/firestore_util';
export declare class BatchService {
    private fire;
    constructor(fire: FirestoreService);
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    create(batch: Batch): Promise<string | false>;
    update(id: string, updateBatchDto: UpdateBatchDto): Promise<string | false>;
}
