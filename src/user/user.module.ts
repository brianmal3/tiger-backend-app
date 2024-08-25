import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { FirestoreService } from 'src/utils/firestore_util';

@Module({
  controllers: [UserController],
  providers: [UserService, FirestoreService],
})
export class UserModule {}


