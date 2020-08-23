import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async getUsers(): Promise<User[]> {
        const query = this.createQueryBuilder('users');
        const users = await query.getMany();

        return users;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, username, password, avatar, dayOfBirth, address, phone } = createUserDto;

        const user = new User();
        user.name = name;
        user.username = username;
        user.password = password;
        user.avatar = avatar;
        user.dayOfBirth = dayOfBirth;
        user.address = address;
        user.phone = phone;
        user.role = 'user';
        await user.save();

        return user;
    }

    async updateUser(user: User, valueUser: UpdateUserDto): Promise<User> {
        console.log(valueUser)
        const { name, username, password, avatar, dayOfBirth, address, phone, role } = valueUser;

        user.name = name;
        user.username = username;
        user.password = password;
        user.avatar = avatar;
        user.dayOfBirth = dayOfBirth;
        user.address = address;
        user.phone = phone;
        user.role = role;
        await user.save();

        return user;
    }
}