import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

