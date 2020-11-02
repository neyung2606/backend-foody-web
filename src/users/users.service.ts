import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { ObjectID } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUsers(username: string): Promise<User[]> {
    const users = await this.userRepository.find();
    if (username) {
      const user = users.filter(user => user.username === username);
      return user;
    } else return users;
  }

  async getUserById(id: ObjectID): Promise<User> {
    const user = this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(`User with ${id} not found!!`);
    }

    return user;
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = this.userRepository.find({username});
    console.log(user)
    return;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const hashPass = await jwt.sign(createUserDto.password, 'cnpm17tclc1');
    const user: CreateUserDto = {
      ...createUserDto,
      password: hashPass,
    };
    return this.userRepository.createUser(user);
  }

  async updateUser(id: ObjectID, user: UpdateUserDto): Promise<User> {
    if (!user.password) {
      const userGetByID = await this.getUserById(id);
      user = {
        ...user,
        password: userGetByID.password,
      };
    }
    this.userRepository.update(id, user);
    return this.getUserById(id);
  }

  async deleteUser(id: ObjectID): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found!!`);
    }
  }

  async checkIdUser(id: ObjectID): Promise<boolean> {
    this.getUserById(id);
    return this.getUserById(id) ? true : false;
  }

  async login(data): Promise<any> {
    const { username, password } = await data;
    console.log(username, password);

    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new HttpException('User not existed', HttpStatus.CONFLICT);
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          userID: `${user.id}`,
        },
        'cnpm17tclc1',
      );
      return {
        token: token,
      };
    } else {
      throw new HttpException('Login fail', HttpStatus.CONFLICT);
    }
  }
}
