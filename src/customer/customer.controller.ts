import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/addCustomer')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get('getCustomers')
  findAll() {
    return this.customerService.findAll();
  }

  @Get('/getCustomer')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(+id);
  }

  @Patch('/updateCustomer')
  update(@Param('id') id: number, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete('deleteCustomer')
  remove(@Param('id') id: number) {
    return this.customerService.remove(+id);
  }
}
