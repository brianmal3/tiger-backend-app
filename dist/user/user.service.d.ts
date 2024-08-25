import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FirestoreService } from 'src/utils/firestore_util';
export declare class UserService {
    private fire;
    constructor(fire: FirestoreService);
    create(createUserDto: CreateUserDto): Promise<string | false>;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<string | false>;
}
