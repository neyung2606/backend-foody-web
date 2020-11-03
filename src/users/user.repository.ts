import { Repository, EntityRepository, ObjectID } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, username, password, email, dayOfBirth, address, phone, role} = createUserDto;

        const user = new User();
        user.name = name;
        user.username = username;
        user.password = password;
        user.email = email;
        user.avatar = "";
        user.dayOfBirth = dayOfBirth;
        user.address = address;
        user.phone = phone;
        user.role = role ? role : 'user';
        await user.save();

        return user;
    }
}