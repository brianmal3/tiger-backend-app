import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, Repository<User>],
})
export class UserModule {}


