import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/addUser')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/getAllUsers')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/getUser')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Patch('/updateUser')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('deleteUser')
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
