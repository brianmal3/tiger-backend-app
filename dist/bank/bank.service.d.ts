import { CreateBankDto } from "./dto/create-bank.dto";
import { UpdateBankDto } from "./dto/update-bank.dto";
import { Bank } from "./entities/bank.entity";
import { Repository } from "typeorm";
export declare class BankService {
    private bankRepository;
    constructor(bankRepository: Repository<Bank>);
    createBank(bankDto: CreateBankDto): Promise<Bank>;
    findAll(): Promise<Bank[]>;
    findOne(id: number): Promise<Bank>;
    findByName(name: string): Promise<Bank>;
    update(id: number, updateBankDto: UpdateBankDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
