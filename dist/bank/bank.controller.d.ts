import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';
export declare class BankController {
    private readonly bankService;
    constructor(bankService: BankService);
    create(createBankDto: CreateBankDto): Promise<Bank>;
    findAll(): Promise<Bank[]>;
    findOne(id: string): Promise<Bank>;
    findByName(name: string): Promise<Bank>;
    update(id: string, updateBankDto: UpdateBankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
