import { Repository, EntityRepository, ObjectID } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, username, password, dayOfBirth, address, phone } = createUserDto;

        const user = new User();
        user.name = name;
        user.username = username;
        user.password = password;
        user.avatar = "";
        user.dayOfBirth = dayOfBirth;
        user.address = address;
        user.phone = phone;
        user.role = 'user';
        await user.save();

        return user;
    }
}