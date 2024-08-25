import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { FirestoreService } from 'src/utils/firestore_util';
export declare class CustomerService {
    private fire;
    constructor(fire: FirestoreService);
    create(createCustomerDto: CreateCustomerDto): Promise<string | false>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<string | false>;
}
