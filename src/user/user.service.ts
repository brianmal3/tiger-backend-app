import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirestoreService } from 'src/utils/firestore_util';

@Injectable()
export class UserService {
  constructor(
    private fire: FirestoreService,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.fire.writeData('users', '1', createUserDto);
  }

  findAll() {
    return this.fire.readAllData('users');
  }

  findOne(id: string) {
    return this.fire.readDataByField('users', 'id', id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.fire.writeData('Users',id, updateUserDto);
  }

}
