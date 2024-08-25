import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { Bank } from './entities/bank.entity';
import { CustomResponse } from 'src/utils/custom_response';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    create(createBankDto: CreateBankDto): Promise<CustomResponse>;
    findAll(): Promise<CustomResponse>;
    doAllBanks(): Promise<CustomResponse>;
    findOne(id: string): Promise<Bank>;
    findByName(name: string): Promise<Bank>;
}
