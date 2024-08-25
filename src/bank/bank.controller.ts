import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { Bank } from './entities/bank.entity';
import { CustomResponse } from 'src/utils/custom_response';

@Controller("bank")
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post("addBank")
  async create(@Body() createBankDto: CreateBankDto): Promise<CustomResponse> {
    return await this.bankService.createBank(createBankDto);
  }


  @Get("getBanks")
  async findAll(): Promise<CustomResponse> {
    return await this.bankService.findAll();
  }
  
  @Get("doAllBanks")
  async doAllBanks(): Promise<CustomResponse> {
    return await this.bankService.doAllBanks();
  }

  @Get("getBank")
  async findOne(@Param("id") id: string): Promise<Bank> {
    return await this.bankService.findOne(id);
  }
  @Get("getBankByName")
  async findByName(@Param("name") name: string): Promise<Bank> {
    return await this.bankService.findByName(name);
  }

}
