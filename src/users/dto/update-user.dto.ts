import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsMobilePhone,
} from 'class-validator';
import { Role } from 'src/roles/role.entity';

export class UpdateUserDto {
  name: string;

  newPassword: string;

  checkPassword: string;

  @IsEmail()
  email: String;

  dayOfBirth: Date;
  address: string;

  @IsMobilePhone()
  phone: string;

  role: string;
}
