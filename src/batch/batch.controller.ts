import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BatchService } from './batch.service';
import { UpdateBatchDto } from './dto/update-batch.dto';

@Controller('batch')
export class BatchController {
  constructor(private readonly batchService: BatchService) {}


  @Get('/getAllBatches')
  findAll() {
    return this.batchService.findAll();
  }

  @Get('/getBatchById')
  findOne(@Param('id') id: number) {
    return this.batchService.findOne(+id);
  }

  @Post('/updateBatch')
  update(@Param('id') id: number, @Body() updateBatchDto: UpdateBatchDto) {
    return this.batchService.update(+id, updateBatchDto);
  }

}
