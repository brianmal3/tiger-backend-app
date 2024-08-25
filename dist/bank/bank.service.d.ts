import { CreateBankDto } from "./dto/create-bank.dto";
import { CustomResponse } from "src/utils/custom_response";
import { FirestoreService } from "src/utils/firestore_util";
export declare class BankService {
    private readonly fire;
    constructor(fire: FirestoreService);
    createSouthAfricanBanks(): Promise<CustomResponse>;
    createBank(bankDto: CreateBankDto): Promise<CustomResponse>;
    findAll(): Promise<CustomResponse>;
    doAllBanks(): Promise<CustomResponse>;
    findOne(id: string): Promise<any>;
    findByName(name: string): Promise<any>;
}
