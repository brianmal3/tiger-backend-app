import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { FirestoreService } from 'src/utils/firestore_util';

@Injectable()
export class CustomerService {
  constructor(
    private fire: FirestoreService,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    const id = `${new Date().getTime()}`
    return this.fire.writeData("customers", id, createCustomerDto);
  }

  findAll() {
    return this.fire.readAllData("customers");
  }

  findOne(id: string) {
    return this.fire.readDataByField("customers", "id", id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.fire.writeData("customers", id, updateCustomerDto);
  }

}
