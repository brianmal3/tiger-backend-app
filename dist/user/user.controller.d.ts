import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<string | false>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<string | false>;
}
