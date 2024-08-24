import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankService } from './bank.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';

@Controller("bank")
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post("addBank")
  create(@Body() createBankDto: CreateBankDto): Promise<Bank> {
    return this.bankService.createBank(createBankDto);
  }

  @Get("getBanks")
  findAll(): Promise<Bank[]> {
    return this.bankService.findAll();
  }

  @Get("getBank")
  findOne(@Param("id") id: string): Promise<Bank> {
    return this.bankService.findOne(+id);
  }
  @Get("getBankByName")
  async findByName(@Param("name") name: string): Promise<Bank> {
    return this.bankService.findByName(name);
  }

  @Patch("updateBank")
  update(@Param("id") id: string, @Body() updateBankDto: UpdateBankDto) {
    return this.bankService.update(+id, updateBankDto);
  }

  @Delete("deleteBank")
  remove(@Param("id") id: string) {
    return this.bankService.remove(+id);
  }
}
