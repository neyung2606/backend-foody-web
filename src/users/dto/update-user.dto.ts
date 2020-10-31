import { IsNotEmpty,MinLength,MaxLength, IsEmail,IsMobilePhone } from 'class-validator'

export class UpdateUserDto {
   
    name: string;


    password: string;

    @IsEmail()
    email: String;

   
    dayOfBirth: number;
    address: string;

    @IsMobilePhone()
    phone: string;

    role: string;
}