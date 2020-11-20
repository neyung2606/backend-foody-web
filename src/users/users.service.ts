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
import { Role } from 'src/roles/role.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async getUsers(req: any): Promise<User[]> {
    const { username, id } = await req;
    console.log(username, id);
    if (username) {
      return this.userRepository.find({
        where: { username },
        relations: ['role'],
      });
    }
    if (id) {
      return this.userRepository.find({
        where: { id },
        relations: ['role'],
      });
    }
    return await this.userRepository.find({ relations: ['role'] });
  }

  async getUserById(id: number): Promise<User> {
    const user = this.userRepository.findOne(id, {
      relations: ['role', 'role.permissions'],
    });

    if (!user) {
      throw new NotFoundException(`User with ${id} not found!!`);
    }

    return user;
  }

  async getUserByUsername(username: string): Promise<User> {
    const user = this.userRepository.find({ username });
    console.log(user);
    return;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const users = await this.userRepository.find();
    const found = users.filter(user => user.email === createUserDto.email);
    if (found && createUserDto.email) {
      throw new NotFoundException(`User with email is existed!!`);
    }
    return this.userRepository.createUser(createUserDto);
  }

  async updateUserMobile(id: number, user: UpdateUserDto): Promise<User> {
    const userGetByID = await this.getUserById(id);
    const checkRole = await this.checkRole(user.role);
    const userUpdate = checkRole
      ? {
          ...user,
          role: checkRole,
        }
      : {
          ...user,
          role: userGetByID.role,
        };
    if (user.newPassword) {
      const match = await bcrypt.compareSync(
        user.checkPassword,
        userGetByID.password,
      );
      if (match) {
        this.userRepository.update(id, userUpdate);
        return this.getUserById(id);
      } else {
        throw new NotFoundException('Kiểm tra lại pass cũ');
      }
    } else {
      this.userRepository.update(id, userUpdate);
      return this.getUserById(id);
    }
  }

  async updateUser(id: number, user: CreateUserDto): Promise<User> {
    const userGetByID = await this.getUserById(id);
    const checkRole = await this.checkRole(user.role);
    const userUpdate = checkRole
      ? {
          ...user,
          role: checkRole,
        }
      : {
          ...user,
          role: userGetByID.role,
        };
    this.userRepository.update(id, userUpdate);
    return this.getUserById(id);
  }

  async deleteUser(id: ObjectID): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found!!`);
    }
  }

  async login(data): Promise<any> {
    const { username, password } = await data;
    console.log(username, password);

    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['role'],
    });
    if (!user) {
      throw new HttpException('User not existed', HttpStatus.CONFLICT);
    } else {
      const match = await bcrypt.compareSync(password, user.password);
      if (match) {
        const token = jwt.sign(
          {
            userID: `${user.id}`,
          },
          'cnpm17tclc1',
        );
        return {
          token: token,
          role: user.role.name,
        };
      } else {
        throw new HttpException('Login fail', HttpStatus.CONFLICT);
      }
    }
  }

  async checkRole(role?: string): Promise<Role | null> {
    if (role) {
      const arrRole: Role[] = await Role.find();
      return arrRole.find(item => item.name === role);
    } else return null;
  }
}
