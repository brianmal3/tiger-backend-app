import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<string | false>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<string | false>;
}
