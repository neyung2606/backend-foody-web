import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async getUsers(): Promise<User[]> {
        const query = this.createQueryBuilder('users');
        const users = await query.getMany();

        return users;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const { name, username, password, avatar, age, address, phone, job, indentifyCard } = createUserDto;

        const user = new User();
        user.name = name;
        user.username = username;
        user.password = password;
        user.avatar = avatar;
        user.age = age;
        user.address = address;
        user.phone = phone;
        user.job = job;
        user.indentifyCard = indentifyCard;
        user.role = 'user';
        await user.save();

        return user;
    }
}